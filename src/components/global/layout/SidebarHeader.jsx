import { CiShoppingBasket, CiSquarePlus, CiSaveDown2 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { PiSquaresFourLight, PiUsers, PiSignInLight } from "react-icons/pi";
import { Avatar, Button, Divider, Sidebar, Typography } from 'keep-react'
import { Link } from "react-router-dom";
import { useState } from "react";
const SidebarHeader = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <Sidebar className='min-h-[fit-content] pb-0 lg:pb-5 lg:min-h-[100vh] max-w-full lg:max-w-[20rem]'>
            <div>
                <Sidebar.Header className="space-y-2.5">
                    <div className="flex items-center justify-between">
                        <Typography variant="heading-5" className="font-bold text-primary-500">
                            Gazi Store
                        </Typography>
                        <Button onClick={()=>setOpenMenu(!openMenu)} variant="outline" shape="icon" color="primary" className="border-none">
                            <HiOutlineMenu size={24} />
                        </Button>
                    </div>
                </Sidebar.Header>
                <Sidebar.Body className={`${openMenu? "block" : "hidden"} lg:block`}>
                    <Link to="/">
                        <Sidebar.Item>
                            <PiSquaresFourLight size={24} />
                            Home
                        </Sidebar.Item>
                    </Link>
                    <Link to="/">
                        <Sidebar.Item>
                            <IoCartOutline size={24} />
                            Sells
                        </Sidebar.Item>
                    </Link>
                    <Link to="/">
                        <Sidebar.Item>
                            <CiSquarePlus size={24} />
                            New Sell
                        </Sidebar.Item>
                    </Link>
                    <Link to="/">
                        <Sidebar.Item>
                            <CiShoppingBasket size={24} />
                            Products
                        </Sidebar.Item>
                    </Link>
                    <Link to="/">
                        <Sidebar.Item>
                            <CiSquarePlus size={24} />
                            New Product
                        </Sidebar.Item>
                    </Link>
                    <Link to="/">
                        <Sidebar.Item>
                            <CiSaveDown2 size={24} />
                            Unsaved Sells
                        </Sidebar.Item>
                    </Link>
                    <Link to="/">
                        <Sidebar.Item>
                            <PiUsers size={24} />
                            Users
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item>
                        <PiSignInLight size={24} />
                        Log Out
                    </Sidebar.Item>
                </Sidebar.Body>
                <Divider className="my-3" />
                <Sidebar.Footer className={`${openMenu? "flex" : "hidden"} lg:flex items-center gap-2`}>
                    <div>
                        <Avatar shape="circle" img="/images/avatar/avatar-3.png" />
                    </div>
                    <div>
                        <Typography variant="p" className="mb-0 text-body-3 font-medium text-metal-600">
                            Md Ariful Islam
                        </Typography>
                        <Typography variant="p" className="text-body-4 font-normal text-metal-400">
                            Web Developer
                        </Typography>
                    </div>
                </Sidebar.Footer>
            </div>
        </Sidebar>
    );
};

export default SidebarHeader;