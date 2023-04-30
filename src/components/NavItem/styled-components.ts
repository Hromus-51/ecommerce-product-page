import styled from "styled-components";

export const NavLi = styled.li`
    font-size: var(--fs-menu);
    line-height: var(--lh-menu);
    font-weight: var(--fw-bold);

    color: var(--dark);

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    @media(min-width: 426px) {
        font-size: var(--fs-h3);
        line-height: var(--lh-h3);
        font-weight: var(--fw-regular);
        color: var(--medium);

        cursor: pointer;
        position: relative;
        transition: color 0.15s ease 0s;

        &:hover {
            color: var(--dark);
        }

        &:hover::after {
            opacity: 1;
        }

        &::after {
            content: '';
            width: 100%;
            height: 4px;

            position: absolute;
            left: 0px;
            bottom: -46px;

            opacity: 0;
            transition: opacity 0.15s ease 0s;

            background: var(--accent);
        }

        &:not(:last-child) {
            margin-bottom: 0px;
        }
    }
`;