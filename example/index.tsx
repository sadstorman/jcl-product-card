import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const producto = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}


const App = () => {
  return (
    <>
      <ProductCard
        product={producto}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />

              {/* <button onClick={reset}> reset </button>
              <button onClick={() => increaseBy(-2)}> -2 </button>
              {(!isMaxCountReached) ?( <button onClick={() => increaseBy(+2)}> +2 </button> )
              : ''
              }
              <span>{count} - {maxCount}</span> */}
            </>
          )
        }

      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
