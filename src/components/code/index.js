import Editor from "react-prism-editor";

const Code = ({ code, language }) => {
  return (
    <>
      <Editor
        language={language}
        theme="okaidia"
        code={code}
        lineNumber
        readOnly
        clipboard
        showLanguage
      />
      <br />
    </>
  );
};

export default Code;

/*
------ language of the code ------
language: json,javascript,jsx,tsx,typescript
html,vue,angular,css,sass,markup
java,php,csharp,c,cpp,sql,xml
*/