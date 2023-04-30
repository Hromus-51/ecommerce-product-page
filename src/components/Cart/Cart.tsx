import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
    CartEl, Counter,
    CartPopup, Title, EmptyCart,
    FullCart, CartList, CheckoutButton, CartWrapper
} from './styled-components';
//==========================================
import CartItems from '../CartItems/CartItems';
//==========================================
import { ReactComponent as IconCart } from '../../assets/images/icon-cart.svg';
import { selectQuantity } from '../../redux/cartSlice/slice';

const popupAnimation = {
    initial: { height: 0 },
    animate: { height: 'auto' },
    exit: { height: 0 },
    transition: { duration: 0.2 }
}

const counterAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
}

const Cart = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);
    const quantity = useSelector(selectQuantity);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (cartRef.current && !e.composedPath().includes(cartRef.current)) {
                setIsVisible(false);
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
        <CartEl ref={cartRef} >

            <CartWrapper onClick={() => { setIsVisible(!isVisible) }}>
                <IconCart />

                <AnimatePresence>
                    {quantity > 0 &&
                        <Counter {...counterAnimation}>
                            {quantity}
                        </Counter>
                    }
                </AnimatePresence>
            </CartWrapper>


            <AnimatePresence>
                {isVisible &&
                    <CartPopup {...popupAnimation}>
                        <Title>Cart</Title>

                        {quantity > 0 ?
                            <FullCart>
                                <CartList>
                                    <CartItems />
                                </CartList>
                                <CheckoutButton>
                                    Checkout
                                </CheckoutButton>
                            </FullCart> :
                            <EmptyCart>
                                Your cart is empty.
                            </EmptyCart>
                        }
                    </CartPopup>
                }
            </AnimatePresence>

        </CartEl>
    );
}

export default Cart;