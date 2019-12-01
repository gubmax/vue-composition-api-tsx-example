import store from '@/store'
import { provideStore } from '@/use'
import './App.scss'

const App = {
  setup() {
    provideStore(store)

    return () => (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <span> | </span>
          <router-link to="/chunk">Chunk</router-link>
        </div>
        <router-view/>
      </div>
    )
  },
}

export default App
