import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools:
    process.env.NODE_ENV === 'development'
      ? {
          name: 'quiz',
        }
      : false,
});

export type RootState = ReturnType<typeof rootReducer>;
export { store };
