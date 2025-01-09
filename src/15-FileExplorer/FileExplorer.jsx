import React, { useState } from "react";

function FileExplorer({ data }) {
    //以后树状结构都是这样渲染的， 写一个递归函数
    const [openFolders, setOpenFolders] = useState(new Set());

    //控制folder的开关
    const toggleFloder = (folderName) => {
        const newOpenFolders = new Set(openFolders) //复制一个新的Set,因为数据是不可变的
        //修改新的Set状态 最开始也是空的set， 但是在的UI组件会点击，点击就会加上值
        newOpenFolders.has(folderName) //判断有没有name
            ? newOpenFolders.delete(folderName) //如果有就删除
            : newOpenFolders.add(folderName)//没有就加
        setOpenFolders(newOpenFolders) //最后将修改后的新数据传入setOpenFolder里来修改openFloder
    }

    //递归渲染函数
    const renderTree = (data) => {
        return <ul style={{ listStyleType: 'none' }}>
            {data.map(item => {
                //判断有没有children属性，必须是个数组，并且数组有长度
                const hasChildren = Array.isArray(item.children) && item.children.length > 0
                //判断被遍历的当前item是否被打开 
                const isOpen = openFolders.has(item.name) //但是现在的openFolders时newset空值a
                return (
                    <li key ={item.id}>
                        <div
                            style={{ cursor: hasChildren ? 'pointer' : 'default' }}
                            onClick={() => hasChildren && toggleFloder(item.name)} //有孩子的前提下，传入文件名字，才能点击控制开关
                        >
                            {hasChildren ? '📁':'📃'} {item.name}  {/* 这里的三元判断里面又塞了一个三元判断*/}
                        </div>

                        {/*递归渲染子节点 ，有children,并且children是展开的情况下 才递归渲染 */}
                        {hasChildren && isOpen && renderTree(item.children)}
                    </li>
                )
            })}
        </ul>
    }

    return  <div>{renderTree(data)}</div> //在这渲染递归函数传入数据

}

export default FileExplorer