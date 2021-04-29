import React from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';
import {useState} from 'react'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')


const AddMovie = ({handleAdd}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }

const [form, setForm] = useState({
    name:'',
    date:'',
    rating: 1,
    image:'',
});

const handleChange =(e) => setForm({...form, [e.target.name]: e.target.value});

const handleRating = (x) => setForm({...form, rating: x});
    return (
        <div>
        <button className="btn add-movie" onClick={openModal}>Add Movie</button> 
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>

        <form onSubmit={(e)=>{
          e.preventDefault();
          let newMovie = {
            ...form, 
            id:Math.random(),
          };
          handleAdd(newMovie);
          closeModal();
        }}>

        <label>Movie name</label>
        <input type="text" value={form.name} name='name' onChange={handleChange} required/>
       
        <label>Date</label>
        <input type="date" value={form.date} name='date' onChange={handleChange} required/>
       
        <StarRating stars={form.rating} handleRating={handleRating}/>
       
        <label>Movie Poster</label>
        <input type="url" value={form.image} name='image' onChange={handleChange} required/>

        <div>
        <button className="btn btn-primary" type="submit">Add</button>
        <button className="btn btn-danger" onClick={closeModal}>Cancel</button> 
        </div>
        
        </form>
        
        </Modal>
        </div>
    )
}

export default AddMovie
