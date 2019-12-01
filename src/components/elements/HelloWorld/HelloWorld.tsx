import { createComponent, reactive } from '@vue/composition-api'

import s from './HelloWorld.module.scss'

const HelloWorld = createComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup({ msg }) {
    const state = reactive({
      count: msg.length,
    })

    const increment = () => {
      state.count += 1
    }

    const decrement = () => {
      state.count -= 1
    }

    return () => (
      <div>
        <h1>{msg}</h1>
        <button onClick={decrement}>-</button>
        <span class={s.counter}>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>
    )
  },
})

export default HelloWorld
