"use client";
import React, { useState } from 'react';
import MyEditor from '../../TextEditor';
import '../../globals.css';
import { toast } from 'react-toastify';

const NewsTable: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [content, setContent] = useState<string>("");

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() === "") return toast.error("يرجى إدراج عنوان للمقال");
        if (!image) return toast.error("يرجى رفع صورة للمقال");
        if (content.trim() === "") return toast.error("يرجى إدراج محتوى للمقال");

        console.log({ title, content });
        // Handle form submission logic here
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImage(file);
    };

    return (
        <form onSubmit={formSubmitHandler} className="form-container">
            <label htmlFor="title" className="input-label">عنوان الخبر</label>
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
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            <label htmlFor="file" className='file-input-label'>
                <p>{image ? image.name : 'إرفاق صورة'}</p>
            </label>

            <MyEditor onChange={setContent} />

            <button type="submit" className='submit-button'>نشر</button>
        </form>
    );
};

export default NewsTable;
