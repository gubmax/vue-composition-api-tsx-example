import { useStore } from '@/use'
import HelloWorld from '@/components/elements'
import ImageLogo from '@/assets/logo.png'

const Home = () => {
  const [getters, dispatch] = useStore()

  return () => (
    <div>
      <img alt="Vue logo" src={ImageLogo} />
      <HelloWorld msg="This text is a prop!"/>
      <h1>{getters.mainMsg}</h1>
      <button onClick={() => dispatch('changeMsg')}>mutate</button>
    </div>
  )
}

export default Home
