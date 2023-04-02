import LayoutFullScreen from "../components/layouts/fullscreen"
import ContainerViewUsers from "../components/containers/ViewUsers"
import { useEffect, useState } from 'react'
import UsersData from "../data/users.json"

const ViewUsers = () => {
    const[users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = () => {
            setUsers(UsersData)
        }
        fetchUsers()
    }, [])

    return(
        <LayoutFullScreen>
            <ContainerViewUsers UsersData={users}/>
        </LayoutFullScreen>
    )
}

export default ViewUsers