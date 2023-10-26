import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./LoginForm.schema";



export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema),
    });
    const submit = (pay) => {

        console.log(pay);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>

            <Input
                label="Email"
                type="text"
                id="email"
                placeholder="informe seu email"
                error={errors.email}
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                id="senha"
                placeholder="informe sua senha"
                error={errors.password}
                {...register("password")}
            />


            <div>
                <button type="submit">Entrar</button>
                <Link to="/Register">Cadastre-se</Link>
            </div>
        </form>
    );
};