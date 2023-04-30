import styled from "styled-components";

export const HeaderEl = styled.header`
    height: 68px;

    @media(min-width: 426px) {
        height: 112px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 19px 0px 25px;

    @media(min-width: 426px) {
        border-bottom: 1px solid var(--line);
        padding: 28px 0px 34px;
    }
`;

export const NavSide = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;

    @media(min-width: 426px) {
        column-gap: 56px;
    }
`;

export const MenuIcon = styled.img`
    display: block;

    @media(min-width: 426px) {
        display: none;
    }
`;

export const Nav = styled.ul`
    display: none;
    align-items: center;
    column-gap: 32px;

    @media(min-width: 426px) {
        display: flex;
    }
`;

export const UserSide = styled.div`
    display: flex;
    align-items: center;
    column-gap: 22px;

    @media(min-width: 426px) {
        column-gap: 46px;
    }
`;
export const User = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;

    overflow: hidden;

    outline: 2px solid var(--none);

    @media(min-width:426px) {
        width: 50px;
        height: 50px;

        cursor: pointer;
        transition: outline 0.15s ease 0s ;

        &:hover {
            outline: 2px solid var(--accent);
        }
    }
`;

export const Avatar = styled.img`
    width: 100%;
`;

