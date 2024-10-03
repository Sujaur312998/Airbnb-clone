import React from 'react'
import Account_svg from '@/public/svg/account_svg';
import { TfiWorld } from "react-icons/tfi";
import { IoMdMenu } from "react-icons/io";

const UserAction = () => {
    return (
        <ul className="flex gap-4 items-center pr-6">
            <li className="flex items-center">Airbub your home</li>
            <li className="flex items-center">
                <TfiWorld aria-label="World Icon" />
            </li>
            <li className="py-2 px-3 border rounded-full">
                <button className="flex items-center gap-2" aria-label="Account Menu">
                    <IoMdMenu className="text-2xl" />
                    <Account_svg className="text-gray-500" />
                </button>
            </li>
        </ul>
    )
}

export default UserAction
