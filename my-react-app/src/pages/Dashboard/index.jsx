import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
export const Dashboard = () => {
    return (
        <main>
            <div>
            <img src={Logo} alt="Logo Kenzie hub" />
            <Link to="/">Sair</Link>
            </div>
            <h1>pagina usuario</h1>
        </main>
    );
};