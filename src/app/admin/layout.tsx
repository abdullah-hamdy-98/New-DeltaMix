import React from 'react';
import "./globals.css";

import Loader from '../components/Loader';
import Mobile from '../components/MobileVersion';
import Navbar from '../components/Navbar';
import Search from '../components/SearchBox';
import SideBar from './SideBar';
import PageHeader from './PageHeader';

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
