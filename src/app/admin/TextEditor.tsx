import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface MyEditorProps {
    onChange: (content: string) => void;
}

const MyEditor: React.FC<MyEditorProps> = ({ onChange }) => {
    const handleEditorChange = (content: string) => {
        onChange(content);
    };

    return (
        <Editor
            apiKey="krj5e59744igqs8go3elh5uioxltldthc5tu5xbmgeofuk2v"
            init={{
                height: 250,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'directionality colorpicker textpattern'
                ],
                toolbar: 'undo redo | formatselect | fontsize | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat  | rtl ltr',
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                directionality: 'rtl', // or 'ltr' for LTR support
                branding: false // Remove TinyMCE branding
            }}
            onEditorChange={handleEditorChange}
        />
    );
}

export default MyEditor;
