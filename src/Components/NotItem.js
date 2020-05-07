import React from "react";
import PropTypes from "prop-types";
import { delNotes } from '../actions/notAction'
import { connect } from 'react-redux'
import M from "materialize-css/dist/js/materialize.min.js";
import {setCurrent} from '../actions/notAction'


const NotItem = ({ setCurrent, delNotes, note }) => {
  //console.log(note);
  
  return (
    <li className='collection-item'>
      <div>
        <a href='#edit-note-modal' className='modal-trigger' onClick={()=>setCurrent(note)}>
          {`${note.title}` ? `Title:${" "}${note.title}` : "No Title for this note!!"}{" "}
          <br />
          {`${note.body}` ? `Body:${" "}${note.body}` : "No Body for this note!!"}
        </a>

        <a href='!#' className='secondary-content' onClick={() => {
          delNotes(note.id)
          M.toast({ html: `Note with a title of ${note.title} has been removed!!` });
        }}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

NotItem.propTypes = {
  note: PropTypes.object.isRequired,
  delNotes:PropTypes.func.isRequired
};

export default connect(null,{delNotes,setCurrent})(NotItem);
