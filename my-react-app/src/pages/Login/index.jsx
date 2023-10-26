import { FormLogin } from "../../Componentes/FormLogin";
import Logo from "../../assets/Logo.svg";


export const Login = () => {
    return (
        <main>
              <img src={Logo} alt="Logo Kenzie hub" />
            <FormLogin/>
        </main>
    );
}