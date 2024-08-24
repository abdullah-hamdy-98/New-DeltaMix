"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { FaNewspaper, FaBroadcastTower, FaProjectDiagram, FaHome, FaSignOutAlt } from 'react-icons/fa';
import styles from './admin.module.css';
import { toast } from 'react-toastify';
import { DOMAIN } from '@/utils/constants';
import axios from 'axios';

const SideBar = () => {
    const router = useRouter();
    const logoutHandler = async () => {
        try {
            await axios.get(`${DOMAIN}/api/users/logout`)
            router.push("/")
            router.refresh()
        } catch (error) {
            toast.warning("Something wen wrong");
            console.log(error);
        }
    }
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

                    <li>
                        <button style={{ "border": "0px", "background": "rgba(128, 128, 128, 0)" }}
                            onClick={logoutHandler}
                        > <FaSignOutAlt className={styles.icon} /> تسجيل الخروج </button>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default SideBar;
