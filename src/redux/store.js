import { configureStore } from '@reduxjs/toolkit'
import TypingTestReducer from './features/TypingTestSlice'

export const store = configureStore({
  reducer: {
    typingTest : TypingTestReducer
  },
})