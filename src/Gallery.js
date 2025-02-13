// src/Gallery.js
import React, { useState,useEffect} from 'react';

import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import './gallery.css'
import { Slide,  Zoom } from '@mui/material';

import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
import discStatic from './img/disc.png';
import discSpinning from './img/disc-spinning.gif';
import skel from './img/songName.mp3'
import toneArm from './img/tone-arm.png';

import HVW from './img/HVW.png'
const Gallery = () => {
   const [text, setText] = useState("");
  const [anchor, setAnchor] = React.useState(null);
  const [currentStyle, setCurrentStyle] = useState('slider');
  const getImg = (imgSrc) =>{
    console.warn(imgSrc)
  }
  
  const toggleStyle =  (event, index) => {
    switch (index) {
    case 1:
      setText(`
        I don't know what to say sa diri nga picture Adi, so i think i'll leave a poem nalng for this pic HAHA
        <span class="poem">
          Through laughter and love, our hearts align,<br>
          Your warm embrace, the stars brightly shine.<br>
          With every moment, joy we weave,<br>
          Together forever, in bliss we believe. 💕
        </span>
      `);
      
      break;
    case 2:
      setText("Namian ko ka kwa ta diri Adi !!! HAHAHA Kanami balik - balikan ang mga pictures ta. Kanami e cherish kag e document ang mga lagaw ta adi,Kanami panumdomon nga ara ta sa nami nga lugar kag happy lang gid ta.<br><br> Gusto ko sa mga bag-o nga mga lugar nga makadtuan ko, upod kita. Gusto ko duwa ta ma share sang kanami kag ka peaceful sang lugar. I LOVE YOU ! ");
      break;
    case 3:
      setText("I was really happy this time, Adi. Ikaw gid naghambal nga ma-pic ta, and even though medyo lowkey pa ini nga pic, it means so much to me. Ga-start pa lang kita sini, ga-batyaganay, kag ga-kilalahay pa lang—but in this moment, I already felt something special, Actually before pagid.Amo ni siguro ang pinaka-close ta nga contact for the first time that time? HAHAHA! <br><br> But looking back, it was more than just that. It was the start of something beautiful, something that would grow into what we have now. Kung sa iban—wala lang ni nga picture, but a memory of how everything began. And knowing where we are now, I'm just so grateful nga natabo ini tanan.<br><br>I love you, Adi. Indi lang tungod sini nga moment but for every moment after this, and for every moment pa nga masunod. 💕");
      break;
    case 4:
      setText("You have this way of making everything feel softer, lighter, and more beautiful—just by being you. Your kindness, your warmth, and the way you care make my world so much better.<br><br>I love you, not just for how wonderful you are, but for how you make me feel when I'm with you. You're my safe place, my happiness, and my favorite person. I’m so lucky to have you, and I’ll never stop appreciating you. ");
      break;
    case 5:
      setText("This is our first concert together, and happy kaayo ko this day kay nakita taka nga super happy ka, enjoying the music of Ben&Ben. Seeing you vibe to the songs, singing your heart out, and feeling every lyric made everything even more special.<br><br> In that moment, nothing else mattered—just you, me, and the music. I love sharing these little moments with you, moments where we just lose ourselves in the rhythm and happiness of the night. Here's to more concerts, more memories, and more moments like this with you. 💕");
      break;
    case 6:
      setText("Adi, gahambal ka kis.a nga law.ay mana nga pic—'Law-ay mana nga pic, amo na nanamian mo?'—pero actually, namian ko na. Kay para sa akon, pictures like this capture something real, something raw. It’s not about being perfectly posed or filtered; it's about the genuine smile, the pureness of the moment, and the emotions that can’t be staged.<br><br> Amo ni ang mga pictures nga magadala memories sang how happy and carefree you were in that exact second. That’s why I love them—because they show you, just as you are, and that's always beautiful to me.💕");
      break;
    case 7:
      setText("I love making you happy, Adi. God, I would gladly offer everything I have—my time, my effort, my heart—just to see you smile. I’d go the extra mile, no second thoughts, no hesitations. If it means making your day brighter, easing your worries, or giving you even just a moment of pure joy, I’d do it over and over again.<br><br> Your happiness means everything to me, and I’d sacrifice anything just to see that beautiful smile of yours, the one that makes my world feel lighter. 💖");
      break;
      
    case 8:
      setText("Adi, I love you with all my heart. Every day, I look forward to seeing just how beautiful life is with you by my side. Sure, there are misunderstandings, heartaches, and everything in between, but none of that changes the fact that I love you from the very depths of my heart.<br><br>This may be a simple gift, just words on a screen, but please know that I mean every single one of them. Every 'I love you' carries the weight of all the moments we've shared, all the times you've made me smile, and all the ways you've made my world so much brighter. You are my greatest love, and nothing will ever change that.<br><br>I love you so much, my Adi, my palangga. ❤️");
      break;
    default:
      setText("EXAMPLE TEXT (write something romantic for your partner/ something for your loved one) ");
  }

    
    setAnchor(anchor ? null : event.currentTarget);
    setCurrentStyle(currentStyle === 'slider' ? 'sliderPause' : 'slider');
  };
  const handleClick = (event) => {
    
  };
  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;


  const customStyle = (i) => {
    return {
      '--i': i,
      // Add more custom properties if needed
    };
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
  };
  const [isZoomed, setIsZoomed] = useState(false);

 
  useEffect(() => {
    let timeoutId;
    if (isZoomed) {
      timeoutId = setTimeout(() => {
        setIsZoomed(!isZoomed);
      }, 200); // Adjust the duration as needed (in milliseconds)
    }
    return () => clearTimeout(timeoutId);
  }, [isZoomed]);
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsHorizontal(window.innerWidth > window.innerHeight);
    };

    // Initial check
    checkOrientation();

    // Listen for resize events to update orientation
    window.addEventListener('resize', checkOrientation);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);
  return (
    <>
   
    <div style = {{marginLeft :isHorizontal ? "10vw": "10vw", marginTop: "-30vh"}}>     
      <div style = {{ marginLeft :isHorizontal ? "7vw": "4vw",  marginBottom:"5vh"}}>
        <img  style = {{ height:isHorizontal ? "70%": "70%", width: isHorizontal ? "70%": "70%"}} 
        className={isZoomed ? 'zoomed' : 'notzoomed'}  
        src={HVW} alt="Happy Valentine's Logo"  /> 
      </div>
   
    <div style = {{position: "relative",zIndex: 1, marginLeft: "15vw", display: "flex"}} className={currentStyle} >
    <BasePopup id={id} open={open} anchor={null}>
  <PopupBody
    style={{
      position: "absolute",
      top: "27vw",
      left: "74vw",
      transform: "translateY(-50%)",
      zIndex: 10,
      width: "350px",
      minHeight: "520px",
      textAlign: "center",
      fontSize: "22px"
    }}
    dangerouslySetInnerHTML={{ __html: text }} // Fixes the issue
  />
</BasePopup>


      
      <span style = {customStyle(1)}> <img className="zoom" src = {img1} alt = "" onClick={(e) => toggleStyle(e, 1)} style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      <span style = {customStyle(2)}> <img className="zoom" src = {img2} alt = "" onClick={(e) => toggleStyle(e, 2)}style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      <span style = {customStyle(3)}> <img className="zoom" src = {img3} alt = "" onClick={(e) => toggleStyle(e, 3)}style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      <span style = {customStyle(4)}> <img className="zoom" src = {img4} alt = "" onClick={(e) => toggleStyle(e, 4)}style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      <span style = {customStyle(5)}> <img className="zoom" src = {img5} alt = "" onClick={(e) => toggleStyle(e, 5)}style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      <span style = {customStyle(6)}> <img className="zoom" src = {img6} alt = "" onClick={(e) => toggleStyle(e, 6)}style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      <span style = {customStyle(7)}> <img className="zoom" src = {img7} alt = "" onClick={(e) => toggleStyle(e, 7)}style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      <span style = {customStyle(8)}> <img className="zoom" src = {img8} alt = "" onClick={(e) => toggleStyle(e, 8)}style={{ width: "220px", height: "220px", borderRadius: "15px" }}/> </span>
      
    </div >
    
</div>  {/* Closing div for gallery & logo - DO NOT place the disc inside this! */}

{/* Move the Disc to a Separate Div */}
<div style={{
  position: "absolute",
  right: "67vw",
  top: "8vh",
  zIndex: 3  // Higher z-index so it stays on top
}}>
  <Slide direction='out' in={currentStyle === 'slider'} mountOnEnter unmountOnExit>
    <img onClick={togglePlayback}  
      className={!isPlaying ? 'onScene' : ''} 
      style={{ height: "200px", width: "200px" }} 
      src={isPlaying ? discSpinning : discStatic} 
      alt="Vinyl Record"
    />
  </Slide>
  <img 
    className={isPlaying ? "tone-arm move-arm" : "tone-arm"} 
    src={toneArm} 
    alt="Tone Arm"
  />
</div>
  <audio ref={audioRef} loop>
        
    <source src= {skel} type="audio/mpeg" />
        
  </audio>
   
    </>
  );
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };
  
  const PopupBody = styled('div')(
    ({ theme }) => `
      width: ${window.innerWidth > window.innerHeight ? '50vw' : '85vw'};
      min-height: 150px; 
      max-height: 300px; 
      overflow-y: auto;
      padding: 10px;
      margin: 8px;
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#F5F5DC'};
      box-shadow: ${
        theme.palette.mode === 'dark'
          ? `0px 4px 8px rgb(0 0 0 / 0.7)`
          : `0px 4px 8px rgb(0 0 0 / 0.1)`
      };
      font-family: 'Patrick Hand', cursive; /* Handwritten font */
      font-size: ${window.innerWidth > window.innerHeight ? '1.5vw' : '3vh'};
      z-index: 1;
      white-space: pre-line; /* Ensures line breaks in poems */
    `,
  );
  
  
  
  const Button = styled('button')(
    ({ theme }) => `
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${blue[500]};
    box-shadow: 0 2px 1px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &:active {
      background-color: ${blue[700]};
      box-shadow: none;
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  
    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
      &:hover {
        background-color: ${blue[500]};
      }
    }
  `,
  );

export default Gallery;
