import { DefautTemplate } from "../../Componentes/DefautTemplate";
import { TechList } from "../../Componentes/TechList";



export const Dashboard = () => {
  return (
  
    <DefautTemplate>
      <main  >
        <div className="containerUser smU">
          <TechList/>
        </div>
      </main>
    
    </DefautTemplate>
  );
};