import React, {useState} from 'react'
import PropTypes from 'prop-types'
//commit

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value)
    }

    
    const handleSummit = (e) => {
        e.preventDefault()

        if(inputValue.trim().length > 2){
            setCategory(cats => [ inputValue, ...cats]);
            setInputValue('');
        }

       
    }
    return (
       <form   onSubmit = {handleSummit} >
            <input
                type='text'
                value = {inputValue}
                onChange = {handleImputChange}
                
            />
         </form>
        
        
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}


