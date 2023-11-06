import { Link } from "react-router-dom";


export const TechCard = ({ tech }) => {
    return (
        <li>
            <div>
                <span></span>
                <p>{tech.techs.title}</p>
                <p>{tech.techs.status}</p>
            </div>
            <div>
                <button title="Ediatr" aria-label="edit">
                    edit
                </button>
                <button title="Deletar" aria-label="edit">
                    Delete 
                </button>
                <Link to="/" title="visualizar nota" aria-label="view">
                    Visibilly
                </Link>
            </div>
        </li>
    )
}