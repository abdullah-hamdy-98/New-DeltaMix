"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaNewspaper, FaBroadcastTower, FaProjectDiagram, FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import styles from './admin.module.css';

const SideBar = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const toggleItem = (item: string) => {
        setActiveItem(activeItem === item ? null : item);
    };

    return (
        <div className='adminContainer'>
            <aside className={styles.sidebar}>
                <ul>
                    <li
                        className={activeItem === 'الأخبار' ? styles.active : ''}
                        onClick={() => toggleItem('الأخبار')}
                    >
                        <FaNewspaper className={styles.icon} /> الأخبار
                    </li>
                    {activeItem === 'الأخبار' && (
                        <ul>
                            <Link href='/admin/news-table/add-news' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    إضافة
                                </li>
                            </Link>
                            <Link href='/admin/news-table/edit-news' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    تعديل
                                </li>
                            </Link>
                        </ul>
                    )}

                    <li
                        className={activeItem === 'المحطات' ? styles.active : ''}
                        onClick={() => toggleItem('المحطات')}
                    >
                        <FaBroadcastTower className={styles.icon} /> المحطات
                    </li>
                    {activeItem === 'المحطات' && (
                        <ul>
                            <Link href='/add-station' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    إضافة
                                </li>
                            </Link>
                            <Link href='/edit-station' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    تعديل
                                </li>
                            </Link>
                        </ul>
                    )}

                    <li
                        className={activeItem === 'المشاريع' ? styles.active : ''}
                        onClick={() => toggleItem('المشاريع')}
                    >
                        <FaProjectDiagram className={styles.icon} /> المشاريع
                    </li>
                    {activeItem === 'المشاريع' && (
                        <ul>
                            <Link href='/add-project' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    إضافة
                                </li>
                            </Link>
                            <Link href='/edit-project' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    تعديل
                                </li>
                            </Link>
                        </ul>
                    )}

                    <li
                        className={activeItem === 'Swiper' ? styles.active : ''}
                        onClick={() => toggleItem('Swiper')}
                    >
                        <FaHome className={styles.icon} /> Swiper
                    </li>
                    {activeItem === 'Swiper' && (
                        <ul>
                            <Link href='/add-swiper' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    إضافة
                                </li>
                            </Link>
                            <Link href='/edit-swiper' style={{ textDecoration: 'none' }}>
                                <li
                                    className={styles.subItem}
                                >
                                    تعديل
                                </li>
                            </Link>
                        </ul>
                    )}

                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <li>
                            <FaSignOutAlt className={styles.icon} /> تسجيل الخروج
                        </li>
                    </Link>
                </ul>
            </aside>
        </div>
    );
}

export default SideBar;
