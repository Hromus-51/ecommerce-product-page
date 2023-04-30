import styled from "styled-components";

export const CounterEl = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 5px;

    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    font-weight: var(--fw-bold);

    padding: 18px 16px;
    background: var(--count-bg);
    border-radius: 10px;

    user-select: none;

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media(min-width: 426px) {
        flex: 0.345 0 157px;

        &:not(:last-child) {
            margin-bottom: 0px;
        }
    }
`;

export const Сontrol = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;

    fill: var(--accent);

    @media(min-width: 426px) {
        cursor: pointer;
        transition: fill 0.15s ease;

        &:hover {
            fill: var(--accent-hover);
        }
    }
`;