import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles

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

function MyEditor() {
    const [value, setValue] = useState('');

    return (
        <ReactQuill
            value={value}
            onChange={setValue}
            modules={modules}
            style={{ height: '220px' }} 
        />
    );
}

export default MyEditor;
