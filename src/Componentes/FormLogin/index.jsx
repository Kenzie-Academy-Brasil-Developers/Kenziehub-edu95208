import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./LoginForm.schema";
import { api } from "../../services/api";
import { useState } from "react";



export const FormLogin = ({ setUser }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema),
    });


    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userLogin = async (payLogin) => {
        console.log(payLogin)
        try {
            setLoading(true);
            const { data } = await api.post("sessions", payLogin);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            console.log(data);
            navigate("/Dashboard");
            console.log(data);
        } catch (error) {
            console.log(error);
            if (error.response?.data.message === "Incorrect email / password combination")
                alert("Email ou senha incorreta ")

        } finally {
            setLoading(false);
        };
    };
    const submit = (payLogin) => {

        userLogin(payLogin);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>Login</h2>
            <Input
                label="Email"
                type="text"
                id="1"
                placeholder="informe seu email"
                error={errors.email}
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                id="2"
                placeholder="informe sua senha"
                error={errors.password}
                {...register("password")}
            />


            <div>
                <button type="submit" disabled={loading}>Entrar</button>
                <Link to="/Register">Cadastre-se</Link>
            </div>
        </form>
    );
};