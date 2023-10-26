import axios from "axios";

export const api = axios.create({

   baseUrl: "https://kenziehub.herokuapp.com",
   timeout: 5 * 1000,

});

