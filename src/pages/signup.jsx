import React from 'react'
import { BsGoogle } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom"; 
const Signup = () => {
    return (
        <div className="items-center text-center text-white -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 px-10 h-1/2 rounded-md bg-gradient-to-b from-[#5e31f1] via-[#841cec] to-[#b945f8]">
            <div className="text-white text-3xl tracking-widest font-semibold mt-8">
                SAARVE
            </div>
            <div className="text-white text-xl tracking-widest font-semibold py-3">
                Sign Up For Free 
            </div>
            <div className="text-white text-base font-semibold tracking-widest py-3">
                <button className="border py-2 lg:px-20 px-10 rounded-md border-white flex gap-5 w-full hover:bg-[#5e1ebe]">
                    <BsGoogle className="text-base mt-1"/>
                    Sign Up With Google
                </button>
            </div>
            <div className="text-black text-base font-semibold tracking-widest py-3">
                <button className="border py-2 lg:px-20 px-10 rounded-md border-white flex gap-5 w-full bg-white hover:bg-[#e6e7ea]">
                    <AiFillFacebook className="text-2xl"/>
                    Sign Up With Facebook
                </button>
            </div>
            <p className=" text-base text-[#dddcdc] bottom-1 absolute right-1/2 translate-x-1/2 hover:text-white cursor-pointer">
                <Link to="/login">Already Have An Account?</Link>
            </p>
        </div>
    )
};

export default Signup;    
