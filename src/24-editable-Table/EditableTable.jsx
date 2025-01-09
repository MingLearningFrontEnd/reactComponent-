import { useState } from "react"

const columns = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Position', key: 'age' },
    { label: 'Salary', key: 'occupation' },
    { label: 'Action', key: 'action' },
]

const EditableTable = ({ initalData }) => {
    const [data, setData] = useState(initalData)


const handleClick = (id)=>{
  setData((prev)=>prev.map((item)=>{
    return item.id ===id?{...item,salaryEdit: !item.salaryEdit}:item
  }))
}
    
const handleChange=(id, newSalary)=>{
    setData((prev)=>prev.map((item)=>{
        return item.id === id?{...item,salary:newSalary}:item
    }))
}

    return <>
        <table>
            <thead>
                {
                    columns.map(({ label, key }) => {
                        return <td key={key}>{label}</td>
                    })
                }
            </thead>
            <tbody>
                {data.map(({ id, name, position, salary, salaryEdit }, index) => {
                    return <tr key ={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{position}</td>
                        <td>{
                            salaryEdit ?
                             <input value={salary} type = 'number' onChange= {(e)=>handleChange(id, Number(e.target.value))}/> 
                             : salary
                        }</td>
                        <td><button onClick={()=>handleClick(id)}>{salaryEdit ? 'save' : 'edit'}</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}

export default EditableTable