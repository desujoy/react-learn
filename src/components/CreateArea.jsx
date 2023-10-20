import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  function handleClick() {
    setIsClicked(true);
  }
  return (
    <div>
      <form className="create-note" >
        <input
          name="title"
          placeholder="Title"
          value={props.newNote.title}
          onChange={props.setNewNote}
          style={{ display: isClicked ? "block" : "none" }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={props.newNote.content}
          onChange={props.setNewNote}
          onClick={handleClick}
        />
        <Zoom in={isClicked && true}>
          <Fab color="primary" onClick={props.addNote} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
