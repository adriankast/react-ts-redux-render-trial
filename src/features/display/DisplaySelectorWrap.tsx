import { useAppSelector } from "../../app/hooks"
import DisplayPropsWrap from "./DisplayPropsWrap"

const DisplaySelectorWrap = () => {
    const wrapValue = useAppSelector(state => state.counter.wrapValue)
    const value = wrapValue.value;
    
    return (<>
        <div style={{width: "100px", height: "100px"}}>SelectorWrap: {value}</div>
        <DisplayPropsWrap wrapValue={wrapValue}/>
        </>
    )
}

export default DisplaySelectorWrap;