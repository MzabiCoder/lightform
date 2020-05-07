
import React, {useEffect } from "react";
import NotItem from "./NotItem";
import PreLoader from "./Layouts/PreLoader";
import { connect } from 'react-redux'
import { getNotes } from '../actions/notAction'
import PropTypes from 'prop-types';
 
const Notes = ({getNotes,note:{notes,loading}}) => {
 useEffect(() => {
  getNotes();
   // eslint-disable-next-line
 }, [getNotes]);

 if (loading || notes===null) {
   return <PreLoader />;
 }
 return (
   <ul className='collection with-header'>
     <li className='collection-header'>
       <h4 className='center'>Notes List</h4>
     </li>
     {notes.length === 0 && !loading ? (
       <p className='center'>No Notes to show</p>
     ) : (
        notes.map((note) => <NotItem key={note.id} note={note} />)
     )}
   </ul>
 );
};
Notes.propTypes = {
 note:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
 note:state.notes
})

export default connect(mapStateToProps, { getNotes })(Notes);

// import React, {useEffect,useState } from "react";
//  import NotItem from "./NotItem";
// import PreLoader from "./Layouts/PreLoader";
// import { connect } from 'react-redux'
// import { getNotes } from '../actions/notAction'
// import PropTypes from 'prop-types';
// import InfinitScroll from 'react-infinite-scroll-component'
// import axios from 'axios'

// const Notes = ({ getNotes, note: { notes, loading } }) => {
//   const [count,setCount]=useState(30)
//   const [start, setStart] = useState(1)
//   const [tasks,setTask]=useState([])
//   useEffect(() => {
//     const fetch = async () => {
//       const res=await axios.get(`http://note.dev.cloud.lightform.com/notes?count=${count}&start=${start}`)
//       setTask(res.data._embedded.notes)
//     } 
//     fetch()
//    //getNotes();
//     // eslint-disable-next-line
//   }, [getNotes]);
//  // console.log(tasks)
//   const fecthImage = async () => {
//     setStart(start+count)
//     const res=await axios.get(`http://note.dev.cloud.lightform.com/notes?count=${count}&start=${start}`)
//     setTask(tasks.concat(res.data._embedded.notes))
//   }
//   if (loading || tasks===null) {
//     return <PreLoader />;
//   }
 
//   return (
//     <ul className='collection with-header'>
//       <li className='collection-header'>
//         <h4 className='center'>Notes List</h4>
//       </li>
//       {tasks.length === 0 && !loading ? (
//         <p className='center'>No Notes to show</p>
//       ) : (
//         tasks.map((note) =>
//             <InfinitScroll
//               dataLength={tasks.length}
//               next={fecthImage}
//               hasMore={true}
//               loader={ <h4>...Loading</h4> }
              
//             >  <NotItem key={note.id} note={note} />  </InfinitScroll>)
//       )}
//     </ul>
//   );
// };
// Notes.propTypes = {
//   note:PropTypes.object.isRequired
// }
// const mapStateToProps = state => ({
//   note:state.notes
// })

// export default connect(mapStateToProps,{getNotes})(Notes);


