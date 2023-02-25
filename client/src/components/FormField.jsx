import React from 'react'

const FormField = ({
  labelName,
  type,
  name,
  placeholder, 
  value,
  handleChange,
}) => {
  return (
    <div>
      <div>
        <label 
          htmlFor={name}
        >
          {labelName}
        </label>
      </div>

      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default FormField