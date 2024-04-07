/* eslint-disable react/prop-types */
import SidebarHeader from "./SidebarHeader";

const Layout = ({ children }) => {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-full lg:col-span-3">
                    <SidebarHeader />
                </div>
                <div className="col-span-full lg:col-span-9 py-[20px] lg:py-[50px] pl-[10px] lg:pl-[0] pr-[20px] lg:pr-[50px]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;