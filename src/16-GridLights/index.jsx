import { useState, useEffect } from "react"




const GridLights = () => {
    const gridSize = 3
    const [isActive, setIsActive] = useState([])

    const handleCellClick = (index) => {
        const arr = [...isActive]
        if (!isActive.includes(index)) {
            setIsActive([...arr, index])
        }
    }

    useEffect(() => {
        if (isActive.length === gridSize * gridSize - 1) {
            let reverseIndex = isActive.length - 1
            const interval = setInterval(() => {
                setIsActive((prev) => prev.slice(0, reverseIndex))
                reverseIndex--
               if (reverseIndex < 0) {
                    clearInterval(interval)
                }
            }, 300)

        }
    }, [isActive, gridSize])

    console.log(isActive)
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridSize}, 100px)`,
                gap: 10,
                justifyContent: 'center'
            }}
        >
            {Array.from({ length: gridSize * gridSize }, (_, index) => {
                if (index === Math.floor(gridSize * gridSize / 2)) {
                    return <div key={index} style={{ width: 100, height: 100 }}></div>
                }

                return (
                    <div key={index}
                        style={{
                            border: '1px solid black',
                            width: 100,
                            height: 100,
                            textAlign: 'center',
                            alignContent: 'center',
                            backgroundColor: isActive.includes(index) ? 'green' : 'lightgray'
                        }}
                        onClick={() => handleCellClick(index)}
                    >
                        {index + 1}
                    </div>
                )
            })}

        </div>
    )
}

export default GridLights