import Logo from '../IMG/Ghandi.png';
import '../CSS/Header.css';

export default function Header()
{
    return(
        <div className="Header">
            <img src={Logo} className="Logo" alt="Ghandi Logo" />
        </div>
    )
}