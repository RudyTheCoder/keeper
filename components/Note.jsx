import React from "react";

function Note(props) {
  // Function to handle the "DELETE" button click
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      {/* Display the note title */}
      <h1>{props.title}</h1>
      {/* Display the note content */}
      <p>{props.content}</p>
      {/* Button to delete the note */}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
