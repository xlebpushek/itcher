import { useContext } from 'react'
import { IsNotFoundContext } from '../context/not-found-context'

const useIsNotFound = () => useContext(IsNotFoundContext)

export { useIsNotFound }
