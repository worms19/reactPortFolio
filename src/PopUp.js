
import React from 'react'



const PopUp = ({id, ProjectName, imageName, contenuTexte}) => (
 
<div className="portfolio-modal mfp-hide" id={"portfolio-modal-" + id} >
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i className="fa fa-3x fa-times"></i>
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">{ProjectName}</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src={"img/portfolio/" + imageName + ".png"} alt="" />
                  <p className="mb-5">{contenuTexte}</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i className="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
)

export default PopUp


