import React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { producto2 } from './data/products';


describe('ProductTitle', () => {

    test('debe de mostrar el comp correctamente con URL de imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img='imgURL' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('debe de mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={producto2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

});
