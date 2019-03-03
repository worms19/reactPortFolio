
import React from 'react'





const Lettres = ({ lettre, feedback, onClick }) => (
    <div className={`lettre ${feedback}`} onClick={() => onClick(lettre)}>
      <span className="symbol">
       
      </span>
    </div>
  )



export default Lettres