// "use client";

// import { EditorContent, EditorInstance, EditorRoot } from "novel";
// import { useState } from "react";

// const TailwindEditor = () => {
//   const [content, setContent] = useState(null);

//   const debouncedUpdates = useDebouncedCallback(async (editor: EditorInstance) => {
//     const json = editor.getJSON();
//     setContent(json);
//     setSaveStatus("Saved");
//   }, 500);

//   return (
//     <EditorRoot>
//       <EditorContent
//         initialContent={content}
//         onUpdate={({ editor }) => {
//           const json = editor.getJSON();
//           setContent(json);
//         }}
//       />
//     </EditorRoot>
//   );
// };
// export default TailwindEditor;
