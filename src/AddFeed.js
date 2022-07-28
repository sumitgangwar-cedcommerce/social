import { Modal } from '@mui/material';
import React, { useContext, useState } from 'react'
import './css/AddFeed.css'
import { data } from './Data'
const AddFeed = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '40%',
    padding: '2vw',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    borderRadius: '5px',
    p: 4,
    backgroundColor: 'white'
  };

  const [image , setImage] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const u = useContext(data)

  const add_myPost = (e) => {
    e.preventDefault();
    let txt = document.getElementById('model-txt').value;
    let temp = [image , txt , [] , 0,'black']
    u.setMyfeed(temp)
    setImage('')
    document.getElementById('model-txt').value=''
    handleClose()
  }

  // console.log(u.myFeed)
  // console.log(u.friend1)

  const add_photo = (event) => {
 
    // console.log(event.target.files[0]);
    let image =  URL.createObjectURL(event.target.files[0])
    console.log(image)
    setImage(image)
    
  }

   

  return (
    <div id="AddFeed">
        <p><span>{u.login_user[0][0]}</span><input placeholder="What's on your mind?" readOnly onClick={handleOpen}></input></p>
        <div>
           <div>Photos <i className="fa-solid fa-photo-film"></i></div>
           <div>Audio <i className="fa-solid fa-music"></i></div>
           <div>Video <i className="fa-solid fa-video"></i></div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style} id="modal-body">
        <form onSubmit={add_myPost}>
              <div><span>{u.login_user[0][0]}</span> {u.login_user[0]}</div>
              <div>
                  <div id='modal-textarea'>
                    <div><input id='model-txt' style={{width: '58%' , border: 'none' , outline: 'none'}} type="text" placeholder="What's on your mind?"></input></div>
                    <img style={{width: '60%'}} src={image} alt=""></img>
                  </div>
                  <p>Add Photo <i class="fa-solid fa-images"></i> <input onChange={add_photo} type="file" ></input></p>
                  
              </div>
              <div>
                  <button id='cancel' onClick={handleClose}>Cancel</button>
                  <button id='post' type='submit'>Post</button>
              </div></form>
        </div>
      </Modal>
    </div>
  )
}

export default AddFeed