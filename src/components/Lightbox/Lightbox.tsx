import { useState } from 'react';
//==========================================
import {
    LightboxEl, Wrapper, CloseButton,
    ControlWrapper, Previous, Next,
    MainShowcase,
} from './styled-components';
import { Miniature, MiniatureItems } from '../Showcase/styled-components';
//==========================================
import { ReactComponent as IconClose } from '../../assets/images/icon-close.svg';
import { ProductInterface } from '../../assets/shoesObject';
import { ReactComponent as IconPrevious } from '../../assets/images/icon-previous.svg';
import { ReactComponent as IconNext } from '../../assets/images/icon-next.svg';

interface LightboxProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<boolean>,
    images: ProductInterface['images'],
    selected: number
}

const LightboxAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
}

const Lightbox: React.FC<LightboxProps> = ({ isVisible, setIsVisible, images, selected: index }) => {
    const [selected, setSelected] = useState(index);

    const previousImage = () => {
        selected === 0 ?
            setSelected(images.length - 1) :
            setSelected(selected - 1)
    }

    const nextImage = () => {
        selected === images.length - 1 ?
            setSelected(0) :
            setSelected(selected + 1)
    }

    return (
        <LightboxEl {...LightboxAnimation}>
            <Wrapper>

                <CloseButton>
                    <IconClose
                        onClick={() => { setIsVisible(!isVisible) }}
                    />
                </CloseButton>

                <ControlWrapper>
                    <Previous onClick={() => { previousImage() }}>
                        <IconPrevious />
                    </Previous>
                    <Next onClick={() => { nextImage() }}>
                        <IconNext />
                    </Next>
                    <MainShowcase>
                        <img src={images[selected].full} alt="shoes" />
                    </MainShowcase>
                </ControlWrapper>

                <Miniature>
                    {images.map((obj, index) => (
                        <MiniatureItems
                            key={index}
                            outlineColor={selected === index ? '--accent' : '--none'}
                            beforeOpacity={selected === index ? '1' : '0'}
                            afterDisplay={selected === index ? 'none' : 'block'}
                            onClick={() => { setSelected(index) }}
                        >
                            <img src={obj.mini} alt="shoes" />
                        </MiniatureItems>
                    ))}
                </Miniature>

            </Wrapper>
        </LightboxEl>
    );
}

export default Lightbox;