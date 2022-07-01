import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
// import "../components/list/list.css"
import Datatable from "../components/datatable/Datatable";
import "../App.css";
const Mainlayout = () => {

    return (
        <>
            <div className="App">
                <div className="AppGlass">
                    <Sidebar />
                    <Outlet />
                </div>
                
            </div>

        </>
    )
}

export default Mainlayout;