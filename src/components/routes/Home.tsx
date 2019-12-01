import { useStore, useRequest } from '@/use'
import HelloWorld from '@/components/elements'
import ImageLogo from '@/assets/logo.png'

const Home = () => {
  const [getters, dispatch] = useStore()

  const setResponseData = (data: any) => dispatch('setResponseData', data)
  const reqState = useRequest({ url: '/test' }, null, setResponseData)

  return () => (
    <div>
      <img alt="Vue logo" src={ImageLogo} />
      <HelloWorld msg="This text is a prop!"/>

      <h1>{getters.mainMsg}</h1>
      <button onClick={() => dispatch('changeMsg')}>mutate</button>

      <h1>{reqState.isFetching ? 'Loading...' : getters.responseData}</h1>
    </div>
  )
}

export default Home
