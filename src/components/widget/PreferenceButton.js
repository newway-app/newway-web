import React from "react";

const PreferenceButton = (props) => {
    return (
        <button
            className="p-1 hover:text-green-nw hover:font-bold text-sm no-underline hover:no-underline block focus:outline-none">
            {props.text}
        </button>
    );
};

export default PreferenceButton;