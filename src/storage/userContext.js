import { createContext } from "react";


export const userContext = createContext({ user: "anonymous"});

function UserProvider (props){
    const user = "Rodrigo";
    const logedin = true;


    return(
        <userContext.Provider value= { {user, logedin}}>
            {props.children}
        </userContext.Provider>
    );
} 

export { UserProvider };
