import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import './styles.css'

const SideBar = () => {
    return(
        <div className="div-sidebar-root">
            <Sidebar>
                <Menu>
                    <MenuItem>Documentacion</MenuItem>
                    <MenuItem>Calendario</MenuItem>
                    <MenuItem>E-commerce</MenuItem>
                </Menu>
            </Sidebar>
            <main>
                <button onClick={() => collapseSidebar()}>Collapse</button>
            </main>
        </div>
    )
}

export default SideBar