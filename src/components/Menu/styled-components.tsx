import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuEl = styled(motion.div)`
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    background: var(--lightboxBg);

    @media(min-width:426px) {
        display: none;
    }
`;

export const NavWrapper = styled(motion.div)`
    height: 100%;
    background: var(--light);

    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    overflow: hidden;

    @media(min-width:426px) {
        display: none;
    }
`;

export const Navigation = styled.ul`
    padding: 25px;
`;

export const Close = styled.div`
    &:not(:last-child) {
        margin-bottom: 53px;
    }
`;

