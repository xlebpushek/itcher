import { createEvent, createStore } from 'effector'

const setModalVisible = createEvent<boolean>()
const $modalVisible = createStore(false).on(setModalVisible, (state) => state)

export { $modalVisible, setModalVisible }
