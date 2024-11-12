import React from 'react';
import "./globals.css";

import dynamic from 'next/dynamic';
const Loader = dynamic(() => import('../components/Loader'), { ssr: false });
const Mobile = dynamic(() => import('../components/MobileVersion'), { ssr: false });
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Search = dynamic(() => import('../components/SearchBox'), { ssr: false });
const SideBar = dynamic(() => import('./SideBar'), { ssr: false });
const PageHeader = dynamic(() => import('./PageHeader'), { ssr: false });

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (

        <div>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />
            <PageHeader />
            <div className='overflow-height'>
                <SideBar />
                <div className='scroll-container'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
