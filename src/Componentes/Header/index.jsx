
import Logo from "../../assets/Logo.svg";
export const Header = ({ user, userLogout }) => {
    return (
        <header>
            <div>

                <div>
                    <img src={Logo} alt="Logo Kenzie hub" />
                    <button onClick={() => userLogout()}>Sair</button>
                </div>
                <div>
                    <p>Olá {user?.name}</p>
                    <p>{user?.course_module}</p>
                </div>

            </div>

        </header>
    );
};