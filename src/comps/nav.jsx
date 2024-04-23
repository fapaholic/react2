import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="flex gap-[20px] p-5 bg-black text-white">
            <Link to ={'/'} className="hover:opacity-75">Home</Link>
            <Link to ={'/Contact'} className="hover:opacity-75">Contact</Link>
        </div>
    )
}

export default Nav