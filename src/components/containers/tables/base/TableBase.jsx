import './styles.css'
import PropTypes from 'prop-types'

const TableBase = ({
    UsersData
}) => {
    const renderRow = (UsersData) => {
        const fullName = `${UsersData.apellidopaterno} ${UsersData.apellidomaterno} ${UsersData.nombres}`
        const birthDate = UsersData.fechanac || '----'
        const phoneNumber = UsersData.telefono || '----'
    
        return (
          <tr key={UsersData.dni} className="tabla-root-tbody-tr">
            <td className="tabla-root-td">{fullName}</td>
            <td className="tabla-root-td">{UsersData.dni}</td>
            <td className="tabla-root-td">{birthDate}</td>
            <td className="tabla-root-td">{phoneNumber}</td>
            <td className="tabla-root-td">{UsersData.direccion}</td>
            <td className="tabla-root-td">Edit</td>
          </tr>
        )
    }

    return(
        <div id="div-tabla-root" className="div-tabla-root">
            <table id="tabla-root" className="tabla-root">
                <thead>
                    <tr>                            
                        <th className="tabla-root-th">Apellidos y Nombres</th>
                        <th className="tabla-root-th">DNI</th>
                        <th className="tabla-root-th">Fecha Nac.</th>
                        <th className="tabla-root-th">Teléfono</th>
                        <th className="tabla-root-th">Dirección</th>
                        <th className="tabla-root-th">Acciones</th>
                    </tr>
                </thead>
                    <tbody>
                        { UsersData.map(UsersData => renderRow(UsersData)) }
                    </tbody>
            </table>
        </div>
    )
}

TableBase.propTypes = {
    UsersData: PropTypes.array,
}

TableBase.defaultProps = {
    UsersData: [],
}

export default TableBase