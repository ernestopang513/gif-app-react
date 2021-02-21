import {shallow} from 'enzyme' ;
import React from 'react';
import GifGridItem from '../../components/GifGridItem';



describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://soyLaComadreja.com'
    
    test('should mostrar el componente correctamente', () => {
        
        const wrapper = shallow(
            <GifGridItem 
                category = 'Goku' 
                title = {title}
                url = {url}
            />)

        expect(wrapper).toMatchSnapshot()
    })
    
})
