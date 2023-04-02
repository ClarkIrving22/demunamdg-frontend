import './styles.css'

const TableBase = ({
    datarow=[]
}) => {
    const renderRow = (datarow) => {
        const fullName = `${datarow.apellidopaterno} ${datarow.apellidomaterno} ${datarow.nombres}`
        const birthDate = datarow.fechanac || '----'
        const phoneNumber = datarow.telefono || '----'
    
        return (
          <tr key={datarow.dni} className="tabla-root-tbody-tr">
            <td className="tabla-root-td">{fullName}</td>
            <td className="tabla-root-td">{datarow.dni}</td>
            <td className="tabla-root-td">{birthDate}</td>
            <td className="tabla-root-td">{phoneNumber}</td>
            <td className="tabla-root-td">{datarow.direccion}</td>
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
                        { datarow.map(datarow => renderRow(datarow)) }
                    </tbody>
            </table>
        </div>
    )
}

export default TableBase