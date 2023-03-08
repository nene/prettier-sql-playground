import CodeEditor from "@uiw/react-textarea-code-editor";

interface SqlEditorProps {
  value: string;
  onChange?: (sql: string) => void;
}

export function SqlEditor({ value, onChange }: SqlEditorProps) {
  return (
    <CodeEditor
      value={value}
      language="sql"
      placeholder="Write your SQL code here"
      data-color-mode="dark"
      onChange={(e) => onChange && onChange(e.target.value)}
      padding={15}
      style={{
        fontSize: 14,
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}
