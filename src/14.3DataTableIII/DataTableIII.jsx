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

    //sortedData不是函数，是用sort处理过后的数据 要传入slicedata中处理
    const sortedData = [...user].sort((a, b) => {
        const aValue = a[configSort.key]; //获取a对应key的值
        const bValue = b[configSort.key];//获取b对应key的值
        //如果有key
        if (configSort.key) {
            //核心逻辑 a<b 应该返回-1 然后再加上direction可以来实现倒序或正序
            if (aValue < bValue) return configSort.direction === 'asc' ? -1 : 1
            if (aValue > bValue) return configSort.direction === 'asc' ? 1 : -1
        }
        //如果什么都没有 都正常 就return0 表示一样大
        return 0
    })

    //重点 处理每页的数据个数和总页个数
    const configeData = (data, page, pageSize) => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        const slicedData = data.slice(start, end) //处理从哪里开始到哪里结束的数据slice
        const totalPages = Math.ceil(data.length / pageSize) //ceil向上取整
        return { slicedData, totalPages }
    }

    //解构
    const { slicedData, totalPages } = configeData(sortedData, page, pageSize) //传入sortedData

    // 点击表头处理排序
    const handleSort = (key) => {//传入相应的key
        setConfigSort((prev) => ({
            key,//es6语法简写 相当于key:key
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };


    //为了预防错乱，下面的input，button 包括select的值都需要转换车number
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map(({ label, key }) => (
                            <th
                                key={key}
                                onClick={() => handleSort(key)}
                                style={{ cursor: 'pointer' }}
                            >{label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {slicedData.map(({ id, name, age, occupation }) => {
                        return <tr key={id}>
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
                <span>Page{page} of {totalPages}</span>
                <button
                    onClick={() => setPage((prev => Number(prev + 1)))}
                    disabled={page === totalPages ? true : false}
                >next</button>
                <input
                    min='1'
                    max={totalPages}
                    type='number'
                    value={goVal}
                    onChange={(e) => setGoVal(Number(e.target.value))}
                />
                <button onClick={() => setPage(goVal)} disabled={goVal > totalPages ? true : false}>Go</button>
            </div>
        </>
    )

}

export default DataTableIII