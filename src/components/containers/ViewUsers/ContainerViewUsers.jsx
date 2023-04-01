import './styles.css'
import SelectOption from '../../inputs/selectoption'
import InputBase from '../../inputs/base'

const ContainerViewUsers = () => {
    return(
        <div className="div-containerviewusers">
            <div className="div-busqueda">
                <div className="div-selectoption">
                    <SelectOption items={ ["Nombres", "DNI", "Teléfono"] }/>                
                </div>
                <div className="div-inputbase">
                    <InputBase placeholder='Ingrese texto a buscar'/>
                </div>
            </div>
        </div>
    )
}

export default ContainerViewUsers