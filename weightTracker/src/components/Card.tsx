import React, { useContext } from "react";

interface Props {
    children: React.ReactNode
}

export const Card = ({ children }: Props) => {
    return (
        <div
            className="w-5/6 h-full rounded-md relative p-8 border-2 bg-gray-900 border-gray-800"
        >
            {children}
        </div>
    )
};
export default Card;