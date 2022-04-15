import React from 'react'
import { useState } from 'react'
import { BsCalendar2Event } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { BsPlusSquare, BsFileMinus } from 'react-icons/bs'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MobView() {

    // NOTE: VARIABLES AND FUNCTIONS FOR CHECK-IN AND CHECK-OUT
    const [isCheckin, setIsCheckin] = useState(false);
    const [isCheckOut, setIsCheckOut] = useState(false);
    
    // NOTE: SETTING UP DATE
    const [checkinDate, setCheckinDate] = useState(0);
    const [checkoutDate, setCheckoutDate] = useState(0);

    const checkinModal = () => {
        setIsCheckin((prev) => !prev);
    };

    const checkoutModal = () => {
        setIsCheckOut((prev) => !prev);

    };


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
        <div className=' mob:hidden max-w-screen-mob'>
            <div className='mt-[70px]'>
                <div className=" mx-[19px] font-mulish font-extrabold leading-[46px] text-[37px]">
                    Zetgo — amazing hostel for the free spirited traveler
                </div>
                <div className='pl-2 mx-[24px] font-medium mt-4 mb-[45px] text-[18px] border-l-[2px] border-l-[#315680]'>
                    Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
                </div>

            </div>
            <div className=' align-middle mx-[12px] px-[34px] py-[35px]  shadow-[-1px_1px_4px_2px_rgba(0,0,0,0.3)] rounded-lg'>
                <div className='w-full'>
                    <div className='font-mulish font-[900] pb-2'>
                        Check-in
                    </div>
                    <div>
                        {checkinDate > 0 ? (
                            <button className='w-full relative top-0 pb-[14px] flex justify-between items-center  rounded-xl' onClick={() => {
                                checkinModal();
                            }}>
                                <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[18px] items-center gap-2'>
                                    <BsCalendar2Event />
                                    <span className='bold'>{checkinDate.getDate()}/{checkinDate.getMonth() + 1}/{checkinDate.getFullYear()}
                                    </span>
                                </div>
                                <div className=' '>
                                    <IoIosArrowDown />
                                </div>
                            </button>

                        ) : (
                            <button className=' w-full relative top-0 pb-[14px] flex justify-between items-center  rounded-xl' onClick={() => {
                                checkinModal();
                            }}>
                                <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[18px] items-center gap-2'>
                                    <BsCalendar2Event />
                                    <span className='font-mulish2'>Add date:</span>
                                </div>
                                <div>
                                    <IoIosArrowDown />
                                </div>
                            </button>
                        )}

                        {isCheckin && (<Calendar className=" z-10 top-0 right-8 "
                            onChange={setCheckinDate}
                            defaultValue={checkinDate}
                        />)}

                    </div>
                </div>
                <hr />

                <div className='w-full pt-[14px]'>
                    <div className='font-mulish font-[900] pb-2'>
                        Check-out
                    </div>
                    <div>
                        {checkoutDate > 0 ? (
                            <button className='w-full relative top-0 pb-[14px] flex justify-between items-center rounded-xl' onClick={() => {
                                checkoutModal();
                            }}>
                                <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[18px] items-center gap-2'>
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
                                <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[18px] items-center gap-2'>
                                    <BsCalendar2Event />
                                    <span className='bold'>Add date:</span>
                                </div>
                                <div>
                                    <IoIosArrowDown />
                                </div>
                            </button>
                        )}

                        {isCheckOut && (<Calendar className=" z-10 top-0 right-8 "
                            onChange={setCheckoutDate}
                            defaultValue={checkoutDate}
                        />)}
                    </div>
                </div>
                <hr />


                <div className='w-full pt-[14px]'>
                    <div className='font-mulish font-[900] pb-2'>
                        Guests
                    </div>
                    <div>
                        <button className='w-full flex justify-between pb-2' onClick={openGuest} >
                            <div className=' font-mulish2 text-[#2F3C49] text-center flex text-[18px] items-center gap-2 '>
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
                            <>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='font-mulish2 font-[900] pb-2'>
                                        Adult
                                    </div>
                                    <div className="w-[80px] justify-between flex items-center gap-3">
                                        <BsPlusSquare className=' text-[19px] text-[#315680]' onClick={incrementAdult} />
                                        <div>
                                            {adult}
                                        </div>
                                        <BsFileMinus className='text-[20px] text-[#315680] leading-3' onClick={decrementAdult} />
                                    </div>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <div className=' font-mulish2 font-extrabold pb-2'>
                                        Children
                                    </div>
                                    <div className=" w-[80px] justify-between flex items-center gap-3">
                                        <BsPlusSquare className=' text-[19px] text-[#315680]' onClick={incrementChildren} />
                                        <div>
                                            {children}
                                        </div>
                                        <BsFileMinus className='text-[20px] text-[#315680] leading-3' onClick={decrementChildren} />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className='items-center flex justify-center mt-[34px] mx-[auto]'>
                        <button className=' text-mulish text-[18px] px-[138px] py-[15px] font-bold text-[#FFFFFF] rounded-lg bg-[#315680]'>
                            Search
                        </button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default MobView
