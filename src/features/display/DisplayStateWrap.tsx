import React from "react"
import { useAppSelector } from "../../app/hooks"

const DisplayStateWrap = () => {
    const storeWrap = useAppSelector(state => state.counter.wrapValue)
    const [wrap, setWrap] = React.useState(storeWrap);

    return (
        <>
        <div style={{width: "100px", height: "100px"}}>StateWrap: {wrap.value}</div>
        <button onClick={() => {setWrap(storeWrap)}}>Set localstate to store wrap</button>
        </>
    )
}

export default DisplayStateWrap;