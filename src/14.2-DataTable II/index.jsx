
import data from './dataTableII.json'
import { useState } from 'react'



const DataTableII = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const columns = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
        { label: 'Occupation', key: 'occupation' }
    ]

  

    //重点 处理每页的数据个数和总页个数
    const configedData = (data, page, pageSize) => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        const slicedData = data.slice(start, end)
        const totalPages = Math.ceil(data.length / pageSize) //ceil向上取整
        return { slicedData, totalPages }
    }

    const { slicedData, totalPages } = configedData(data,page, pageSize)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map(({ label, key }) => (
                            <th key={key}>
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {slicedData.map(({ id, name, age, occupation }) => (
                        <tr>
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
                disabled={page ===1}
                onClick={()=>setPage(page-1)}
                >prev</button>
                <span>
                    {page} of {totalPages}
                </span>
                <button
                disabled={page === totalPages}
                onClick={()=>setPage(page+1)}
                >next</button>
            </div>
        </div>
    )
}

export default DataTableII