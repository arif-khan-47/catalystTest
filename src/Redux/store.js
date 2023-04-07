import {configureStore} from '@reduxjs/toolkit';
import cartSystem from './Slice/cartSystem';


const store = configureStore({
    reducer: {
      cartData: cartSystem,
    },
  });
  
  export default store;