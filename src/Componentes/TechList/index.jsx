import { Link } from "react-router-dom";
import { Techcontext } from "../../providers/TechContext";
import { useContext } from "react";
import { TechCard } from "./TechCard";


export const TechList = () => {
    const { TecList } = useContext(Techcontext);

    return (

        <div>
            <div>
                <h1>Tecnologias</h1>
                <Link to="/dashboard">+</Link>
            </div>
            <ul>
               {
                     TecList.map((tech) => {
                        <TechCard key={tech.id} tech={tech}/>
                     })
               }
            </ul>
        </div>
    )

}