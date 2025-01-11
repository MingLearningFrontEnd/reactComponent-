import user from './dataTable.json'
import { useState } from 'react'

//包含了 pageSize, 前进后退，跳转， 排序
const DataTableIII = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [goVal, setGoVal] = useState(1) //给tabel跳转的值
    const [configSort, setConfigSort] = useState({ key: null, direction: 'asc' }) //key是标明那一列的数据需要排序
    const columns = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
        { label: 'Occupation', key: 'occupation' }
    ]

    const sortdData = [...user].sort((a, b) => {
        const aValue = a[configSort.key]
        const bValue = b[configSort.key]
        if(configSort.key){
            if(aValue<bValue)return configSort.direction ==='asc'?-1:1
            if(aValue>bValue)return configSort.direction ==='asc'?1:-1
        }
        return 0
    })

    const pagenateData = (data, page, pageSize) => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        const slicedData = data.slice(start, end)
        const totalPage = Math.ceil(data.length / pageSize)
        return { slicedData, totalPage }
    }
    const { slicedData, totalPage } = pagenateData(sortdData, page, pageSize)

    const handleSort= (key)=>{
        setConfigSort(prev=>(
            {
                key,
                direction:prev.key ===key&&prev.direction==='asc'?'desc':'asc'
            }
        ))
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map(({ label, key }) => (
                            <th 
                            key={key}
                            onClick={()=>handleSort(key)}
                            style={{cursor:'pointer'}}
                            >{label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {slicedData.map(({ id, name, age, occupation }) => {
                        return <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{occupation}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div>
                <select onChange={(e) => setPageSize(Number(e.target.value))}>
                    {[5, 10, 15].map((item) => {
                        return <option key={item} value={item}>
                            show{item}
                        </option>
                    })}
                </select>
                <button
                    onClick={() => setPage((prev => Number(prev - 1)))}
                    disabled={page === 1 ? true : false}
                >prev</button>
                <span>Page{page} of {totalPage}</span>
                <button
                    onClick={() => setPage((prev => Number(prev + 1)))}
                    disabled={page === totalPage ? true : false}
                >next</button>
                <input min='1'
                    max={totalPage}
                    type='number'
                    value={goVal}
                    onChange={(e) => setGoVal(Number(e.target.value))} />

                <button onClick={() => setPage(goVal)} disabled={goVal > totalPage ? true : false}>Go</button>
            </div>
        </>
    )

}

export default DataTableIII