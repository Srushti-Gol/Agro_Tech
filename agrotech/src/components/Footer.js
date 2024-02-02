import React from 'react';
import './CSS/footer.css';
function Footer() {
  return (
    <div>
       <footer className="site-footer">
        <div className="container">
          <div className="row w-100">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Agrotech.com <i>FARMER WANTS TO BE SMART </i>AgroTech is a pioneering initiative at the intersection of agriculture and technology. With a commitment to leveraging cutting-edge advancements in Artificial Intelligence and Machine Learning, we empower farmers with intelligent solutions for modern agriculture.
    Our platform seamlessly integrates features such as Crop Recommendation, Crop Yield Prediction, Fertilizer Optimization, Soil Analysis, Plant Disease Detection, and an AI-driven Agribot Chat. We strive to revolutionize traditional farming practices by providing farmers with accurate insights and recommendations, thereby enhancing efficiency, productivity, and sustainability in agriculture.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Services</h6>
              <ul className="footer-links">
                <li><a href="#Crop Recommendationr">Crop Recommendation</a></li>
                <li><a href="#Crop Yield Prediction">Crop Yield Prediction</a></li>
                <li><a href="#Fertilizer Recommendation">Fertilizer Recommendation</a></li>
                <li><a href="#Soil Analysis">Soil Analysis</a></li>
                <li><a href="#Plant Disease Detection">Plant Disease Detection</a></li>
                <li><a href="#Agribot">Agribot</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#quick-about">About Us</a></li>
                <li><a href="#quick-contact">Contact Us</a></li>
                <li><a href="#quick-contribute">Contribute</a></li>
                <li><a href="#quick-privacy">Privacy Policy</a></li>
                <li><a href="#quick-sitemap">Sitemap</a></li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row w-100">
            <div className="col-md-8">
              <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                <span> Agrotech</span>.
              </p>
            </div>

            <div className="col-md-4">
              <ul className="social-icons">
                <li><a className="twitter" href="#twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#dribbble"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#linkedin"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
