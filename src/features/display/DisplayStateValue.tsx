import React from "react"
import { useAppSelector } from "../../app/hooks"

const DisplayStateValue = () => {
    const storeValue = useAppSelector(state => state.counter.value)
    const [value, setValue] = React.useState(storeValue);

    return (
        <>
        <div style={{width: "100px", height: "100px"}}>StateValue: {value}</div>
        <button onClick={() => {setValue(storeValue)}}>Set localstate to store value</button>
        </>
    )
}

export default DisplayStateValue;