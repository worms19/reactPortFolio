import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import Navigation from './Navigation'
import Header from './Header'
import About from './About'
import PortFolio from './PortFolio';
import TextInput from './TextInput';
import PopUp from './PopUp';
import Lettres from './Lettres';
import Cv from './Cv';
import Link from  './Link'

class App extends Component {
  render() {
    return (
      <div className="reactStrap">

 <Header/>
 
 <Navigation/>

        <section className="portfolio" id="portfolio">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <hr className="star-dark mb-5" />
            <div className="row">
           

             <PortFolio
             image = 'img/portfolio/cake.png'
             id ="3" />

             <PortFolio image = 'img/portfolio/game.png'
             id = "2"/>
             <PortFolio image = 'img/portfolio/safe.png' />
             <PortFolio image = 'img/portfolio/cabin.png' />

            </div>
          </div>
        </section>
      
        <About/>


        <section id="contact">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <div className="col-lg-8 mx-auto">
              
                <form name="sentMessage" id="contactForm" noValidate="noValidate">

                  <TextInput label = "Name"
                    id = "name"
                    type = "text"
                    placeHolder = "Name"
                    dataValidationMessage = "Please enter your name." />

                  <TextInput 
                    label = "Email Address"
                    id = "email"
                    type = "email"
                    placeHolder = "Email Address"
                    dataValidationMessage = "Please enter your name." />

                  <TextInput 
                    label = "Phone Number"
                    id = "phone"
                    type = "tel"
                    placeHolder = "Phone Number"
                    dataValidationMessage = "Please enter your phone number." />

                  <TextInput 
                    label = "Message"
                    id = "message"
                    type = "tel"
                    placeHolder = "Message"
                    row = "5"
                    dataValidationMessage = "Please enter a message" />

                 
                  <br />
                  <div id="success"></div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </section>
      
     <Footer/>
      
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; Your Website 2019</small>
          </div>
        </div>
      
        <div className="scroll-to-top d-lg-none position-fixed ">
          <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>
      
       
      < PopUp 
        id = "1"
        ProjectName = "Project Name"
        imageName = "circus"
        contenuTexte = "" />

      < PopUp 
        id = "2"
        ProjectName = "Project Name"
        imageName = "game"
        contenuTexte = "dd" />

       < Cv 
        id = "3"
        ProjectName = "Project Name"
        imageName = "cv"
        contenuTexte = "" />



      </div>
    );
  }
}

export default App;
