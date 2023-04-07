import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import {Provider} from 'react-redux'
import store from './Redux/store';
import toast, { Toaster } from 'react-hot-toast';


function App() {
    return (
      <Provider store={store}>
      <Toaster
      position="top-center"
      reverseOrder={false}
    />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter >
      </Provider>
    );
}

export default App;
