import Link from 'next/link'
const users = () => {
  return (
    <div>
      <h1>Aqui é o usuario</h1>
      <button><Link href='/Category/Laranja'>Clique aqui para acessar laranja!!</Link></button>
    </div>
  )
}

export default users
