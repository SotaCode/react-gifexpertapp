import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();//Para que no se vuelva a lanzar cada vez que hago un cambio
        if(inputValue.trim().length>2){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="animate__animated animate__rotateInDownLeft">
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}