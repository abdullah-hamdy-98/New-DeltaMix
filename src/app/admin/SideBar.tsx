"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { FaNewspaper, FaBroadcastTower, FaProjectDiagram, FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import styles from './admin.module.css';



const SideBar = () => {
    const [activeItem, setActiveItem] = useState('');
    return (
        <>
            <div className='adminContainer'>
                <aside className={styles.sidebar}>
                    <ul>
                        <Link href='/admin/news-table' style={{ textDecoration: 'none' }}>
                            <li
                                className={activeItem === 'الأخبار' ? styles.active : ''}
                                onClick={() => setActiveItem('الأخبار')}
                            >
                                <FaNewspaper className={styles.icon} /> الأخبار
                            </li>
                        </Link>
                        <Link href='/admin/station-table' style={{ textDecoration: 'none' }}>
                            <li
                                className={activeItem === 'المحطات' ? styles.active : ''}
                                onClick={() => setActiveItem('المحطات')}
                            >
                                <FaBroadcastTower className={styles.icon} /> المحطات
                            </li>
                        </Link>
                        <Link href='/admin/projects-table' style={{ textDecoration: 'none' }}>
                            <li
                                className={activeItem === 'المشاريع' ? styles.active : ''}
                                onClick={() => setActiveItem('المشاريع')}
                            >
                                <FaProjectDiagram className={styles.icon} /> المشاريع
                            </li>
                        </Link>
                        <Link href='/admin/swiper-table' style={{ textDecoration: 'none' }}>
                            <li
                                className={activeItem === 'Swiper' ? styles.active : ''}
                                onClick={() => setActiveItem('Swiper')}
                            >
                                <FaHome className={styles.icon} /> Swiper
                            </li>
                        </Link>


                        <Link href='/'  style={{ textDecoration: 'none' }}>
                            <li>
                                <FaSignOutAlt className={styles.icon}  /> تسجيل الخروج
                            </li>
                        </Link>
                    </ul>
                </aside>
            </div >

        </>
    );
}

export default SideBar;
