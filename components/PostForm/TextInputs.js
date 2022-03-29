import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const TextInputs = ({ onChange, title, excerpt }) => {
  const [errorMessage, setErrorMessage] = useState({
    excerpt: false,
    title: false,
  });

  const handleBlur = (e) => {
    const value = e.target.value.trim();
    console.log(value);
    if (!value) {
      setErrorMessage({ ...errorMessage, [e.target.name]: true });
    } else {
      setErrorMessage({ ...errorMessage, [e.target.name]: false });
    }
  };

  return (
    <div className="upper-inputs-wrapper">
      <input
        required
        className="upper-input title"
        name="title"
        placeholder="Title..."
        value={title}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {errorMessage["title"] && (
        <span className="error-message-container">
          <FontAwesomeIcon className="X" icon={faXmarkCircle} />
          <p>Title required...</p>
        </span>
      )}
      <textarea
        required
        className="upper-input text-area"
        maxLength={"300"}
        onChange={onChange}
        name="excerpt"
        placeholder="Post description..."
        value={excerpt}
        onBlur={handleBlur}
      />
      {errorMessage["excerpt"] && (
        <span className="error-message-container">
          <FontAwesomeIcon className="X" icon={faXmarkCircle} />
          <p>Excerpt required...</p>
        </span>
      )}
    </div>
  );
};

export default TextInputs;
