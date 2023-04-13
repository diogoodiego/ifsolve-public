import { useState , useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiLogOut, FiSearch } from "react-icons/fi";
import { Logout } from "../../api/config";

import { GlobalContext } from "../../providers/context";

export default function Navbar() {
    const { getUser } = useContext(GlobalContext);
    const [getOverlay, setOverlay] = useState(false);
    const user = JSON.parse(localStorage.getItem("ifsolve_user"));
    const navigate = useNavigate();


    function HandleLogout(e) {
        e.preventDefault();
        Logout().then((res) => {
            navigate("/");
        });
    }

    return (
        <div className="w-full flex flex-row justify-between px-8 py-2 border-b border-dark-20">
            <div className="flex flex-row items-center relative">
                <FiSearch className="absolute left-2" />
                <input type="text" className="my-auto px-4 py-2 pl-8 bg-transparent focus:outline-0" placeholder="Busque por questões, provas... " />
            </div>


            <div className="flex relative items-center gap-2 hover:bg-dark-5 px-4 py-2 rounded-lg cursor-pointer" onClick={(e) => setOverlay(true)}>
                <div className="flex items-center justify-center h-10 w-10 bg-primary-10 rounded-full border-4 border-primary-100">
                    <FaUserAlt className="text-primary-60 text-sm" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-dark-100 capitalize">{getUser.extra_data.nome_completo}</span>
                    <span className="text-sm text-dark-60">{getUser.email}</span>
                </div>
                <FiChevronDown className={`transition duration-300 ${  getOverlay ? "rotate-180" : null}`} />
                <ul className={`absolute translate-y-full z-10 bottom-0 w-full bg-white drop-shadow rounded-lg py-2 transition duration-300 ${  getOverlay ? "" : "hidden h-0"}`}>
                    <li onClick={(e) => HandleLogout(e)} className="flex items-center gap-2 px-4 py-2 hover:bg-dark-10 transition duration-200 cursor-pointer"><FiLogOut /> Sair</li>
                </ul>
            </div>
            {getOverlay ?
                <div className="fixed bg-transparent top-0 left-0 z-0 w-screen h-screen" onClick={(e) => setOverlay(false)} />
                :
                null
            }
        </div>
    )
}