import React, { useState } from "react";

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
    <div className="upper-inputs">
      <input
        required
        name="title"
        placeholder="Title..."
        value={title}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {errorMessage["title"] && (
        <div>
          <p>Title required...</p>
        </div>
      )}
      <textarea
        required
        onChange={onChange}
        name="excerpt"
        placeholder="Post description..."
        value={excerpt}
        onBlur={handleBlur}
      />
      {errorMessage["excerpt"] && (
        <div className="error">
          <p>Excerpt required...</p>
        </div>
      )}
    </div>
  );
};

export default TextInputs;
