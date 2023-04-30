import styled from "styled-components";

export const ShowcaseEl = styled.div`
    flex: 1 0 445px;
`;

export const ControlWrapper = styled.div`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 24px;
    }

    @media(min-width: 426px) {
        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`;

export const Controls = styled.div`
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    border-radius: 50%;
    background: var(--light);

    @media(min-width: 426px) {
        display: none;
    }
`;

export const Previous = styled(Controls)`
    left: 16px;
`;

export const Next = styled(Controls)`
    right: 16px;
`;

export const MainShowcase = styled.div`
    max-width: 425px;
    height: 300px;
    background: var(--accent); 
    
    overflow: hidden;
    user-select: none;

    @media(min-width: 426px) {
        max-width: 445px;
        height: 445px;

        border-radius: 15px;
        cursor: pointer;
    }
`;

export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const Miniature = styled.ul`
    display: none;

    @media(min-width: 426px) {
        max-width: 445px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;

        user-select: none;
    }
`;

export const MiniatureItems = styled.li<{
    outlineColor: string,
    beforeOpacity: string,
    afterDisplay: string
}>`
    width: 88px;
    height: 88px;
    background: var(--accent); 
    border-radius: 10px;

    outline: 2px solid var(${props => props.outlineColor});
    transition: outline 0.15s ease 0s ;

    position: relative;
    overflow: hidden;
    cursor: pointer;

    &::after {
        content: '';
        width: 100%;
        height: 100%;

        display: ${props => props.afterDisplay};
        position: absolute;
        top: 0;
        left: 0;

        opacity: 0;
        transition: opacity 0.15 ease 0s;

        background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
    
        position: absolute;
        top: 0;
        left: 0;

        opacity: ${props => props.beforeOpacity};
        transition: opacity 0.15 ease 0s;
    
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75));
    }

    &:hover::after {
        opacity: 1;
    }
`;



