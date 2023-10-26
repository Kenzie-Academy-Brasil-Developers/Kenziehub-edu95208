import { useForm } from "react-hook-form";
import { Input } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import {api} from "../../services/api"



export const FormCadst = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const userRegister = async (pay) => {
        console.log(pay)
        try{ 
         await api.post("/users", pay);
         alert("ok")
        }catch (error){
            console.log(error);
        };
       
    };
    
    const submit =  (pay) => {
        userRegister(pay);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>

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
                id="senha"
                placeholder="Digite novamente sua senha"
                {...register("confirmpassword")}
                error={errors.confirmpassword}
            />


            <Input
                label="Bio"
                type="text"
                id="name"
                placeholder="Fale sobre você"
                error={errors.text}
                {...register("text")}
            />

            <div>
                <p>Selecionar módulo</p>
                <select id="title" type="text" error={errors.status} {...register("status")}>
                    <option id="title" type="text" value="Basíco">Primeiro módulo</option>
                    <option id="title" type="text" value="intermediário">Segundo módulo</option>
                    <option id="title" type="text" value="Avançado"  >Terceiro módulo</option>
                    <option id="title" type="text" value="Expert" >Quarto módulo</option>
                </select>
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>

        </form>
    );
};