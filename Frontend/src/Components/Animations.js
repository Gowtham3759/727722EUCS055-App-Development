// src/Components/Animations.js
import React, { useState } from 'react';
import './Animation.css';
import vid11 from './videos/3-5/thecitymouseandthecountrymouse.mp4';
import vid12 from './videos/3-5/TheOakTree.mp4';
import vid13 from './videos/3-5/TheWindAndTheSun.mp4';
import vid14 from './videos/3-5/thecitymouseandthecountrymouse.mp4';
import vid15 from './videos/3-5/thedogandhisbone.mp4';
import vid16 from './videos/3-5/theemperornewclothes.mp4';


import vid21 from './videos/6-7/thefrightenedlion.mp4';
import vid22 from './videos/6-7/thegirlandtheicecreamtruck.mp4';
import vid23 from './videos/6-7/thebread.mp4';
import vid24 from './videos/6-7/thelittleredhen.mp4';
import vid25 from './videos/6-7/chickenlittle.mp4';
import vid26 from './videos/6-7/thebirdandthewale.mp4' ;

import vid31 from './videos/8-10/snowwhite.mp4' ;
import vid32 from './videos/8-10/rapunzel.mp4';
import vid33 from './videos/8-10/theuglyduckling.mp4' ;
import vid34 from './videos/8-10/thebeautyandthebeast.mp4' ;
import vid35 from './videos/8-10/theniceoldwitch.mp4'  ;
import vid36 from './videos/8-10/littleredridinghood.mp4' ;


const Animations = () => {
  const storiesData = {
    '3-5': [
        { id: 2, title: 'THE FOX AND THE CROW', videoUrl: vid11 },
        { id: 3, title: 'THE OAK TREE', videoUrl: vid12 },
        { id: 4, title: 'THE WIND AND THE SUN', videoUrl: vid13 },
        { id: 5, title: 'THE CITY MOUSE AND THE COUNTRY MOUSE', videoUrl: vid14 },
        { id: 6, title: 'THE DOG AND HIS BONE', videoUrl: vid15 },
        { id: 1, title: 'THE EMPEROR\'S NEW CLOTHES', videoUrl: vid16 }
    ],
    '6-7': [
      { id: 7, title: 'THE FRIGHTENED LION', videoUrl: vid21 },
      { id: 8, title: 'THE GIRL AND THE ICE CREAM TRUCK', videoUrl: vid22 },
      { id: 9, title: 'THE BREAD', videoUrl: vid23 },
      { id: 10, title: 'THE BREAD', videoUrl: vid24 },
      { id: 11, title: 'THE BREAD', videoUrl: vid25 },
      { id: 12, title: 'THE BREAD', videoUrl: vid26 },
    ],
    '8-10': [
      { id: 13, title: 'SNOW WHITE', videoUrl: vid31 },
      { id: 14, title: 'RAPUNZEL', videoUrl: vid32 },
      { id: 15, title: 'THE UGLY OLD DUCKLING', videoUrl: vid33 },
      { id: 16, title: 'THE BEAUTY AND THE BEAST', videoUrl: vid34,},
      { id: 17, title: 'THE NICE OLD WITCH', videoUrl: vid35 },
      { id: 18, title: 'LITTLE RED RIDING HOOD', videoUrl: vid36 },
    ]
  };


  const [ageGroup, setAgeGroup] = useState('3-5');
  const [stories, setStories] = useState(storiesData['3-5']);

  const handleAge = (group) => {
    setAgeGroup(group);
    setStories(storiesData[group]);
  }

  return (
    <div className="main-layout12">
      <div id="topic12">
        <h1 className='namehead12'>ANIMATIVE STORY BOOKS</h1>
      </div>
      <div className="age-buttons12">
        <button onClick={() => handleAge('3-5')}>Age 3-5</button>
        <button onClick={() => handleAge('6-7')}>Age 6-7</button>
        <button onClick={() => handleAge('8-10')}>Age 8-10</button>
      </div>
      <div className="content12">
        <div className="container-row12">
          {stories.map(story => (
            <div key={story.id} className="container12">
              <video width="640" height="360" controls>
                <source src={story.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="name12">{story.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animations;
