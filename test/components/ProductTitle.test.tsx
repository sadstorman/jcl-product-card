import React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { producto1 } from './data/products';


describe('ProductTitle', () => {

    test('debe de mostrar el comp correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='custom product' className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('debe de mostrar el componente con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={producto1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

});
