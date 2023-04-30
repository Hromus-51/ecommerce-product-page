import { useDispatch, useSelector } from 'react-redux';
import numeral from 'numeral'
//==========================================
import {
    CartItemsEl, Image, Data,
    Name, PriceBlock, Price,
    TotalPrice, Delete
} from './styled-components';
//==========================================
import { ReactComponent as IconDelete } from '../../assets/images/icon-delete.svg';
import { deleteItemCart, selectCart } from '../../redux/cartSlice/slice';

const CartItems = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    return (
        <>
            {cart.map((obj, index) => (
                <CartItemsEl key={index}>
                    <Image>
                        <img src={obj.image} alt="shoes" />
                    </Image>

                    <Data>
                        <Name>Fall Limited Edition Sneakers</Name>
                        <PriceBlock>
                            <Price>
                                {numeral(obj.price).format('$0,0.00')} x {obj.counter}
                            </Price>
                            <TotalPrice>
                                {numeral(obj.price * obj.counter).format('$0,0.00')}
                            </TotalPrice>
                        </PriceBlock>
                    </Data>

                    <Delete
                        onClick={() => { dispatch(deleteItemCart(obj.id)) }}
                    >
                        <IconDelete />
                    </Delete>
                </CartItemsEl>
            ))}
        </>
    );
}

export default CartItems;