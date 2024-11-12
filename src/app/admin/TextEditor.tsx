// MyEditor.tsx
import React, { useEffect, useRef } from "react";
import "./styles.css";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

interface MyEditorProps {
  onContentChange: (content: string) => void;
}

const MyEditor: React.FC<MyEditorProps> = ({ onContentChange }) => {
  return (
    <></>
  )
};

export default MyEditor;
