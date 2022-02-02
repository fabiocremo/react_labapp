import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import './slideshow.css';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';


const Slideshow = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  
    const fadeProperties = {
      duration: 3000,
      canSwipe: false,
    };
  
    return (
      <div>
        <div className="slide-container">
          <Slide {...fadeProperties}>
            <div className="each-fade">
              <div>
                <img src={img1} alt={img1}/>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="each-fade">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div>
                <img src={img2} alt={img2}/>
              </div>
            </div>
            <div className="each-fade">
              <div>
                <img src={img3} alt={img3}/>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>


          </Slide>
        </div>
        <div className="each-list">
              <div>
                <img src={img1} alt={img1}/>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="each-list">
              <div>
                <img src={img2} alt={img2}/>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="each-list">
              <div>
                <img src={img3} alt={img3}/>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>


      </div>
    );
  };

export default Slideshow;
