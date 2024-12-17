import React, { useState } from 'react';

 function TableGenerator() {
  const [rows, setRows] = useState(0); // 用户输入的行数
  const [cols, setCols] = useState(0); // 用户输入的列数
  const [table, setTable] = useState([]); // 表格数据

  const handleGenerateTable = () => {
    // 根据行数和列数生成表格数据 生成一个二维数组
    const generatedTable = Array.from({ length: rows }, (_, rowIndex) => //渲染出一个长度为row的数组 
      Array.from({ length: cols }, (_, colIndex) => `Row ${rowIndex + 1}, Col ${colIndex + 1}`) //长度为row的数组中的每一个元素又被渲染成一个columes长度的数组
    );
    console.log(generatedTable)
    setTable(generatedTable); //最终改变table的值， 传入的是一个二维数组
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Table Generator</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            min="0"
            onChange={(e) => setRows(Number(e.target.value))}
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </label>
        <label>
          Columns:
          <input
            type="number"
            value={cols}
            min="0"
            onChange={(e) => setCols(Number(e.target.value))}
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </label>
        <button onClick={handleGenerateTable}>Generate Table</button>
      </div>

      {table.length > 0 && (
        <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            {table.map((row, rowIndex) => ( //渲染二维数组的外层数组，也就是row的长度，将它渲染成tr
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => ( //渲染外层二维数组的每个元素，也就是col的长度，将它渲染成td
                  <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableGenerator

/**
 * 简单来说就是 
 * 
 * 根据input输入的值，然后使用Array.from()来生成一个对应长度的二维数组，  //重点 
 * Array.from({length:row},()=>{  //渲染出一维数组，row的长度
 * Array.from({length:col}) //一维数组里的每一个元素，还是一个数组
 * })
 * 假如row=2 ，col=3 [[1,2,3],[1,2,3]] 最外层是row的长度2，里层是col的长度3
 * 然后将数据更新到table里
 * 渲染 table 用table.map(row=>{})渲染层外层数组，也就是row，将它渲染成tr，
 * 然后嵌套着将每一row的col渲染成td
 * 最终就渲染成了 一个table
 * 
 */