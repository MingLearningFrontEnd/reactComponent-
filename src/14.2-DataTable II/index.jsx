
import data from './dataTableII.json'
import { useState } from 'react'



const DataTableII = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' }); // 排序配置

    const columns = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
        { label: 'Occupation', key: 'occupation' }
    ]

    const sortedData = [...data].sort((a, b) => {
        if (sortConfig.key) {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    //重点 处理每页的数据个数和总页个数
    const configeData = (data, page, pageSize) => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        const slicedData = data.slice(start, end)
        const totalPages = Math.ceil(data.length / pageSize) //ceil向上取整
        return { slicedData, totalPages }
    }
    const { slicedData, totalPages } = configeData(sortedData, page, pageSize)

    // 点击表头处理排序
    const handleSort = (key) => {
        setSortConfig((prevSortConfig) => ({
            key,
            direction: prevSortConfig.key === key && prevSortConfig.direction === 'asc' ? 'desc' : 'asc',
        }));
    };
   
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map(({ label, key }) => (
                            <th key={key} onClick={()=>handleSort(key)} style={{cursor:'pointer'}}>
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {slicedData.map(({ id, name, age, occupation }) => (
                        <tr key={id}>
                            <td key={id}>{id}</td>
                            <td key={name}>{name}</td>
                            <td key={age}>{age}</td>
                            <td key={occupation}>{occupation}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div>
                <select
                    onChange={(e) => {
                        setPageSize(Number(e.target.value))
                        setPage(1)
                    }
                    }
                >
                    {
                        [10, 15, 20, 25].map(item =>
                            <option value={item} key={item}>
                                show {item}
                            </option>
                        )
                    }
                </select>
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >prev</button>
                <span>
                    {page} of {totalPages}
                </span>
                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >next</button>
            </div>
        </div>
    )
}

export default DataTableII