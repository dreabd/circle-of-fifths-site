import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { announcements } from './exampleAnx';

function AnnoucementsCarousel() {
  return (
    <Carousel infiniteLoop="true" className='carousel'>
      {announcements.map((announcement) => {
        return (
          <div className="ax-slide" key="slide1">
            <div>
              <img className="profile-img" src={announcement.member.pfp} />
            </div>
            <div className='ax-info-container'>
              <div className='top-ax-info'>
                <p>{announcement.title}</p>
                <p>{announcement.created_at}</p>
              </div>
              <div className='bot-ax-info'>
                <p >{announcement.announcement.slice(0, 200)}{announcement.announcement.length > 300 && "..."}</p>

              </div>
            </div>
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
