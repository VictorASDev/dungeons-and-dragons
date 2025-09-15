import { useState } from "react";

interface selectionButtonProps {
    item: any;
    isActive?: boolean;
    onClick?: () => void;
}

const SelectionButton = (props: selectionButtonProps) => {
    return (
        <button
            className={
                "relative scale-100 bg-red-900 cursor-pointer z-10 px-4 py-2 m-1 rounded-full transition-all duration-200 hover:text-red-900 hover:bg-white hover:scale-110 hover:shadow-lg" +
                (props.isActive ? " scale-120 shadow-lg bg-white text-red-900" : "")
            }
            onClick={props.onClick}
            >
            {props.item}
        </button>
    )
}
export default SelectionButton;