# JCL-PRODUCT-CARD

Paquete de pruebas de despliegue NPM

### Juan Cruz Lia

## EJEMPLO
```
import {ProductCard, ProductImage,  ProductTitle,  ProductButtons} from 'jcl-product-card'
```

```
<ProductCard
        product={producto}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ( {reset,increaseBy, count, isMaxCountReached, maxCount} ) => (
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>

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

```