import { AnimatePresence } from 'framer-motion';
//==========================================
import {
    MenuEl, NavWrapper, Navigation, Close
} from './styled-components';
//==========================================
import NavItem from '../NavItem/NavItem';
//==========================================
import { ReactComponent as CloseIcon } from '../../assets/images/icon-close.svg';

const menuAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
}

const navAnimation = {
    initial: { width: 0 },
    animate: { width: '66.67%' },
    exit: { width: 0 },
    transition: { duration: 0.2 }
}

interface MenuProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<boolean>
}

const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <AnimatePresence>
                {isOpen &&
                    <MenuEl {...menuAnimation} />
                }
            </AnimatePresence>

            <AnimatePresence>
                {isOpen &&
                    <NavWrapper {...navAnimation}>
                        <Navigation>
                            <Close>
                                <CloseIcon
                                    onClick={() => { setIsOpen(!isOpen) }}
                                    fill={'var(--medium)'}
                                />
                            </Close>
                            <NavItem />
                        </Navigation>
                    </NavWrapper>
                }
            </AnimatePresence>
        </>
    );
}

export default Menu;


