import { FormCadst } from "../../Componentes/FormCadst";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

export const Register = () => {
    return (
        <main>
           <div>
            <img src={Logo} alt="Logo Kenzie hub" />
            <Link to="/">Voltar</Link>
            </div>
           
            <FormCadst/>
        </main>
    );
}