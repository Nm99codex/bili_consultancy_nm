import React from 'react'
import logo from "../assets/logo.png"
import hamburger from "../assets/hamburger.png"

function MobileNav() {
    return (
        <div className="hidden sm:flex tab:flex justify-between items-center h-[89px] p-3">
            <div className='flex p-auto gap-2'>
                <div className="w-[60px] h-[53px]">
                    <img
                        src={logo}
                        alt="LOGO"
                        className="w-full h-full"
                    />
                </div>
                <div className=' text-[42px] text-[#315680] font-nexa font-[700] '>
                    Zetgo
                </div>
            </div>
            <div className='w-[60px]'>
                <img src={hamburger} alt="" />
            </div>
        </div>
    );
}


function Navbar() {
    return (
        <>
            <nav className="bg-white w-full">
                <MobileNav />
            </nav>

        </>
    )
}

export default Navbar