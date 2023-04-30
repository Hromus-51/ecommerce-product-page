import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
//==========================================
import {
    HeaderEl, Wrapper, NavSide, MenuIcon,
    Nav, UserSide, User, Avatar,
} from './styled-components';
import { Container } from "../../styles/components";
//==========================================
import NavItem from '../NavItem/NavItem';
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
//==========================================
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/image-avatar.png';
import iconMenu from '../../assets/images/icon-menu.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <NavSide>
                        <MenuIcon
                            onClick={() => { setIsOpen(!isOpen) }}
                            src={iconMenu}
                            alt="menu"
                        />
                        <img src={logo} alt="logo" />
                        <Nav>
                            <NavItem />
                        </Nav>
                    </NavSide>
                    <UserSide>
                        <Cart />
                        <User>
                            <Avatar src={avatar} alt="avatar" />
                        </User>
                    </UserSide>
                </Wrapper>

                <Menu
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />

                {/* <AnimatePresence>
                    {isOpen &&
                        <Menu
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />}
                </AnimatePresence> */}
            </Container>
        </HeaderEl>
    );
}

export default Header;