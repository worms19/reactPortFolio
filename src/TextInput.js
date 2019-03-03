import React from 'react'



const TextInput = ({label, id, type, placeHolder, dataValidationMessage, row}) => (
 
   <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>{label}</label>
            <input className="form-control" id={id} type={type} placeholder={placeHolder} row ={row} required="required" data-validation-required-message={dataValidationMessage} />
            <p className="help-block text-danger"></p>
        </div>
    </div>

)

export default TextInput

