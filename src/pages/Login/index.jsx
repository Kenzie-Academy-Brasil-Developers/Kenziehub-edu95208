import { FormLogin } from "../../Componentes/FormLogin";
import Logo from "../../assets/Logo.svg";
import pageStyles from "../../styles/modules/pagesBox.module.scss";


export const Login = () => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <img src={Logo} alt="Logo Kenzie hub" />
                <div className="">
                    <FormLogin />
                </div>
            </div>
        </main>
    );
}