import styled from "styled-components";

export const CartItemsEl = styled.li`
    display: flex;
    align-items: center;
    column-gap: 16px;

    font-size: var( --fs-bm);
    line-height: var(--lh-bm);
    color: var(--medium);

    &:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const Image = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 4px;

    overflow: hidden;
`;

export const Data = styled.div`
`;

export const Name = styled.div`
`;

export const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    column-gap: 6px;
`;

export const Price = styled.div`
`;

export const TotalPrice = styled.div`
    font-weight: var(--fw-bold);
    color: var(--dark);
`;

export const Delete = styled.div`
    fill: var(--medim-l);
    transition: fill 0.15s ease 0s;

    @media(min-width:426px) {
        cursor: pointer;

        &: hover {
            fill: var(--dark);
        }
    }
`;