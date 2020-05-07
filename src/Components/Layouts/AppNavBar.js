import React,{useRef} from "react";
import { connect } from 'react-redux'
import { searchNotes } from '../../actions/notAction'
import PropTypes from 'prop-types'


const AppNavBar = ({ searchNotes }) => {
  const text=useRef('')
  const onChange = e => {
    searchNotes(text.current.value)
  }
  return (
    <nav>
      <div className='nav-wrapper' style={{ marginBottom: "2rem" }}>
        <form>
          <div className='input-field'>
            <input id='search' type='search' ref={text} onChange={onChange} required   />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
AppNavBar.propTypes = {
  searchNotes:PropTypes.func.isRequired
}
export default connect(null,{searchNotes})(AppNavBar);
