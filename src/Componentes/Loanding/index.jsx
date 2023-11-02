import icon from "../../assets/Loading.svg";
import style from "./style.module.scss";

export const Loading = () => {
    return (
    <div className={style.loandingBox}>
        <img src={icon} alt="Loanding " />
    </div>
    )
}