import { configureStore } from '@reduxjs/toolkit'
import TypingTestReducer from './features/TypingTestSlice'
import authReducer from './features/authSlice'

export const store = configureStore({
  reducer: {
    typingTest : TypingTestReducer,
    auth: authReducer ,
  },
})