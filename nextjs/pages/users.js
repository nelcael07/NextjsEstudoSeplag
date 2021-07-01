import {useState,useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'

const users = () => {
  // MANEIRA DE FAZER UMA REQUISIÇÃO DO LADO DO CLIENTE

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    // utilização do axios para pegar os dados da api
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = await response.data
    setUsuario(data)
  }
  return (
    <div>
      <button><Link href='/Testando'>Clique aqui!!!!!!!</Link></button>
      <div>
        {usuario.map((item, key) => (
          <div
            key={key}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

// MANEIRA DE FAZER UMA REQUISIÇÃO DO LADO SERVIDOR DA APLICAÇÃO

// export async function getServerSideProps (context) {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//   const data = await response.data
//   return {
//     props: { usuario: data }
//   }
// }

export default users
