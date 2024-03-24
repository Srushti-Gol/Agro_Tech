import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import img1 from '../assets/11.jpg';
import img2 from '../assets/10.jpg';
import img3 from '../assets/4.jpg';
import './CSS/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Footer';
import Home2 from './Home2';

const items = [
  {
    img: img1,
    title: 'Precision Agriculture at Your Fingertips',
    description: 'Empowering farmers with cutting-edge technology for smarter, more efficient farming practices.',
  },
  {
    img: img2,
    title: 'Maximize Your Harvest Potential',
    description: 'From crop recommendations to yield predictions, AgroTech ensures you get the most from your fields.',
  },
  {
    img: img3,
    title: 'Optimized Farming, Sustainable Results',
    description: 'Discover the future of agriculture with features like soil analysis, plant disease detection, and more.',
  },
];

const reviews = [
  {
    img: 'https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/regan-blee-80a9a6a9',
    author: 'John Doe',
    occupation: 'Farmer',
    quote: 'AgroTech has been a game-changer for my farm. The Crop Recommendation feature helped me choose the right crops, and the Crop Yield Prediction was spot-on. It has truly revolutionized the way I plan and manage my harvests.',
  },
  {
    img: 'https://elenasquareeyes.files.wordpress.com/2023/03/sarah-jane-smith.jpg',
    author: 'Jane Smith',
    occupation: 'Agricultural Scientist',
    quote: 'As an agricultural scientist, I appreciate the scientific precision AgroTech brings to farming. The Soil Analysis feature provides invaluable insights into soil health, and the AI-driven Agribot Chat is a fantastic resource for quick and accurate information.',
  },
  {
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/305537_v9_bb.jpg',
    author: 'Michael Johnson',
    occupation: 'Farming Enthusiast',
    quote: 'I\'m impressed with AgroTech\'s commitment to sustainable agriculture. The Fertilizer Recommendation feature has helped me optimize fertilizer usage, reducing waste and maximizing yield. This platform is a must-have for anyone serious about modern farming.',
  },
];

function Home() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        swipe={true}
        indicators={false}
        cycleNavigation={true}
        animation="slide"
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
      >
        {items.map((item, index) => (
          <Paper key={index}>
            <div style={{ position: 'relative' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '550px' }} />
              <div className='item-container'>
                <h2 className='item-title'>{item.title}</h2>
                <p className='item-discreption'>{item.description}</p>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
      <Home2/>

      <div className='reviews-container'>
        <h2 className='text-center'>Expert Says..</h2>
        <Carousel
          autoPlay={true}
          swipe={true}
          indicators={false}
          cycleNavigation={true}
          animation="slide"
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={false}
        >
          {reviews.map((review, index) => (
            <Paper key={index}  style={{ backgroundColor: 'transparent' }} className='review-paper'>
              <div className='review-content'>
                <img src={review.img} alt={review.author} className='review-img' />
                <div className='review-info'>
                  <h3 className='review-title'>{review.author}</h3>
                  <h6 className='review-subtitle'>{review.occupation}</h6>
                  <p className='review-description'>{review.quote}</p>
                </div>
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>

      <Footer />

    </div>
  );
}

export default Home;
