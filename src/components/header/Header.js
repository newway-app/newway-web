import React from "react";
import HeaderNav from "./HeaderNav";
import JoinUs from "./JoinUs.";
import BrandText from "../widget/BrandText";
import SearchBox from "../widget/SearchBox";
import {Link} from "react-router-dom";


const Header = () => {

    const user = null;

    return (
        <header className="flex flex-wrap justify-between items-center w-full">
            <div className="w-3/12">
                <Link to="/home">
                    <BrandText size={5}/>
                </Link>
            </div>
            <div className="w-6/12">
                <SearchBox/>
            </div>
            <div className="w-3/12">
                {user != null ? <HeaderNav/> : <JoinUs/>}
            </div>
        </header>
    );
};


export default Header;