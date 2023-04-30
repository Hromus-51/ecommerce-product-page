import {
    CounterEl, Сontrol
} from './styled-components';
//==========================================
import { ReactComponent as IconMinus } from '../../assets/images/icon-minus.svg';
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg';

interface CountProps {
    counter: number;
    setCounter: React.Dispatch<number>;
}

const Counter: React.FC<CountProps> = ({ counter, setCounter }) => {
    return (
        <CounterEl>
            <Сontrol onClick={() => { counter && setCounter(--counter) }}>
                <IconMinus />
            </Сontrol>
            {counter}
            <Сontrol onClick={() => { setCounter(++counter) }}>
                <IconPlus />
            </Сontrol>
        </CounterEl>
    );
}

export default Counter;