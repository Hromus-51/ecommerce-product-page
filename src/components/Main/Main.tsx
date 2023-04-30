import Showcase from '../Showcase/Showcase';
import Product from '../Product/Product';
//==========================================
import { MainEl, Wrapper } from './styled-components';
import { MainContainer } from '../../styles/components';
//==========================================
import { product } from '../../assets/shoesObject';

const Main = () => {
    return (
        <MainEl>
            <MainContainer>
                <Wrapper>
                    <Showcase product={product} />
                    <Product product={product} />
                </Wrapper>
            </MainContainer>
        </MainEl>
    );
}

export default Main;