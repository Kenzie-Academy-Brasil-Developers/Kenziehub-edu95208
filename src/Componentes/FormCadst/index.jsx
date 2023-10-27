import { useForm } from "react-hook-form";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { api } from "../../services/api"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"



export const FormCadst = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const navigate = useNavigate();
     
    const [loading, setLoading] = useState(false);
    const [toDolist, setDoList] = useState("");
    const userRegister = async (pay) => {
        console.log(pay)

        try {
            setLoading(true)
           const {data}= await api.post("/users", pay);
           console.log(data);
            navigate("/");

        } catch (error) {
            console.log(error);
            if (error.response?.data === "") {
                alert("error")
            }
        } finally {
            setLoading(false)
        }

    };

    const submit = (pay) => {
       /* console.log(pay)*/
       userRegister(pay);
    };

    return (
        <form className={style.formCardt} onSubmit={handleSubmit(submit)}>
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>

            <Input
                label="Nome"
                type="text"
                id="name"
                placeholder="Digite aqui seu nome"
                {...register("name")}
                error={errors.name}
            />

            <Input
                label="Email"
                type="text"
                id="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Senha"
                type="password"
                id="senha"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                error={errors.password}
            />

            <Input
                label="Confirma Senha"
                type="password"
                id="senhaPassoword"
                placeholder="Digite novamente sua senha"
                {...register("confirmpassword")}
                error={errors.confirmpassword}
            />

            <Input
                label="Contato"
                type="text"
                id="contact"
                placeholder="Opção de contato"
                error={errors.contact}
                {...register("contact")}
            />


            <Input
                label="Bio"
                type="text"
                id="name"
                placeholder="Fale sobre você"
                error={errors.bio}
                {...register("bio")}
            />

            <div>
                <p>Selecionar módulo</p>
                <select id="title" type="text" error={errors.course_module} {...register("course_module")}>
                    <option id="title" type="text" value="Basíco">Primeiro módulo</option>
                    <option id="title" type="text" value="intermediário">Segundo módulo</option>
                    <option id="title" type="text" value="Avançado"  >Terceiro módulo</option>
                    <option id="title" type="text" value="Expert" >Quarto módulo</option>
                </select>
            </div>
            <div>
                <button type="submit" disabled={loading} >Cadastrar</button>
            </div>

        </form>
    );
};