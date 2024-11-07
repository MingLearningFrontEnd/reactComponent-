import { useMemo, useState } from "react"
import imgSel from './image/sel.png'
import imgUnSel from './image/unsel.png'

const Cart = () => {
  const [data, setData] = useState([
    { name: '手机', price: 8000, selected: false, count: 1 },
    { name: '电脑', price: 10000, selected: false, count: 1 },
    { name: 'PS5', price: 4000, selected: false, count: 1 },
    { name: 'switch', price: 2000, selected: false, count: 1 },
  ])

  const changeNum = (flag, index) => {
    //因为数组和对象的修改不可以单独修改，所以复制一份新的数组
    let narr = [...data]

    if (flag === '+') {
      //将新数组里面需要修改的做操作
      //选中的那一项的数据对象={ 展开选中的那一项对象 ， 里面的count的那个选中的对象的count+1}
      narr[index] = { ...narr[index], count: narr[index].count + 1 }
    } else if (flag === '-' && narr[index].count > 1) {
      narr[index] = { ...narr[index], count: narr[index].count - 1 }
    }

    //在这里整体替换掉
    setData(narr)
  }

  //选择
  const select = (index) => {
    let narr = [...data]
    narr[index] = { ...narr[index], selected: !narr[index].selected }
    setData(narr)
  }

  //全选逻辑 --> 数据selected的数量和所有数据的数量一致时 全选会勾上
  let checkAll = useMemo(() => {
    return data.filter(item => item.selected).length === data.length
    //返回值是 布尔
  }, [data])

  //点击全选，全选反选逻辑  
  //用checkall来判断是否全部选中，要是全部选中，全选反选就会全部不选中，如果没有全部选中，就全选上
  const selAll = () => {
    let narr = data.map(item => ({ ...item, selected: checkAll ? false : true }))
    setData(narr)
  }

  //总价逻辑

  let totalPrice = useMemo(() => {
    //过滤出被选中的数据
    let selectedData = data.filter(item => item.selected)
    //给一个总价初始值
    let total = 0
    //再计算每个选中的数据的价钱加到总价里
    selectedData.forEach(item => {
      total += item.price * item.count
    })
    //返回总价
    return total
  }, [data])

  //删除逻辑
  const del = (index) => {
    let narr = [...data]
    narr.splice(index, 1)
    setData(narr)
  }

  return (
    <>
      {
        data.map((item, index) =><div key={item.name}>
            <img src={item.selected ? imgSel : imgUnSel} alt="" width='15' onClick={() => select(index)} />
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => changeNum('-', index)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => changeNum('+', index)}>+</button>
            <button onClick={() => del(index)}>删除</button>
          </div>)
      }
      {/* 是true就全选，是false就不是全选 */}
      <img src={checkAll ? imgSel : imgUnSel} width='15' onClick={selAll} alt="" /><span>全选</span>
      <h1>总价：{totalPrice}</h1>
    </>
  )
}

export default Cart