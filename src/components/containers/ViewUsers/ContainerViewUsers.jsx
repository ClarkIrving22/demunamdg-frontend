import './styles.css'
import SelectOption from '../../inputs/selectoption'
import InputBase from '../../inputs/base'
import TableBase from '../tables/base'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ContainerViewUsers = ({
    UsersData=[]
}) => {
    return(
        <div className="div-containerviewusers">
            <div className="div-busqueda">
                <div className="div-selectbusqueda">
                    <SelectOption items={["Nombres", "DNI", "Teléfono", "Dirección"]}/>
                </div>
                <div className="div-inputbusqueda">
                    <InputBase placeholder='Ingrese texto a buscar'/>
                </div>
            </div>
            <div className="div-tabla-usuarios">
                <TableBase datarow={UsersData}/>
            </div>
        </div>
    )
}

export default ContainerViewUsers