import styled from "styled-components";

export const ProductEl = styled.div`
    padding: 0 24px 88px;

    @media(min-width: 426px) {
        flex: 1 0 445px;
        padding: 0;
    }
`;

export const ProductDate = styled.div`
    &:not(:last-child) {
        margin-bottom: 24px;
    }

    @media(min-width: 426px) {
        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`;

export const Company = styled.h4`
    font-size: var(--fs-h4-m);
    line-height: var(--lh-h4-m);
    letter-spacing: var(--ls-h4);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    color: var(--accent);

    &:not(:last-child) {
        margin-bottom: 19px;
    }

    @media(min-width: 426px) {
        font-size: var(--fs-h4);
        line-height: var(--lh-h4);

        &:not(:last-child) {
            margin-bottom: 27px;
        }
    }
`;

export const Name = styled.h1`
    font-size: var(--fs-h1-m);
    line-height: var(--lh-h1-m);
    font-weight: var(--fw-bold);

    &:not(:last-child) {
        margin-bottom: 15px;
    }

    @media(min-width: 426px) {
        font-size: var(--fs-h1);
        line-height: var(--lh-h1);

        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`;

export const Description = styled.p`
    font-size: var(--fs-bm-m);
    line-height: var(--lh-bm-m);
    color: var(--medium);

    &:not(:last-child) {
        margin-bottom: 24px;
    }

    @media(min-width: 426px) {
        font-size: var(--fs-bm);
        line-height: var(--lh-bm);
    }
`;

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;

    @media(min-width: 426px) {
        display: block;
    }
`;

export const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;

    &:not(:last-child) {
        margin-bottom: 0px;
    }

    @media(min-width: 426px) {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
`;

export const FinalPrice = styled.h2`
    font-size: var(--fs-h2);
    line-height: var(--lh-h2);
    font-weight: var(--fw-bold);
`;

export const Discount = styled.div`
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    font-weight: var(--fw-bold);
    color: var(--accent);

    padding: 4px 10px 4px;
    border-radius: 6px;
    background: #FFEEE2;
`;

export const Price = styled.div`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);
    font-weight: var(--fw-bold);
    color: var(--medim-l);
    text-decoration: line-through;
`;

export const CartElements = styled.div`
    @media(min-width: 426px) {
        display: flex;
        align-items: center;
        column-gap: 16px;
    }
`;

export const AddButton = styled.button`
    width: 100%;
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    font-weight: var(--fw-bold);

    color: var(--light);
    fill: var(--light);

    background: var(--accent);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;

    padding: 18px 16px;
    box-shadow: 0px 20px 50px -20px #FF7E1B; 

    @media(min-width:426px) {
        flex: 0.597 0 272px;
        box-shadow: none; 

        &:hover {
            background: var(--accent-hover);
        }
    }
`;