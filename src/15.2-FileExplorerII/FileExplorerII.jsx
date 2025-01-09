
import { useState } from "react"

const FileExplorerII = ({ data }) => {

    const [openData, setOpenData] = useState(new Set())

    const toggleOpen = (folderName) => {
        const newOpenData = new Set(openData)
        newOpenData.has(folderName)
            ? newOpenData.delete(folderName)
            : newOpenData.add(folderName)
        setOpenData(newOpenData)
    }

    // 扁平化数据，并不是将所有数据全部扁平化，而是点开哪个，将哪个扁平化
    const flattenData = (data, depth = 0) => {
        let result = [] 
        for(const value of data){//遍历data数组里面的值 
            result.push({...value, depth}) //因为每个数组的值是一个对象，然后展开运算符就可以展开健值对 然后将所有值加上depth属性
            if (value.children&&openData.has(value.name)){ //判断展开的值(对象)里面有没有children属性，并且判断是否展开
                result = result.concat(flattenData(value.children,depth +1))//如果上面逻辑都是true，就递归操作，将children(children也是对象)传入加上depth属性并且depth属性值+1
            }
        }
        return result
    }

    const flatList = flattenData(data)






    return <>
        <ul style={{ listStyle: 'none' }}>
            {flatList.map(item =>
                <li
                    key={item.id}
                    style={{
                        paddingLeft: `${item.depth}* 20px`,
                        cursor: item.children ? 'pointer' : 'default'
                    }}
                    onClick={() => item.children && toggleOpen(item.name)}>
                    {item.children ? (openData.has(item.name) ? '📁' : '📁') : '📃'}   {item.name}
                </li>
            )}
        </ul>
    </>
}
export default FileExplorerII