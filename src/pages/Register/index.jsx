import { FormCadst } from "../../Componentes/FormCadst";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import pageStyles from "../../styles/modules/pagesBox.module.scss";

export const Register = () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <img src={Logo} alt="Logo Kenzie hub" />
                <Link to="/">Voltar</Link>
                <div>
                    <FormCadst />
                </div>
            </div>
        </main>
    );
}