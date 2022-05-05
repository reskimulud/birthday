import '../public/css/style.css';
import CountDown from './components/CountDown';
import Confetti from './components/Confetti';

const root = document.getElementById('root');
root.append(Confetti(), CountDown());
