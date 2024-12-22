
import React, { useState, useEffect, useRef } from 'react';
import { SiGooglehome } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosThumbsUp, IoMdShareAlt } from "react-icons/io";

const Content:React.FC = ()=>{

    const userAvatarImg = "data:image/jpeg;base64,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";

    return (
        <div className=" relative flex flex-row h-full mt-4 ml-2 overflow-y-scroll " >
            {/* Left */}
            <div className=" flex flex-col h-full w-2/12 fixed " >
                <div className="">
                    <ul className=" ">
                        <li>
                            <div className=" group flex flex-row items-center my-1 p-2 pl-8 rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                <span className=" mr-4 text-xl text-cyan-700 group-hover:text-gray-400 "><SiGooglehome /></span>
                                <span className="  " >首頁 | HOME</span>
                            </div>
                        </li>
                        <li>
                            <div className=" group flex flex-row items-center my-1 p-2 pl-8 rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                <span className=" mr-4 text-xl text-cyan-700 group-hover:text-gray-400 "><FaUserFriends /></span>
                                <span className="  " >朋友 | FRIENDS</span>
                            </div>
                        </li>
                        <li>
                            <div className=" group flex flex-row items-center my-1 p-2 pl-8 rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                <span className=" mr-4 text-xl text-cyan-700 group-hover:text-gray-400 "><IoChatbubblesSharp /></span>
                                <span className="  " >聊天室 | CHAT</span>
                            </div>
                        </li>
                        <li>
                            <div className=" group flex flex-row items-center my-1 p-2 pl-8 rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                <span className=" mr-4 text-xl text-cyan-700 group-hover:text-gray-400 "><IoSettingsSharp /></span>
                                <span className="  " >設定 | SETTING</span>
                            </div>
                        </li>                        
                    </ul>
                </div>
                <div>
                    <hr className=" my-4 mx-4 " />
                </div>
                <div className="flex flex-col items-center my-5 absolute bottom-20 w-full " >
                    <span className=" text-[12px] text-left mx-4 px-1 text-gray-500 ">TEL: 0912-345-678</span>
                    <span className=" text-[12px] text-left mx-4 px-1 text-gray-500 ">Copyright © 2024 tetsu.</span>
                </div>
            </div>

            {/* Middle */}
            <div className=" ml-56 w-2/3 h-full " >
                <div className=" p-1 w-[60%] items-center justify-center mx-auto max-h-full ">
                    <div className=" p-4 w-full flex flex-row items-center justify-between bg-gray-800 rounded-xl ">
                        <span className=" cursor-pointer ml-1 mr-2 ">
                            <img className=" m-1 rounded-full h-9 w-9 " src={userAvatarImg} alt="" />
                        </span>
                        <span className=" cursor-pointer select-none mr-1 flex-grow py-2 px-4 text-gray-400 bg-gray-700 rounded-3xl ">請輸入你的想法...</span>
                    </div>

                    <div>
                        <div className=" my-4 px-4 pt-4 pb-1 w-full flex flex-col items-start justify-between bg-gray-800 rounded-xl ">
                            <div className=" flex flex-row items-center justify-between " >
                                <div className=" mr-2  ">
                                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/103" alt="" />
                                </div>
                                <div className=" flex flex-col " >
                                    <span className=" text-md text-gray-400 " >黃智富</span>
                                    <span className=" text-sm text-gray-500 " >2024-09-20 15:30</span>
                                </div>
                            </div>
                            <div className=" mx-3 my-2 flex flex-row items-center justify-between ">
                                <div className=" w-full text-gray-400 rounded-xl " >
                                    <p className=" p-2 ">hello world</p>
                                </div>                            
                            </div>
                            <div className=" m-2 flex flex-row items-center justify-between ">
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700  ">
                                    <span className="mr-1"><IoIosThumbsUp/></span>
                                    <span>讚</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoChatbubblesSharp/></span>
                                    <span>留言</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoMdShareAlt/></span>
                                    <span>分享</span>
                                </span>
                            </div>
                        </div>

                        <div className=" my-4 px-4 pt-4 pb-1 w-full flex flex-col items-start justify-between bg-gray-800 rounded-xl ">
                            <div className=" flex flex-row items-center justify-between " >
                                <div className=" mr-2  ">
                                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/100" alt="" />
                                </div>
                                <div className=" flex flex-col " >
                                    <span className=" text-md text-gray-400 " >沈旻謙</span>
                                    <span className=" text-sm text-gray-500 " >2024-09-20 15:30</span>
                                </div>
                            </div>
                            <div className=" mx-3 my-2 flex flex-row items-center justify-between ">
                                <div className=" w-full text-gray-400 rounded-xl " >
                                    <p className=" p-2 ">hello world</p>
                                </div>                            
                            </div>
                            <div className=" m-2 flex flex-row items-center justify-between ">
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700  ">
                                    <span className="mr-1"><IoIosThumbsUp/></span>
                                    <span>讚</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoChatbubblesSharp/></span>
                                    <span>留言</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoMdShareAlt/></span>
                                    <span>分享</span>
                                </span>
                            </div>
                        </div>


                        <div className=" my-4 px-4 pt-4 pb-1 w-full flex flex-col items-start justify-between bg-gray-800 rounded-xl ">
                            <div className=" flex flex-row items-center justify-between " >
                                <div className=" mr-2  ">
                                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/102" alt="" />
                                </div>
                                <div className=" flex flex-col " >
                                    <span className=" text-md text-gray-400 " >Eric Lee</span>
                                    <span className=" text-sm text-gray-500 " >2024-09-20 15:30</span>
                                </div>
                            </div>
                            <div className=" mx-3 my-2 flex flex-row items-center justify-between ">
                                <div className=" w-full text-gray-400 rounded-xl " >
                                    <p className=" p-2 ">hello world</p>
                                </div>                            
                            </div>
                            <div className=" m-2 flex flex-row items-center justify-between ">
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700  ">
                                    <span className="mr-1"><IoIosThumbsUp/></span>
                                    <span>讚</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoChatbubblesSharp/></span>
                                    <span>留言</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoMdShareAlt/></span>
                                    <span>分享</span>
                                </span>
                            </div>
                        </div>


                        <div className=" my-4 px-4 pt-4 pb-1 w-full flex flex-col items-start justify-between bg-gray-800 rounded-xl ">
                            <div className=" flex flex-row items-center justify-between " >
                                <div className=" mr-2  ">
                                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/105" alt="" />
                                </div>
                                <div className=" flex flex-col " >
                                    <span className=" text-md text-gray-400 " >MaSa</span>
                                    <span className=" text-sm text-gray-500 " >2024-09-20 15:30</span>
                                </div>
                            </div>
                            <div className=" mx-3 my-2 flex flex-row items-center justify-between ">
                                <div className=" w-full text-gray-400 rounded-xl " >
                                    <p className=" p-2 ">hello world</p>
                                </div>                            
                            </div>
                            <div className=" m-2 flex flex-row items-center justify-between ">
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700  ">
                                    <span className="mr-1"><IoIosThumbsUp/></span>
                                    <span>讚</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoChatbubblesSharp/></span>
                                    <span>留言</span>
                                </span>
                                <span className=" cursor-pointer select-none mx-2 flex flex-row items-center justify-center text-gray-400 text-sm rounded-md p-2 hover:bg-gray-700 ">
                                    <span className="mr-1"><IoMdShareAlt/></span>
                                    <span>分享</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className=" mr-2 h-full fixed right-6 w-2/12 " >
                <div>                    
                    <div className=" flex flex-row items-center justify-between ">
                        <span className=" m-4 text-gray-400 font-bold text-md ">聯絡人</span>
                        <span className=" cursor-pointer m-4 text-gray-400 font-bold text-md "><IoSearch /></span>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div className=" group m-1 ml-3 flex flex-row items-center rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                    <span className=" mr-2  ">
                                        <img className=" m-1 rounded-full h-8 w-8 " src="https://i.pravatar.cc/100" alt="" />
                                    </span>
                                    <span className=" text-md " >沈旻謙</span>
                                </div>
                            </li>
                            <li>
                                <div className=" group m-1 ml-3 flex flex-row items-center rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                    <span className=" mr-2  ">
                                        <img className=" m-1 rounded-full h-8 w-8 " src="https://i.pravatar.cc/101" alt="" />
                                    </span>
                                    <span className=" text-md " >古君穎</span>
                                </div>
                            </li>
                            <li>
                                <div className=" group m-1 ml-3 flex flex-row items-center rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                    <span className=" mr-2  ">
                                        <img className=" m-1 rounded-full h-8 w-8 " src="https://i.pravatar.cc/102" alt="" />
                                    </span>
                                    <span className=" text-md " >Eric Lee</span>
                                </div>
                            </li>
                            <li>
                                <div className=" group m-1 ml-3 flex flex-row items-center rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                    <span className=" mr-2  ">
                                        <img className=" m-1 rounded-full h-8 w-8 " src="https://i.pravatar.cc/103" alt="" />
                                    </span>
                                    <span className=" text-md " >黃智富</span>
                                </div>
                            </li>
                            <li>
                                <div className=" group m-1 ml-3 flex flex-row items-center rounded-lg text-md text-gray-400 cursor-pointer hover:bg-cyan-700 hover:text-gray-900 hover:font-bold ">
                                    <span className=" mr-2  ">
                                        <img className=" m-1 rounded-full h-8 w-8 " src="https://i.pravatar.cc/104" alt="" />
                                    </span>
                                    <span className=" text-md " >MaSa</span>
                                </div>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Content;













