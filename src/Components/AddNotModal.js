import React, { useState, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { addNotes } from '../actions/notAction'
import { connect } from 'react-redux'
import uuid from 'react-uuid';
 

const AddNotModal = ({addNotes}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if ((title === "") | (body === "")) {
      M.toast({ html: "Please Enter a title & body" });
    } else {
      const newNote = {
        id: uuid(),
        title,
        body
      }
      addNotes(newNote)
      M.toast({ html: `note with ${title} has been added !!!` });
      setTitle("");
      setBody("");
    }
  };
  return (
    <Fragment>
      <div id='add-note-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Add Notes</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='title'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label htmlFor='' className='active'>
                Text
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='body'
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
              <label htmlFor='' className='active'>
                Body
              </label>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='!#'
            onClick={onSubmit}
            className='modal-close waves-effect  btn'
          >
            Submit
          </a>
        </div>
      </div>
    </Fragment>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
AddNotModal.propTypes = {};

export default connect(null,{addNotes})(AddNotModal)
