'use client';

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  theme?: string;
  onChange?: (value: string | undefined) => void;
  onMount?: (editor: monaco.editor.IStandaloneCodeEditor, monaco: typeof import('monaco-editor')) => void;
  readOnly?: boolean;
  height?: string;
  width?: string;
}

export default function CodeEditor({
  initialCode = '',
  language = 'javascript',
  theme = 'vs-dark',
  onChange,
  onMount,
  readOnly = false,
  height = '400px',
  width = '100%'
}: CodeEditorProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: typeof import('monaco-editor')) => {
    setIsLoading(false);
    
    // Configure editor settings
    editor.updateOptions({
      fontSize: 14,
      wordWrap: 'on',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      insertSpaces: true,
      detectIndentation: false,
    });

    // Add custom key bindings
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // Prevent browser save dialog
      return;
    });

    if (onMount) {
      onMount(editor, monaco);
    }
  };

  return (
    <div className="relative border border-gray-300 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p className="text-sm">Loading Editor...</p>
          </div>
        </div>
      )}
      
      <Editor
        height={height}
        width={width}
        language={language}
        theme={theme}
        value={initialCode}
        onChange={onChange}
        onMount={handleEditorDidMount}
        options={{
          readOnly,
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: true,
        }}
        loading={
          <div className="flex items-center justify-center h-full bg-gray-900 text-white">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
              <p className="text-sm">Loading Monaco Editor...</p>
            </div>
          </div>
        }
      />
    </div>
  );
}