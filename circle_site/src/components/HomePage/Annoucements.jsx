import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { announcements } from './exampleAnx';

function AnnoucementsCarousel() {
  return (
    <Carousel>
      {announcements.map((announcement) => {
        return (
          <div key="slide1" style={{ padding: 20, height: 150 }}>
            {/* <img className="profile-img" src={announcement.member.pfp} alt="" /> */}
            Text 01
          </div>

        //   <slide style={{ padding: "100%", height: 150, border:"1px solid red"}}>
        //     <div>
        //       {/* <img className="profile-img"src={announcement.member.pfp} alt="" /> */}
        //     </div>
        //     <div>
        //       <p>{announcement.title}</p>
        //       <p>{announcement.member.first_name}</p>
        //     </div>
        //   </slide>
        )
      })}
    </Carousel>
  )
}


export default AnnoucementsCarousel
