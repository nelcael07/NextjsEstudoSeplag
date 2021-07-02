import {useRouter} from 'next/router'
const Laranja = () => {
  const router = useRouter()
  console.log(router);
  return (
    <div>
      <h1>{router.query.Laranja}</h1>
      <h2>categoria laranja</h2>
    </div>
  )
}

export default Laranja
