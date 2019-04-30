
import React from 'react'



const Link = ({ lien,id}) => (

    <div className="portfolio-modal mfp-hide" id={"portfolio-modal-" + id} >
            <div className="container text-center">
                <div className="row">
                    <a href="{lien}" target="_blank">{lien}</a>
                </div>
            </div>
    </div>
)

export default Link
