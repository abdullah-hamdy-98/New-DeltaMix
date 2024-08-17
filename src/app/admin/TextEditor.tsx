"use client";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline'],
        ['link'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
};

interface MyEditorProps {
    onChange: (content: string) => void;
}

const MyEditor: React.FC<MyEditorProps> = ({ onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (content: string) => {
        setValue(content);
        onChange(content);
    };

    return (
        <ReactQuill
            value={value}
            onChange={handleChange}
            modules={modules}
            style={{ height: '220px' }}
        />
    );
}

export default MyEditor;
