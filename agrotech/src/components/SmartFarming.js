import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './CSS/sf.css';
import Footer from './Footer';

function SmartFarming() {
  const [category, setCategory] = useState('all');
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, [category]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuf2ygBxpaDlvTBg1ckDjiWg6Ms7nnhMA&q=smart%20farming%20${category}&part=snippet&maxResults=10&type=video`
      );
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const options = [
    { value: 'all', label: 'All Types' },
    { value: 'tutorial', label: 'Tutorial and How-to Videos' },
    { value: 'crop', label: 'Crop Specific' },
    { value: 'livestock', label: 'Livestock Management' },
    { value: 'technology', label: 'Technology and Innovation' },
    { value: 'market', label: 'Market & Business Development' }
  ];

  const handleVideoPlay = (videoId) => {
    const newVideo = document.getElementById(videoId);
    if (currentVideo && currentVideo !== newVideo) {
      // Pause the currently playing video
      currentVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    // Set the new video as the current one
    setCurrentVideo(newVideo);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#274135' : '#fdf0d5',
      color: state.isSelected ? '#fdf0d5' : '#274135',
      ':hover': {
        backgroundColor: '#5e9b50',
        color: '#fdf0d5'
      }
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#274135',
      borderColor: '#274135',
      ':hover': {
        borderColor: '#5e9b50'
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fdf0d5'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#fdf0d5'
    })
  };

  return (
    <div>
      <section>
        <h1 className='fs-10 card-title fw-bold mb-5'>Smart Farming</h1>
        <div className="categories">
          <Select
            value={options.find(option => option.value === category)}
            onChange={handleCategoryChange}
            options={options}
            styles={customStyles} 
          />
        </div>
        <div className="videos">
          {videos && videos.map((video, index) => (
            <div key={index} className="video-container">
              <iframe
                id={`video-${index}`}
                title={video.snippet.title}
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.id.videoId}?rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={() => handleVideoPlay(`video-${index}`)} 
              ></iframe>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SmartFarming;
