import { useState } from "react"
import data from './dataTableII.json'


const Practice = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [goVal, setGoVal] = useState(1)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' }); // 排序配置

  const columns = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Occupation', key: 'occupation' }
  ]


  //sortedData不是函数 是对原数据用sort方法进行处理得到的心数据 之后会传入pagenateData这个函数中
  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortConfig.key] //获取a的值
    const bValue = b[sortConfig.key] //获取b的值
    if (sortConfig.key) {//如果sortconfig有key值
      //并且如果a小于b，然后根据是否正序还是倒序来来返回-1和1， -1是正序，1是到序 加direction是可以点击正序和到序的切换
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
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

  const { totalPage, slicedData } = pagenateData(sortedData, page, pageSize) //传入已经被排序好的数据

  
  //点击给sortCofig的key加上对应点击的key值，并且判断是正序还是倒序
  const handleSort = (key) => {
    setSortConfig((prev) => {
      return {
        key,
        direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
      }
    })
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(({ label, key }) => (
              <th key={key} style={{ cursor: 'pointer' }} onClick={() => handleSort(key)}>
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
      <hr />
      <div>
        <select onChange={(e) => setPageSize(Number(e.target.value))}>
          {[5, 10, 15].map((item, index) => {
            return <option key={index} value={item}>
              show{item}
            </option>
          })}
        </select>
        <button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >prev</button>
        <span>{page}of total{totalPage}</span>
        <button
          disabled={page === totalPage ? true : false}
          onClick={() => setPage(page + 1)}

        >next</button>
        <span>
          Go to <input type='number' style={{ width: 40 }}
            onChange={(e) => setGoVal(e.target.value)}
            min='1'
            max={totalPage}
          />
          <button disabled={goVal !== '' ? false : true} onClick={() => setPage(goVal)}>Go</button>
        </span>
      </div>

    </div>
  )
}

export default Practice


