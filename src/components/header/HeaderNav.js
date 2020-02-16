import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import PreferenceButton from "../widget/PreferenceButton";
import IconButton from "../widget/IconButton";

const HeaderNav = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <ul className="flex justify-end flex-1 md:flex-none items-center">
                <li>
                    <IconButton icon={<FontAwesomeIcon icon={faBell}/>}/>
                </li>
                <li>
                    <IconButton icon={<FontAwesomeIcon icon={faEnvelope}/>}/>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                    <div onClick={() => {
                        setIsVisible(current => !current)
                    }}
                         className="flex relative inline-block items-center hover:text-green-nw">
                        <button className="font-bold  focus:outline-none">@kamilkamilov</button>
                        <FontAwesomeIcon className="ml-1" icon={faEllipsisV}/>
                    </div>
                    <div
                        className={`${isVisible ? "" : "invisible"} absolute bg-gray-100 mt-3 p-3 overflow-auto`}
                        style={{marginLeft: 30}}>
                        <PreferenceButton text="Profile"/>
                        <PreferenceButton text="Settings"/>
                        <div className="border border-gray-nw"/>
                        <PreferenceButton text="Log Out"/>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNav;