import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import {faBell, faEnvelope, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ddClass: "absolute bg-gray-100 mt-3 p-3 overflow-auto invisible"
        }
    }

    toggleDown = () => {
        if (this.state.ddClass.includes("invisible")) {
            this.state.ddClass = "absolute bg-gray-100 mt-3 p-3 overflow-auto ";
        } else {
            this.state.ddClass += "invisible";
        }
        this.setState({});
    };

    render() {
        return (
            <header className="flex flex-wrap justify-between items-center w-full">
                <div className="w-3/12">
                    <Link to="/q" className="text-5xl font-bold hover:text-green-nw">
                        newway
                    </Link>
                </div>
                <div className="w-6/12">
                    <span className="flex relative w-full">
                        <input type="search" placeholder="search"
                               className="w-full text-lg text-gray-nw transition border border-gray-600 focus:outline-none
                               focus:border-green-nw rounded py-2 px-2 pl-10 appearance-none leading-normal"/>
                        <div className="absolute" style={{top: ".65rem", left: ".8rem"}}>
                            <FontAwesomeIcon className="text-2xl text-gray-500" icon={faSearch}/>
                        </div>
                    </span>
                </div>
                <div className="w-3/12">
                    <div>
                        <ul className="flex justify-end flex-1 md:flex-none items-center">
                            <li>
                                <a href="#" className="text-2xl hover:text-green-nw mr-3"><FontAwesomeIcon
                                    icon={faBell}/></a>
                            </li>
                            <li>
                                <a href="#" className="text-2xl hover:text-green-nw mr-3">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </a>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div onClick={this.toggleDown}
                                     className="flex relative inline-block items-center hover:text-green-nw">
                                    <a href="#" className="font-bold">@kamilkamilov</a>
                                    <FontAwesomeIcon className="ml-1" icon={faEllipsisV}/>
                                </div>
                                <div className={this.state.ddClass} style={{marginLeft: 30}}>
                                    <a href="/"
                                       className="p-1 hover:text-green-nw hover:font-bold text-sm no-underline hover:no-underline block">
                                        Profile</a>
                                    <a href="/"
                                       className="p-1 hover:text-green-nw hover:font-bold text-sm no-underline hover:no-underline block">
                                        Settings</a>
                                    <div className="border border-gray-nw"/>
                                    <a href="/"
                                       className="p-1 hover:text-green-nw hover:font-bold text-sm no-underline hover:no-underline block">
                                        Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;