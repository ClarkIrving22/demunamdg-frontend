import './styles.css'

const SelectOption = ({
    items=[]
}) => {
    return(
        <div className="div-selectoption-root">
            <select className="selectoption-root">
                {items.map(function(element){
                    return (<option value={element}>{element}</option>);
                })}
            </select>
        </div>
    )
}

export default SelectOption