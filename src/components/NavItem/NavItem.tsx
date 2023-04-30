import { NavLi } from './styled-components';
//==========================================
const navigation = ['Collections', 'Men', 'Women', 'About', 'Contact']

const NavItem = () => {
    return (
        <>
            {navigation.map((item) => (
                <NavLi key={item}>
                    {item}
                </NavLi>
            ))}
        </>
    );
}

export default NavItem;