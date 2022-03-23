import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const modules = {
//   toolbar: {
//     container: [
//       [{ header: "1" }, { header: "2" }],
//       [{ size: [] }],
//       ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link", "image", "video"],
//       ["clean"],
//     ],
//   },
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: true,
//   },
// };

const TextEditor = ({ content }) => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: true,
      },
      // handlers: {
      //   image: imageHandler,
      // },
    }),
    []
  );

  // const imageHandler = () => {
  //   console.log("custom image handler");
  // };

  return (
    <div>
      <ReactQuill theme="snow" value={content} modules={modules} />
    </div>
  );
};

export default TextEditor;
