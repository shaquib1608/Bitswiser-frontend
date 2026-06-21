import {
    FaHome,
    FaProjectDiagram,
    FaServicestack,
    FaEnvelope,
    FaSignOutAlt
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {


    const navigate = useNavigate();
    const logout = () => {
        console.log("Logout clicked");
        localStorage.removeItem("token");
        navigate("/admin/login");
    };

    return (
        <div className="w-64 bg-slate-900 p-6">

            <h1 className="text-2xl font-bold text-cyan-400 mb-10">
                BitWiser Admin
            </h1>

            <ul className="space-y-6">

                <li>
                    <Link to="/admin/dashboard" className="flex items-center gap-2">
                        <FaHome size={35} />
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/admin/projects" className="flex items-center gap-2">
                        <FaProjectDiagram size={35} />
                        Projects
                    </Link>
                </li>

                <li>
                    <Link to="/admin/services" className="flex items-center gap-2">
                        <FaServicestack size={35} />
                        Services
                    </Link>
                </li>

                <li>
                    <Link to="/admin/messages" className="flex items-center gap-2">
                        <FaEnvelope size={35} />
                        Messages
                    </Link>
                </li>

                <li className="text-red-400">

                    <button
                        onClick={logout}
                        className="bg-cyan-500 px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <FaSignOutAlt size={20} />
                        Logout
                    </button>

                </li>

            </ul>

        </div>
    );
}

export default Sidebar;