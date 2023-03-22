import React, {useState} from 'react';
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    return (
        <div className="bg-[#2a59f2a0] flex flex-1 gap-5 items-center w-screen justify-center py-5">
            <BsSearch className="text-3xl font-semibold"/>
            <input className="rounded-md py-2 px-2 sm:w-1/3 shadow-md w-1/2 focus:outline-none"
                   placeholder="Search Here"
                   onChange={handleChange}
                   value={searchInput}/>
        </div>
    )
};

export default SearchBar;
