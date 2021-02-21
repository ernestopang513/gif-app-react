
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Naruto', 'Dragon Ball', 'Kanji'];
     const [categories,setCategory] = useState(['space'])

    // const handleAdd = () => {
    //     setstate([...categories, 'Carros'])
    // }

    return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCategory setCategory={setCategory}/>
          <hr /> 
          
          <ul>
              {
                  categories.map(category =>(
                        <GifGrid 
                            key = {category}    
                            category={category}
                        />
                  ))
              }
          </ul>
        </>
        
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
