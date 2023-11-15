import React, { useState } from "react";

function CreateArea(props) {
  // State to store the current note being typed
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Function to handle input changes and update the note state
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Function to submit the new note and clear the input fields
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {/* Input field for the note title */}
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {/* Textarea for the note content */}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        {/* Button to add the note */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
