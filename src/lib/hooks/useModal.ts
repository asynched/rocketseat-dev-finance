import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

type UseModalType = [Writable<boolean>, () => void]

export const useModal = (initialState = false): UseModalType => {
  let render = writable(initialState)

  const toggleModal = () => render.update((render) => !render)

  return [render, toggleModal]
}
