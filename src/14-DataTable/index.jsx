import { useState } from "react"
import data from './dataTable.json'


const DataTable = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)


    const columns = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Age', key: 'age' },
        { label: 'Occupation', key: 'occupation' },
    ]

    //这个是分页的重点逻辑
    function paginateUsers(usersList, page, pageSize) {
        const start = (page - 1) * pageSize;//数据需要截取的起点 假如page是1，然后pagesize是5，那就是截取从第0
        const end = start + pageSize;//数据需要截取的结束点 
        const pageUsers = usersList.slice(start, end); //截取数据 
        const totalPages = Math.ceil(usersList.length / pageSize); //用ceil来向上取整
        return { pageUsers, totalPages };//返回总页数和被截取的数据
    }

    //解构出总页数和被截取的数据
    const { totalPages, pageUsers } = paginateUsers(data, page, pageSize)
    return (
        <>
            <table >
                <thead>
                    <tr>
                        {
                            columns.map((item) => (
                                <th key={item.key}>
                                    {item.label}
                                </th>
                            ))
                        }
                    </tr>

                </thead>
                <tbody>
                    {//用被截取的数据渲染
                        pageUsers.map(({ id, name, age, occupation }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{occupation}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <hr />
            <div className="pagination">
                <select
                    aria-label="Page size"
                    onChange={(event) => {
                        setPageSize(Number(event.target.value));
                        setPage(1);
                    }}>
                    {[5, 10, 20].map((size) => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
                <div className="pages">
                    <button
                        disabled={page === 1}
                        onClick={() => {
                            setPage(page - 1);
                        }}>
                        Prev
                    </button>
                    <span aria-label="Page number">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        disabled={page === totalPages}
                        onClick={() => {
                            setPage(page + 1);
                        }}>
                        Next
                    </button>
                </div>
            </div>
        </>
    )

}

export default DataTable

/**
 * 逻辑点是截取多少数据，和总页数要用Math.ceil向上取整
 * 创建两个state， page和pagesize
 * 创建一个处理数据的函数，传入数据，page和pageSize
 * 在函数内部根据select传来的pageSize的值来计算出数据需要截取的起点和终点
 * 起点就是let start = (page-1) * pageSize ，终点是 let end = start +pageSize
 * 然后把传入的数据截取， const configedDate = data.slice(start,end)
 * 比如你在第一页，然后需要一页展示5条数据 ,起点就是(1-1)* 5 = 0 ,终点就是 0 + 5
 * 然后slice就会截取index 0 - 5的数据  然后用处理过后的数据来map渲染。从而实现不同的pageSize
 */