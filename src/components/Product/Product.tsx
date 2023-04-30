import numeral from 'numeral';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//==========================================
import {
    ProductEl, ProductDate,
    Company, Name, Description, PriceWrapper,
    PriceBlock, FinalPrice, Discount,
    Price, CartElements, AddButton
} from './styled-components';
//==========================================
import Count from '../Counter/Counter';
//==========================================
import { ReactComponent as CartIcon } from '../../assets/images/icon-cart.svg';
import { addItemCart } from '../../redux/cartSlice/slice';
import { ProductInterface } from '../../assets/shoesObject';

interface ProductProps {
    product: ProductInterface
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const dispatch = useDispatch();
    const { id, company, name, description, price,
        discount, counter: productCounter, images } = product;
    const [counter, setCounter] = useState(productCounter);
    const finalPrice = price - (price / 100 * discount);

    const addProduct = () => {
        if (counter > 0) {
            const cartItem = {
                id: id,
                name: name,
                price: finalPrice,
                counter: counter,
                image: images[0].full
            }

            dispatch(addItemCart(cartItem))
            setCounter(0);
        }
    }

    return (
        <ProductEl>

            <ProductDate>
                <Company>{company}</Company>
                <Name>{name}</Name>

                <Description>
                    {description}
                </Description>

                <PriceWrapper>
                    <PriceBlock>
                        <FinalPrice>
                            {numeral(finalPrice).format('$0,0.00')}
                        </FinalPrice>
                        {discount ?
                            <Discount>
                                {discount}%
                            </Discount> : ''
                        }
                    </PriceBlock>

                    {discount ?
                        <Price>
                            {numeral(price).format('$0,0.00')}
                        </Price> : ''}
                </PriceWrapper>
            </ProductDate>

            <CartElements>
                <Count counter={counter} setCounter={setCounter} />
                <AddButton onClick={() => { addProduct() }}>
                    <CartIcon />
                    Add to cart
                </AddButton>
            </CartElements>

        </ProductEl>
    );
}

export default Product;