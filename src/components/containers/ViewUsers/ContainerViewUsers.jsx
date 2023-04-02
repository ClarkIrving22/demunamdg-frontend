import './styles.css'
import SelectOption from '../../inputs/selectoption'
import InputBase from '../../inputs/base'
import TableBase from '../tables/base'
import PropTypes from 'prop-types'

const ContainerViewUsers = ({
    selectOptionHandleOnChange,
    selectOptionItems,
    selectOptionValue,
    searchInputHandleOnChange,
    searchInputValue,
    searchInputPlaceHolder,
    UsersData
}) => {
    return(
        <div className="div-containerviewusers">
            <div className="div-busqueda">
                <div className="div-selectbusqueda">
                    <SelectOption
                        selectOptionHandleOnChange={selectOptionHandleOnChange}
                        selectOptionItems={selectOptionItems}
                        selectOptionValue={selectOptionValue}/>
                </div>
                <div className="div-inputbusqueda">
                    <InputBase
                        searchInputHandleOnChange={searchInputHandleOnChange}
                        searchInputValue={searchInputValue}
                        searchInputPlaceHolder={searchInputPlaceHolder}/>
                </div>
            </div>
            <div className="div-tabla-usuarios">
                <TableBase UsersData={UsersData}/>
            </div>
        </div>
    )
}

ContainerViewUsers.propTypes = {
    UsersData: PropTypes.array,
}

ContainerViewUsers.defaultProps = {
    UsersData: [],
}

export default ContainerViewUsers