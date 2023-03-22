import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../context/authContext';
import { BiMenu } from "react-icons/bi";
import { BsArrowUpSquare } from "react-icons/bs";

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    const [open,setOpen] = useState(false)

    return (
        <div className="flex flex-1 gap-5 items-center justify-end">
            <div className={`mt-2 block py-5 sm:flex flex-1 gap-7 font-semibold text-base justify-end px-10 bg-inherit text-[#161616] h-max ${ open ? "block" : "hidden"}`}>
                <p className="hover:text-[#823ed6] hover:text-xl "><Link to="/home">Home</Link></p>
                <p className="hover:text-[#823ed6] hover:text-xl "><Link to="/profile">Profile</Link></p>
                <p className="hover:text-[#823ed6] hover:text-xl "><Link to="/doctor">Doctor</Link></p>
                <p className="hover:text-[#823ed6] hover:text-xl "><Link to="/pharmacy">Pharmacy</Link></p>
                <p className="hover:text-[#823ed6] hover:text-xl ">Medicine</p>
                <BsArrowUpSquare className={`mt-1 text-xl ${ open ? "block" : "hidden" }`}
                                 onClick={()=>setOpen(!open)}/>
                { user ? (<p onClick={logoutUser}>Logout</p>) : null }
            </div>
            <BiMenu className={`sm:hidden font-semibold text-2xl mt-2 ${ open ? "hidden" : "block" }`}
                    onClick={()=>setOpen(!open)}/>
        </div>
    )
};

export default Header;
