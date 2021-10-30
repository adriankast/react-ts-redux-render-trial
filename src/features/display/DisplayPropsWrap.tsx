
const DisplayPropsWrap = ({wrapValue}: {wrapValue: {value: number}}) => {
    const value = wrapValue.value
    return (
        <div style={{width: "100px", height: "100px"}}>PropsWrap: {value}</div>
    )
}

export default DisplayPropsWrap;