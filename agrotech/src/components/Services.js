import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/services.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    img: 'https://www.latitudo40.com/wp-content/uploads/2021/07/agritech1.jpg',
    title: 'Crop Recommendation',
    to:'/crop-recommendation',
    description: 'Transform your agriculture practices with our cutting-edge ML-based Crop Recommendation feature. By providing essential soil parameters such as nitrogen, phosphorus, potassium levels, pH, and local rainfall data, you unlock personalized insights for optimal crop selection. Harnessing the power of machine learning, our platform analyzes this information to suggest the most suitable crops for your specific soil conditions. This data-driven approach empowers farmers with intelligent decision-making, enhancing yield potential and resource utilization. Say goodbye to guesswork and embrace a sustainable, efficient future in agriculture with our advanced Crop Recommendation feature.',
  },
  {
    img: 'https://images.pexels.com/photos/6874481/pexels-photo-6874481.jpeg',
    title: 'Fertilizer Recommendation',
    to:'/fertilizer-recommendation',
    description: 'The Fertilizer Recommendation service, powered by advanced machine learning algorithms, revolutionizes agricultural practices by analyzing crucial factors such as Temperature, Humidity, Moisture, Soil Type, Crop Type, Nitrogen, Potassium, and Phosphorous. This intelligent system utilizes this data to provide personalized and precise recommendations for the optimal fertilizer to enhance crop growth. By considering environmental conditions and specific crop requirements, our service ensures that farmers make informed decisions, optimizing fertilization strategies and promoting sustainable and efficient agriculture.',
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:700/1*TKUvZfHReYQvuh83B1CWPg.jpeg',
    title: 'Plant Disease Detection',
    to:'/plant-disease-detection',
    description: 'Our Plant Disease Detection service is a breakthrough in agricultural technology, utilizing machine learning to analyze photos of plant leaves and accurately predict the presence of diseases. By simply providing an image, farmers receive instant insights into the specific disease affecting their plants. Not only does the service identify the disease, but it also offers tailored solutions to overcome and manage the condition effectively. This proactive approach empowers farmers to take timely action, minimizing crop losses and promoting a healthier, more resilient agriculture ecosystem.',
  },
  {
    img: 'https://m.media-amazon.com/images/I/91+4P+1gDRL._SX569_.jpg',
    title: 'Soil Analysis',
    to:'/soil-analysis',
    description: 'Our Soil Analysis service revolutionizes farming practices by employing advanced technology to analyze soil photos. By capturing an image of the soil, our system accurately identifies the soil type and provides valuable insights into the best crops suited for cultivation in that specific soil. This innovative approach simplifies the decision-making process for farmers, enabling them to make informed choices about crop selection based on the unique characteristics of their soil. With precise soil analysis, farmers can optimize their agricultural practices, enhance crop yields, and promote sustainable farming for long-term success.',
  },
  {
    img: 'https://www.datanami.com/wp-content/uploads/2020/02/shutterstock_cornfield.jpg',
    title: 'Crop Yield Prediction',
    to:'/crop-yield-prediction',
    description: 'Our Crop Yield Prediction service empowers farmers by predicting crop yields based on essential factors such as District_Name, Season, Crop, and Area. By inputting this key information, our advanced prediction model utilizes machine learning algorithms to forecast the potential crop yield. This invaluable tool enables farmers to plan and manage their harvests more effectively, making informed decisions about resource allocation and maximizing agricultural output. With accurate yield predictions, farmers can adopt proactive strategies to enhance productivity, optimize resource usage, and ultimately achieve greater success in their farming endeavors.',
  },
  {
    img: 'https://media.licdn.com/dms/image/D4D12AQGov1hvhw8tZQ/article-cover_image-shrink_720_1280/0/1687595406012?e=2147483647&v=beta&t=JNcVtT2MBERCj1CMV6HQJEOuoOyCSbNLweSrymqClSE',
    title: 'AgriBot',
    to:'/agribot',
    description: 'Introducing Agribot Chat your virtual farming assistant! Farmers can now chat with Agribot, a cutting-edge AI-powered companion ready to provide instant solutions to all farming queries. Whether it\'s crop management, pest control, or general agricultural advice, Agribot is here to assist. Farmers can engage in real-time conversations, gaining valuable insights and guidance to enhance their farming practices. With Agribot Chat, connecting with agricultural expertise has never been easier, revolutionizing the way farmers access information and ensuring a smarter and more productive farming experience.',
  },
  // Add more services as needed
];

function Services() {
  return (
    <>
      {services.map((service, index) => (
        <div className="container service" key={index}>
          <div className={`row ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
            <div className="col">
              <img
                src={service.img}
                alt={service.title}
                className="img-fluid rounded s_img"
              />
            </div>
            <div className="col">
              <div className="content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link to={service.to} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </>

  );
}

export default Services;
