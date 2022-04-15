import React from 'react'
import { useState } from 'react'
import { BsCalendar2Event } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { BsPlusSquare, BsFileMinus } from 'react-icons/bs'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function TabView() {

    // NOTE: VARIABLES AND FUNCTIONS FOR CHECK-IN AND CHECK-OUT
    const [isCheckin, setIsCheckin] = useState(false);
    const [isCheckOut, setIsCheckOut] = useState(false);

    const checkinModal = () => {
        console.log("Clicked")
        setIsCheckin((prev) => !prev);
    };

    const checkoutModal = () => {
        console.log("Clicked")
        setIsCheckOut((prev) => !prev);

    };

    // NOTE: SETTING UP DATE
    const [checkinDate, setCheckinDate] = useState(0);
    const [checkoutDate, setCheckoutDate] = useState(0);


    // NOTE: FOR GUESTS - (VARIABLES)
    const [children, setChildren] = useState(0);
    const [adult, setAdult] = useState(1);

    // NOTE: MODAL FOR GUEST
    const [isGuest, setIsGuest] = useState(false)
    const openGuest = () => {
        setIsGuest((prev) => !prev);
    }

    // NOTE: FUNCTION <--> INCREMENT ADULT GUESTS
    const incrementAdult = () => {
        if (adult >= 1) {
            setAdult(adult + 1);
        }
        else
            return;
    }

    // NOTE: FUNCTION <--> DECREMENT ADULT GUESTS
    const decrementAdult = () => {
        if (adult >= 2) {
            setAdult(adult - 1);
        }
        else
            return;
    }

    // NOTE: FUNCTION <--> INCREMENT CHILD GUESTS
    const incrementChildren = () => {
        if (children >= 0) {
            setChildren(children + 1);
        }
        else
            return;
    }

    // NOTE: FUNCTION <--> DECREMENT CHILD GUESTS
    const decrementChildren = () => {
        if (children >= 1) {
            setChildren(children - 1);
        }
        else
            return;
    }


    return (
        <>
            <div className='hidden mt-[40px] mob:block'>
                <div className=" mx-[19px] font-mulish font-extrabold leading-[46px] text-[47px] mb-[36px]">
                    Zetgo — amazing hostel for the free spirited traveler
                </div>
                <div className='pl-4 mx-[30px] font-medium mt-4 mb-[57px] text-[24px] border-l-[2px] border-l-[#315680]'>
                    Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
                </div>

            </div>
            <div className='hidden mob:block align-middle mx-[34px] px-[70px] py-[67px]  shadow-[-1px_1px_4px_2px_rgba(0,0,0,0.3)] rounded-lg'>
                <div className='flex justify-between items-center gap-12'>

                    <div className='w-full'>
                        <div className='font-mulish text-[22px] font-black pb-2'>
                            Check-in
                        </div>
                        <div>
                            {checkinDate > 0 ? (
                                <button className='w-full relative top-0 pb-[14px] flex justify-between items-center  rounded-xl' onClick={() => {
                                    checkinModal();
                                }}>
                                    <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[22px] items-center gap-4'>
                                        <BsCalendar2Event />
                                        <span className='bold'>{checkinDate.getDate()}/{checkinDate.getMonth() + 1}/{checkinDate.getFullYear()}
                                        </span>
                                    </div>
                                    <div className=' '>
                                        <IoIosArrowDown />
                                    </div>
                                </button>

                            ) : (
                                <button className='w-full relative top-0 pb-[14px] flex justify-between items-center  rounded-xl' onClick={() => {
                                    checkinModal();
                                }}>
                                    <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[22px] items-center gap-4'>
                                        <BsCalendar2Event/>
                                        <span className='bold'>Add date:</span>
                                    </div>
                                    <div>
                                        <IoIosArrowDown className=' hover:container_2'/>
                                    </div>
                                </button>
                            )}

                            {isCheckin && (
                                <div className='z-10 absolute'>
                                    <Calendar className=" z-10 top-0 right-8 "
                                        onChange={setCheckinDate}
                                        defaultValue={checkinDate}
                                    />
                                </div>
                            )}

                        </div>
                        <hr />
                    </div>


                    <div className='w-full'>
                        <div className='font-mulish text-[22px] font-black pb-2'>
                            Check-out
                        </div>
                        <div>
                            {checkoutDate > 0 ? (
                                <button className='w-full relative top-0 pb-[14px] flex justify-between items-center rounded-xl' onClick={() => {
                                    checkoutModal();
                                }}>
                                    <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[22px] items-center gap-4'>
                                        <BsCalendar2Event />
                                        <span className='bold'>{checkoutDate.getDate()}/{checkoutDate.getMonth() + 1}/{checkoutDate.getFullYear()}
                                        </span>
                                    </div>
                                    <div className=' '>
                                        <IoIosArrowDown />
                                    </div>
                                </button>

                            ) : (
                                <button className='w-full relative top-0 pb-[14px] flex justify-between items-center  rounded-xl' onClick={() => {
                                    checkoutModal();
                                }}>
                                    <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[22px] items-center gap-4'>
                                        <BsCalendar2Event />
                                        <span className='bold'>Add date:</span>
                                    </div>
                                    <div>
                                        <IoIosArrowDown />
                                    </div>
                                </button>
                            )}

                            {isCheckOut && (
                                <div className='z-10 absolute'>
                                    <Calendar className=" z-10 top-0 right-8 "
                                        onChange={setCheckoutDate}
                                        defaultValue={checkoutDate}
                                    />
                                </div>
                            )
                            }
                        </div>
                        <hr />
                    </div>
                </div>

                <div className=' w-full items-center flex justify-between pt-[14px]'>
                    <div className='w-full'>
                        <div className='font-mulish text-[22px] font-black pb-2'>
                            Guests
                        </div>
                        <div>
                            <button className='w-full flex justify-between pb-2' onClick={openGuest} >
                                <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[22px] items-center gap-4 '>
                                    <BiUser />
                                    {children > 0 ? (
                                        <span className='bold'>{adult} adult, {children} Children</span>

                                    ) :
                                        (<span className='bold'>{adult} adult</span>)
                                    }
                                </div>
                            </button>
                            <hr className='mb-2 text-[#DFEAF5]' />
                            {isGuest && (
                                <div className='z-10 absolute w-[337px] p-3 bg-white shadow-lg rounded-lg' >
                                    <div className='w-full flex justify-between gap-4 items-center'>
                                        <div className='font-mulish2 text-[18px] font-black pb-2'>
                                            Adult
                                        </div>
                                        <div className="justify-between flex items-center gap-3">
                                            <BsPlusSquare className=' text-[27px] text-[#315680]' onClick={incrementAdult} />
                                            <div className='text-[18px]'>
                                                {adult}
                                            </div>
                                            <BsFileMinus className='text-[27px] text-[#315680] leading-3' onClick={decrementAdult} />
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className=' font-mulish2  text-[18px]  font-extrabold pb-2'>
                                            Children
                                        </div>
                                        <div className="flex justify-between  items-center gap-3">
                                            <BsPlusSquare className=' text-[27px] text-[#315680]' onClick={incrementChildren} />
                                            <div className='text-[18px]'>
                                                {children}
                                            </div>
                                            <BsFileMinus className='text-[27px] text-[#315680] leading-3' onClick={decrementChildren} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex'>
                        <button className=' text-mulish text-[20px] px-[110px] py-[19px] font-bold text-[#FFFFFF] rounded-lg bg-[#315680]'>
                            Search
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TabView