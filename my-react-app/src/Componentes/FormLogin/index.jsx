
import { useForm } from "react-hook-form";
import { Input } from "../input";

export const FormLogin = () => {
    const { register, handleSubmit } = useForm();

   
    return (
        <form onSubmit={handleSubmit(submit)}>
       
                <Input 
                label="Email" 
                type="text" 
                id="email"
                required
                placeholder="informe seu email"
                {...register("email")}
                />

                <Input
                label="Senha" 
                type="password" 
                id="senha"
                required
                placeholder="informe sua senha"
                {...register("password")}
                />
            
              
            
            <button type="submit">Entrar</button>
            <button type="submit">cadastrar</button>
        </form>
    );
};