import React, { useState } from 'react';
import './Animation.css';

const Animations = () => {
  const storiesData = {
    '3-5': [
        { id: 2, title: 'THE FOX AND THE CROW', videoUrl: '/videos/3-5/TheFoxAndTheCrow.mp4' },
        { id: 3, title: 'THE OAK TREE', videoUrl: '/videos/3-5/TheOakTree.mp4' },
        { id: 4, title: 'THE WIND AND THE SUN', videoUrl: '/videos/3-5/TheWindAndTheSun.mp4' },
        { id: 5, title: 'THE CITY MOUSE AND THE COUNTRY MOUSE', videoUrl: '/videos/3-5/thecitymouseandthecountrymouse.mp4' },
        { id: 6, title: 'THE DOG AND HIS BONE', videoUrl: '/videos/3-5/thedogandhisbone.mp4' },
        { id: 1, title: 'THE EMPEROR\'S NEW CLOTHES', videoUrl: '/videos/3-5/theemperornewclothes.mp4' }
    ],
    '6-7': [
      { id: 7, title: 'THE FRIGHTENED LION', videoUrl: '/videos/6-7/thefrightenedlion.mp4' },
      { id: 8, title: 'THE GIRL AND THE ICE CREAM TRUCK', videoUrl: '/videos/6-7/thegirlandtheicecreamtruck.mp4' },
      { id: 9, title: 'THE BREAD', videoUrl: '/videos/6-7/thebread.mp4' },
      { id: 10, title: 'THE BREAD', videoUrl: '/videos/6-7/thelittleredhen.mp4' },
      { id: 11, title: 'THE BREAD', videoUrl: '/videos/6-7/chickenlittle.mp4' },
      { id: 12, title: 'THE BREAD', videoUrl: '/videos/6-7/thebirdandthewale.mp4' },
    ],
    '8-10': [
      { id: 13, title: 'SNOW WHITE', videoUrl: '/videos/8-10/snowwhite.mp4' },
      { id: 14, title: 'RAPUNZEL', videoUrl: '/videos/8-10/rapunzel.mp4' },
      { id: 15, title: 'THE UGLY OLD DUCKLING', videoUrl: '/videos/8-10/theuglyduckling.mp4' },
      { id: 16, title: 'THE BEAUTY AND THE BEAST', videoUrl: '/videos/8-10/thebeautyandthebeast.mp4' },
      { id: 17, title: 'THE NICE OLD WITCH', videoUrl: '/videos/8-10/theniceoldwitch.mp4' },
      { id: 18, title: 'LITTLE RED RIDING HOOD', videoUrl: '/videos/8-10/littleredridinghood.mp4' },
    ]
  };

  const [ageGroup, setAgeGroup] = useState('3-5');
  const [stories, setStories] = useState(storiesData['3-5']);

  const handleAge = (group) => {
    setAgeGroup(group);
    setStories(storiesData[group]);
  }

  return (
    <div className="main-layout">
      <div id="topic">
        <h1>ANIMATIVE STORY BOOKS</h1>
      </div>
      <div className="age-buttons">
        <button onClick={() => handleAge('3-5')}>Age 3-5</button>
        <button onClick={() => handleAge('6-7')}>Age 6-7</button>
        <button onClick={() => handleAge('8-10')}>Age 8-10</button>
      </div>
      <br />
      <div className="content">
        <div className="container-row">
          {stories.map(story => (
            <div key={story.id} id="container">
              <video width="640" height="360" controls>
                <source src={story.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="name">{story.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animations;
