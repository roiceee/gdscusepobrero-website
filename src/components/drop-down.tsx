'use client'
import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


function DropDown() {
    const [selectedItem, setSelectedItem] = useState<string| null>(null); // State to track selected menu item
    const [showItems, setShowItems] = useState<boolean>(false);

    const handleMenuItemClick = (item:string) => {
        setSelectedItem(item);
        setShowItems(false);
    };

    const handleShowItems = () => {
        setShowItems(true);
    };


    return (
        <main>
            <Button
                data-ripple-light="true"
                data-popover-target="menu"
                className="select-none rounded-lg bg-red bg-opacity-20 border border-red py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => handleShowItems()}
            >
                <span className="mr-2">{selectedItem ? selectedItem : '2023-2024'}</span> {/* Add arrow icon */}
                <FontAwesomeIcon icon={faCaretDown} className="text-lg" />
            </Button>
            {showItems && (
                <div className='flex justify-center'>
                <ul
                    role="menu"
                    data-popover="menu"
                    data-popover-placement="bottom"
                    className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                >
                    <li
                        role="menuitem"
                        className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        onClick={() => handleMenuItemClick('2023-2024')}
                    >
                        2023-2024
                    </li>
                    <li
                        role="menuitem"
                        className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        onClick={() => handleMenuItemClick('2022-2023')}
                    >
                        2022-2023
                    </li>
                </ul>
                </div>
                )
            }
            
        </main>
    );
}

export default DropDown;
