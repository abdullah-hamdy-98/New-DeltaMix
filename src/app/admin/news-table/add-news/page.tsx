// NewsTable.tsx
"use client"
import React, { useState } from 'react';
import MyEditor from '../../TextEditor';
import '../../globals.css';
import { toast } from 'react-toastify';


const NewsTable: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [editorContent, setEditorContent] = useState<string>("");

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() === "") return toast.error("يرجى إدراج عنوان للمقال");
        if (!image) return toast.error("يرجى رفع صورة للمقال");

        // Handle form submission logic here
        console.log({ title, editorContent });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            // Optional: Check file type and size
            if (!file.type.startsWith('image/')) {
                return toast.error("يرجى رفع ملف صورة فقط");
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                return toast.error("حجم الصورة يجب ألا يتجاوز 5 ميجابايت");
            }
            setImage(file);
        }
    };

    return (
        <form className="form-container">
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
                <p>{image ? image.name : 'الصورة الرئيسية..'}</p>
            </label>


            <button type="button" className='submit-button'>نشر</button>
        </form>
    );
};

export default NewsTable;
