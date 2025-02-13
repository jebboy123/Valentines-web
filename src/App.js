import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import bg from "./img/bg.jpg";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState} from 'react';

const style = {
  background: "#FFFFFF",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: ".75vh",
  boxShadow: 24,
  width: "78%",
  height: "74%",
  fontFamily: "DM Sans",
  outline: "none",
  border: 'none',
}

function App() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  }

  const [text] = useTypewriter({
    words: [
      `Hey <span style="font-weight: bold; color: red;">Adi - Langga</span>, 
      I know I'm not the best when it comes to putting my feelings into words, 
      but I wanted to share this with you. I hope you like it, Adi :) 
      (Click on each photo when you're in and don't forget to click the Disc for the audio).`
    ],
    typeSpeed: 50,
    deleteSpeed: 80,
    skipDelay: true, // Removes delay after "Hey"
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button style={{ paddingTop: "5%", float: "right", color: "#000000" }} onClick={handleClick}>
            <div>X</div>
          </Button>
          <div style={{
            padding: "10%",
            fontSize: "40px",
            fontFamily: "'Dancing Script', cursive",
            color: "#000000",
            textAlign: "center",
          }} 
          dangerouslySetInnerHTML={{ __html: text }} 
          />
          <Cursor cursorStyle="|" />
        </Box>
      </Modal>
      <Gallery/>
    </>
  );
}

export default App;
