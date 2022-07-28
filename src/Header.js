import React, { useContext } from 'react'
import { data } from './Data'
import './css/Header.css'
import { Modal} from '@mui/material'

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


const Header = () => {

  const u = useContext(data)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mute , setMute] = React.useState(['Mute' , 'fa-solid fa-bell' , 'red']);
  const [mute2 , setMute2] = React.useState(['Mute' , 'fa-solid fa-bell' , 'red']);

  const muteHandel = ()=>{
    if(mute[0]==='Mute'){
      setMute(['Unmute' , 'fa-solid fa-bell-slash', 'green']);
      u.setMuteFr([1,'friend1' ])
    }
    else{
      setMute(['Mute' , 'fa-solid fa-bell', 'red'])
      u.setMuteFr([0,'friend1' ])
    }
  }
  const muteHandel2 = ()=>{
    if(mute2[0]==='Mute'){
      setMute2(['Unmute' , 'fa-solid fa-bell-slash', 'green']);
      u.setMuteFr([1,'friend2' ])
    }
    else{
      setMute2(['Mute' , 'fa-solid fa-bell', 'red'])  
      u.setMuteFr([0,'friend2' ])
    }
  }

  return (
    <>
    <div id='menu'>
        <div>Fakebook</div>
        <div>Friends <i onClick={handleOpen} className="fa-solid fa-user-group"></i></div>
        <div>{u.login_user[0]}</div>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
      
      >
        <div style={style} id="modal">
              <div>
                  <div>
                    Friend 1  <span onClick={muteHandel}>{mute[0]} <i style={{color:mute[2]}} className={mute[1]}></i></span>
                  </div>
                  <div>
                    Friend 2  <span onClick={muteHandel2}>{mute2[0]} <i style={{color:mute2[2]}} className={mute2[1]}></i></span>
                  </div>
                  <button id='cancel' onClick={handleClose}>Close</button>
              </div>
        </div>
      </Modal>
    </>
  )
}

export default Header