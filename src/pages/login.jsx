import React, {useContext} from "react";
import AuthContext from "../context/authContext";
import { RiLoginCircleFill, RiUser3Fill, RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className="items-center text-center text-white -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 px-10 h-1/2 rounded-md bg-gradient-to-b from-[#5e31f1] via-[#841cec] to-[#b945f8]">
            <div className="text-xl font-semibold py-1 mt-2 flex flex-col items-center">
                <RiLoginCircleFill className="text-5xl"/>
                <p>LOG IN</p>
            </div>
            <form onSubmit={loginUser} className="text-xl w-max mt-5">
                <div className="py-3 flex gap-1 items-center">
                    <RiUser3Fill/>
                    <input type="text" placeholder="Username" name="username" className=" py-1 border-b border-white text-white bg-inherit placeholder-white focus:outline-none focus:placeholder-opacity-0"/>
                </div>
                <div className="py-3 flex gap-1 items-center">
                    <RiLockPasswordFill/>
                    <input type="password" placeholder="Password" name="password" className=" py-1 border-b border-white text-white bg-inherit placeholder-white focus:outline-none focus:placeholder-opacity-0"/>
                </div>
                <input type="submit" value="Login" className=" px-5 py-2 rounded-full bg-white text-black mt-5 text-base hover:bg-[#ecebeb]"/>
            </form>
            <p className=" text-sm text-[#dddcdc] bottom-1 absolute right-1/2 translate-x-1/2 hover:text-white cursor-pointer">
                <Link to="/Signup">Create An Account!</Link>
            </p>
        </div>
    )
};

export default LoginPage;
