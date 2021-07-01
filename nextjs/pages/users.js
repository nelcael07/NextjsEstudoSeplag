import { useEffect, useState } from "react";
import axios from 'axios'

const users = ({usuario}) => {

    // MANEIRA DE FAZER UMA REQUISIÇÃO DO LADO DO CLIENTE

    // const [usuario, setUsuario] = useState([]);

    // useEffect(() => {
    //     fetchUsers()
    // }, []);


    // async function fetchUsers() {
    //     // utilização do axios para pegar os dados da api
    //     const response =  await axios.get('https://jsonplaceholder.typicode.com/users');
    //     const data = await response.data;
    //     setUsuario(data)
    // }

    return (
        <div>
            {usuario.map((item,key)=>(
                <div
                    key={key}
                >
                    {item.name}
            </div>
            ))}
        </div>
    );
}

// MANEIRA DE FAZER UMA REQUISIÇÃO DO LADO SERVIDOR DA APLICAÇÃO
export async function getServerSideProps(context) {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await response.data;
    
    return{
        props:{usuario: data},
    }
}


export default users;

