"use client"
import React, { useState } from 'react';
import MyEditor from '../TextEditor'

import '../globals.css'
import { toast } from 'react-toastify';


const NewsTable = () => {
    const [title, setTitle] = useState("");

    const [image, setImage] = useState("");


    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (title === "") return toast.error("يرجى إدراج عنوان للمقال")
        if (image === "") return toast.error("يرجى رفع صورة للمقال")


        console.log(title);

    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className="form-container">


                <input
                    className='input-field'
                    placeholder="عنوان الخبر"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                
                <input
                    className='input-field'
                    id="file"
                    type="file"
                    onChange={(e) => setImage(e.target.value)}
                    style={{ display: 'none' }}
                />
                <label
                    htmlFor="file"
                    className='file-input-label'
                >
                    <p>{image ? image : 'إرفاق صورة'}</p>
                </label>

                <MyEditor />

                <button className='submit-button'>نشر</button>

            </form>


        </>
    )
}

export default NewsTable;