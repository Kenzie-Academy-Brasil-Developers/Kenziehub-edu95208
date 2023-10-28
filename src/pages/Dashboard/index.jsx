import { DefautTemplate } from "../../Componentes/DefautTemplate"


export const Dashboard = ({ user, userLogout }) => {
  return (
    <DefautTemplate user={user} userLogout={userLogout}>
      <main>
        <div>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <h4>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h4>
        </div>
      </main>
    </DefautTemplate>
  );
};