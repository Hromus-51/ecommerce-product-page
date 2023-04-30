import { motion } from "framer-motion";
import styled from "styled-components";

export const LightboxEl = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;

    background: var(--lightboxBg);

    @media(max-width: 425px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    max-width: 550px;
`;

export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;

    fill: var(--light);

    cursor: pointer;
    transition: fill 0.15s ease 0s;

    &:hover {
        fill: var(--accent);
    }

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const ControlWrapper = styled.div`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 40px;
    }
`;

export const Controls = styled.div`
    width: 56px;
    height: 56px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;

    border-radius: 50%;
    background: var(--light);

    transform: translateY(-50%);
    cursor: pointer;

    stroke: var(--dark);
    transition: stroke 0.15s ease 0s;

    &:hover {
        stroke: var(--accent);
    }
`;

export const Previous = styled(Controls)`
    left: -28px;
`;

export const Next = styled(Controls)`
    right: -28px;
`;

export const MainShowcase = styled.div`
    width: 550px;
    height: 550px;

    overflow: hidden;
    user-select: none;
    border-radius: 15px;
    background: var(--accent);
`;

export const Miniature = styled.ul`
    max-width: 
    display: flex;
    justify-content: space-between;
`;