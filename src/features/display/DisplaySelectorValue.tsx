import { useAppSelector } from "../../app/hooks"
import DisplayPropsValue from "./DisplayPropsValue"

const DisplaySelectorValue = () => {
    const value = useAppSelector(state => state.counter.value)
    return (
        <>
        <div style={{width: "100px", height: "100px"}}>SelectorValue: {value}</div>
        <DisplayPropsValue value={value}/>
        </>
    )
}

export default DisplaySelectorValue;