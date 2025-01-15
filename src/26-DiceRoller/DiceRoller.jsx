import React, { useState } from "react";
import './DiceRoller.css'
const DiceRoller = () => {
  const [numDice, setNumDice] = useState(1); // 骰子数量
  const [results, setResults] = useState([]); // 掷骰子的结果

  // 骰子滚动逻辑
  const rollDice = () => {
    const rolls = Array.from({ length: numDice }, () =>
      Math.floor(Math.random() * 6) + 1
    );
    setResults(rolls);
  };

  // 处理用户输入骰子数量
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 12) {
      setNumDice(value);
    }
  };

  // 将结果分成每行 3 个
  const chunkResults = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // 渲染骰子的点数
  const renderDiceFace = (value) => {
    const dots = {
      1: [<div key="1" className="dot center"></div>],
      2: [
        <div key="1" className="dot top-left"></div>,
        <div key="2" className="dot bottom-right"></div>,
      ],
      3: [
        <div key="1" className="dot top-left"></div>,
        <div key="2" className="dot center"></div>,
        <div key="3" className="dot bottom-right"></div>,
      ],
      4: [
        <div key="1" className="dot top-left"></div>,
        <div key="2" className="dot top-right"></div>,
        <div key="3" className="dot bottom-left"></div>,
        <div key="4" className="dot bottom-right"></div>,
      ],
      5: [
        <div key="1" className="dot top-left"></div>,
        <div key="2" className="dot top-right"></div>,
        <div key="3" className="dot center"></div>,
        <div key="4" className="dot bottom-left"></div>,
        <div key="5" className="dot bottom-right"></div>,
      ],
      6: [
        <div key="1" className="dot top-left"></div>,
        <div key="2" className="dot top-right"></div>,
        <div key="3" className="dot middle-left"></div>,
        <div key="4" className="dot middle-right"></div>,
        <div key="5" className="dot bottom-left"></div>,
        <div key="6" className="dot bottom-right"></div>,
      ],
    };
    return dots[value];
  };

  return (
    <div style={{ textAlign: "center"}}>
      <h1>骰子模拟器</h1>
      <div>
        <label>
          输入骰子数量:
          <input
            type="number"
            min="1"
            max="12"
            value={numDice}
            onChange={handleInputChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </div>
      <button
        onClick={rollDice}
        style={{
          marginTop: "20px",
        }}
      >
        Roll
      </button>

      <div style={{ marginTop: "20px" }}>
        <h2>结果：</h2>
        {chunkResults(results, 3).map((row, rowIndex) => (
          <div key={rowIndex} style={{ margin: "10px 0", display: "flex", justifyContent: "center" }}>
            {row.map((result, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  position: "relative",
                }}
              >
                {renderDiceFace(result)}
              </div>
            ))}
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default DiceRoller;
