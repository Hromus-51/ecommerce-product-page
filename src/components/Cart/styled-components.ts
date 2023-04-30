import { motion } from "framer-motion";
import styled from "styled-components";

export const CartEl = styled.div`
    cursor: pointer;
    position: relative;
`;

export const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    
    fill: var(--medium);
    transition: fill 0.15s ease 0s;

    @media(min-width:426px) {
        &:hover {
            fill: var(--dark);
        }
    }
`;

export const Counter = styled(motion.div)`
    font-size: var(--fs-h5);
    font-weight: var(--fw-bold);
    text-align: center;
    color: var(--light);

    padding: 0px 6.5px;
    background: var(--accent);
    border-radius: 6.5px;

    position: absolute;
    top: -6px;
    right: -7px;
`;

export const CartPopup = styled(motion.div)`
    min-width: 360px;
    border-radius: 10px;
    background: var(--light);
    box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);

    position: absolute;
    z-index: 2;
    left: -275px;
    top: 55px;
    overflow: hidden;

    @media(min-width:426px) {
        left: 50%;
        top: 50px;

        cursor: default;
        transform: translateX(-50%);
    }
`;

export const Title = styled.div`
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    font-weight: var(--fw-bold);

    padding: 24px;
    border-bottom: 1px solid var(--line);
`;

export const EmptyCart = styled(motion.div)`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);
    font-weight: var(--fw-bold);
    color: var(--medium);
    text-align: center;

    padding: 77px 24px 85px;
`;

export const FullCart = styled(motion.div)`
    padding: 24px 24px 32px;
`;

export const CartList = styled.ul`
    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const CheckoutButton = styled.button`
    width: 100%;

    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    font-weight: var(--fw-bold);

    color: var(--light);

    background: var(--accent);
    border-radius: 10px;
    padding: 18px 16px;

    @media(min-width:426px) {
        &:hover {
            background: var(--accent-hover);
        }
    }
`;



