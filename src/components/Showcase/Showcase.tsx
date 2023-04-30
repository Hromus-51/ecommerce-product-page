import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
//==========================================
import {
    ShowcaseEl, ControlWrapper, Previous,
    Next, MainShowcase, MainImage,
    Miniature, MiniatureItems
} from './styled-components';
//==========================================
import Lightbox from '../Lightbox/Lightbox';
//==========================================
import { ProductInterface } from '../../assets/shoesObject';
import iconPrevious from '../../assets/images/icon-previous-m.svg';
import iconNext from '../../assets/images/icon-next-m.svg';

interface ShowcaseProps {
    product: ProductInterface
}

const Showcase: React.FC<ShowcaseProps> = ({ product }) => {
    const { images } = product;
    const [selected, setSelected] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 426 })

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

    const showLightbox = () => {
        isDesktop && setIsVisible(!isVisible)
    }

    return (
        <ShowcaseEl>

            <ControlWrapper>
                <Previous onClick={() => { previousImage() }}>
                    <img src={iconPrevious} alt="previous" />
                </Previous>

                <Next onClick={() => { nextImage() }}>
                    <img src={iconNext} alt="next" />
                </Next>

                <MainShowcase onClick={() => { showLightbox() }}>
                    <MainImage src={images[selected].full} alt="shoes" />
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

            <AnimatePresence>
                {isVisible &&
                    <Lightbox
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        images={images}
                        selected={selected}
                    />
                }
            </AnimatePresence>

        </ShowcaseEl>
    );
}

export default Showcase;