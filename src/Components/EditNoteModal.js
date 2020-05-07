import React, { useState, Fragment,useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateNote,clearCurrent } from '../actions/notAction'
import {connect} from 'react-redux'

const EditNoteModal = ({updateNote,current,clearCurrent }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    if (current) {
    setTitle(current.title);
    setBody(current.body);
    }
    
    // eslint-disable-next-line
  },[current])

  const onSubmit = (e) => {
    e.preventDefault();
    if ((title === "") | (body === "")) {
      M.toast({ html: "Please Enter a title & body" });
    } else {
      const UpdateNote = {
        id: current.id,
        title,
        body,
      }
      updateNote(UpdateNote)
      M.toast({ html: `Note with title of ${current.title} has been updated !!!` });
      setTitle("");
      setBody("");
    }
  };
  return (
    <Fragment>
      <div id='edit-note-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Update Notes</h4>
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
EditNoteModal.propTypes = {};
const mapStateToProps = state => ({
  current:state.notes.current
})
export default connect(mapStateToProps,{updateNote,clearCurrent})(EditNoteModal);
