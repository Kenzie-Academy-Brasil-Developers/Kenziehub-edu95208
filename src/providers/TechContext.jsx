import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useContextIm } from "../hooks/useContext";

export const Techcontext = createContext({})

export const TechProvider = ({ children }) => {
    const { user } = useContextIm();
    const [TecList, setTecList] = useState([]);
    console.log(user)
    useEffect(() => {
        const getTech = async () => {
            try {
                const { data } = await api.get("users")
                setTecList(data);
            } catch (error) {
             
            }
        }

        getTech()
    }, [])

    const createTech = async () => {
        try {
            const token = localStorage.get("@TOKEN");

            const newTech = {
                title: user.techs.title,
                status: user.techs.status,
            }
        
            const { data } = await api.post("users/techs", newTech, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTecList([...TecList, data]);
        }catch (error){
           
        }
    }

    return (
        <Techcontext.Provider value={{ TecList, createTech }}>
            {children}
        </Techcontext.Provider>
    )
}