import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo/logo.png';
import { AiFillMessage } from "react-icons/ai";
import { GoBellFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

//Search box
const SearchBox:React.FC = ()=>{
    return <>
        <div className=" ml-6 flex flex-row items-center h-9 w-[400px] ">
            <input type="text" placeholder="Search" className=" w-full h-full px-4 rounded-l-3xl p-2 ml-1 text-gray-400 bg-gray-700 border-none focus:outline-none focus:ring-teal-400 focus:ring-1 placeholder:p-4 " />
            <IoSearch className=" w-10 p-2 h-full rounded-r-3xl cursor-pointer bg-gray-500 text-gray-400 hover:bg-cyan-500 hover:text-white " />
        </div>
    </>
}

//Avatar
type AvatarProps={
    imgPath: string,
    account: string,
    userName: string,
}
const Avatar:React.FC<AvatarProps> = ({imgPath, account, userName})=>{    
    return <>
        <div className=" w-52 flex flex-row items-center cursor-pointer  ">
            <div className=" m-1 h-9 w-12 flex items-center justify-center ">
                <img className=" m-1 rounded-full  h-full w-full " src={imgPath} alt="" />
            </div>
            <div className=" ml-2 w-full content-center hidden lg:block">
                <div>
                    <p className=" ml-1 pr-2 text-sm font-bold text-gray-300 ">{account}</p>
                </div>
                <div>
                    <p className=" w-fit px-2  text-sm bg-teal-400 text-center font-bold text-white rounded-xl ">{userName}</p>
                </div>
            </div>
        </div>        
    </>
}

//Avatar dddw
const AvatarDddw:React.FC = ()=>{
    return (
        <div className=" absolute flex flex-col w-[300px] rounded-xl bg-gray-600 shadow-xl px-2 py-4 ">
            <div>
                <div className=" cursor-pointer mx-2 my-1 p-2 pl-4 rounded-xl font-bold text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">個人基本資料</div>
                <div className=" cursor-pointer mx-2 my-1 p-2 pl-4 rounded-xl font-bold text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">系統設定</div>
            </div>
            <hr className="my-2" />
            <div>
                <div className=" flex flex-row items-center cursor-pointer m-2 p-2 pl-4 rounded-xl font-bold text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">
                    <CiLogout />
                    <span className=" ml-2 ">登出</span>
                </div>
            </div>
        </div>        
    )
}

//Unread count
type UnreadCntProps={
    unreadMsg: string
}
const UnreadCntBall:React.FC<UnreadCntProps> = ({unreadMsg})=>{
    return <>
        <div className="absolute p-0.5 h-6 w-6 text-center content-center text-xs font-bold rounded-full bg-red-500 text-white -bottom-1 left-5 ">{unreadMsg}</div>
    </>
}


//通知 dddw
const NotificationDddw:React.FC = ()=>{
    return (
        <div className=" absolute flex flex-col w-[300px] rounded-xl bg-gray-600 shadow-xl px-2 py-4 ">
            <div>
                <div className=" group cursor-pointer flex flex-row items-center mx-2 my-1 p-2 pl-2 rounded-xl text-sm text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">
                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/700" alt="" />
                    <div className=" flex flex-col ">
                        <span className=" ml-2 ">MaSa傳送了交友邀請給您。</span>
                        <span className=" ml-2 font-bold text-cyan-500 group-hover:text-cyan-800 ">2024/12/22 13:41:30</span>
                    </div>                    
                </div>

                <div className=" group cursor-pointer flex flex-row items-center mx-2 my-1 p-2 pl-2 rounded-xl text-sm text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">
                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/600" alt="" />
                    <div className=" flex flex-col ">
                        <span className=" ml-2 ">Eric傳送了交友邀請給您。</span>
                        <span className=" ml-2 font-bold text-cyan-500 group-hover:text-cyan-800 ">2024/12/22 13:41:30</span>
                    </div>                    
                </div>
                
            </div>
            <hr className="my-2" />
            <div>
                <div className=" flex flex-row items-center cursor-pointer m-2 p-2 pl-4 rounded-xl font-bold text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">
                    <MdDeleteOutline />
                    <span className=" ml-2 ">清除所有通知</span>
                </div>
            </div>
        </div>        
    )
}


//訊息 dddw
const MessageDddw:React.FC = ()=>{
    return (
        <div className=" absolute flex flex-col w-[300px] rounded-xl bg-gray-600 shadow-xl px-2 py-4 ">
            <div>
                <div className=" group cursor-pointer flex flex-row items-center mx-2 my-1 p-2 pl-2 rounded-xl text-sm text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">
                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/700" alt="" />
                    <div className=" flex flex-col ">
                        <span className=" ml-2 ">MaSa傳送訊息給您。</span>
                        <span className=" ml-2 font-bold text-cyan-500 group-hover:text-cyan-800 ">2024/12/22 13:41:30</span>
                    </div>                    
                </div>

                <div className=" group cursor-pointer flex flex-row items-center mx-2 my-1 p-2 pl-2 rounded-xl text-sm text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">
                    <img className=" m-1 rounded-full h-9 w-9 " src="https://i.pravatar.cc/600" alt="" />
                    <div className=" flex flex-col ">
                        <span className=" ml-2 ">Eric傳送訊息給您。</span>
                        <span className=" ml-2 font-bold text-cyan-500 group-hover:text-cyan-800 ">2024/12/22 13:41:30</span>
                    </div>                    
                </div>
                
            </div>
            <hr className="my-2" />
            <div>
                <div className=" flex flex-row items-center cursor-pointer m-2 p-2 pl-4 rounded-xl font-bold text-gray-200 hover:bg-gray-400 hover:text-white hover:duration-150 ">
                    <MdDeleteOutline />
                    <span className=" ml-2 ">清除所有通知</span>
                </div>
            </div>
        </div> 
    )
}





const Header: React.FC = () => {
    const avatarRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);

    const [avatarDddwSwitch, setAvatarDddwSwitch] = useState(false);
    const [notificationDddwSwitch, setNotificationDddwSwitch] = useState(false);
    const [messageDddwSwitch, setMessageDddwSwitch] = useState(false);
    
    const avatarProps:AvatarProps={
        imgPath: "data:image/jpeg;base64,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",
        account: "account@gmail.com",
        userName: "userName"
    }

    useEffect(()=>{
        const handleClickOutside = (e:MouseEvent)=>{
            if (avatarRef.current && !avatarRef.current.contains(e.target as Node) ) {
                setAvatarDddwSwitch(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(e.target as Node) ) {
                setNotificationDddwSwitch(false);
            }
            if (messageRef.current && !messageRef.current.contains(e.target as Node) ) {
                setMessageDddwSwitch(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[])

    //get unread count component
    function GetUnreadComponent(unreadCng: number){
        if (unreadCng > 0 && unreadCng < 100){
            return <UnreadCntBall unreadMsg={unreadCng.toString()}/>
        }else if(unreadCng >= 100){
            return <UnreadCntBall unreadMsg={"99+"}/>
        }
        else{
            return null
        }
    }


    return (
        <nav className=" flex flex-row justify-between items-center h-16 bg-gray-800 text-white relative shadow-sm font-mono ">
            <div className=" relative flex flex-row justify-center items-center h-full mx-8 ">
                <img src={logo} alt="Logo" className=" max-h-10 " />
                <SearchBox />
            </div>
            <div className=" mr-4 flex flex-row justify-center items-center h-full ">
                <div className=" relative flex justify-center items-center mx-1 " onClick={()=>setMessageDddwSwitch(!messageDddwSwitch)} ref={messageRef}>
                    <AiFillMessage className=" cursor-pointer m-1 p-1 w-8 h-8 text-gray-800 bg-gray-500 hover:bg-gray-400 rounded-full "/>
                    {GetUnreadComponent(9)} 
                </div>
                <div className=" relative flex justify-center items-center mx-1 " onClick={()=>setNotificationDddwSwitch(!notificationDddwSwitch)} ref={notificationRef}>
                    <GoBellFill className=" cursor-pointer m-1 p-1 w-8 h-8 text-gray-800 bg-gray-500 hover:bg-gray-400 rounded-full " />
                    {GetUnreadComponent(99)} 
                </div>
                <div className=" w-fit ml-1 " onClick={()=>setAvatarDddwSwitch(!avatarDddwSwitch)} ref={avatarRef}>  
                    <Avatar {...avatarProps} />
                </div>
                {
                    avatarDddwSwitch
                    &&
                    <div className=" relative flex justify-end mt-20 " >
                        <AvatarDddw />
                    </div>                
                }
                {
                    notificationDddwSwitch
                    &&                    
                    <div className=" relative flex justify-end mt-20 " >
                        <NotificationDddw />
                    </div>
                }
                {
                    messageDddwSwitch
                    &&
                    <div className=" relative flex justify-end mt-20 " >
                        <MessageDddw />
                    </div>
                }
            </div>            
        </nav>
    );
};

export default Header;


