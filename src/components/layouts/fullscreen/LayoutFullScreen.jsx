import './styles.css'

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

const LayoutFullScreen = ({
    children
}) => {

    const { collapseSidebar } = useProSidebar();

    return(
        <div className="div-layoutfullscreen">
            { children }
        </div>
    )
}

export default LayoutFullScreen