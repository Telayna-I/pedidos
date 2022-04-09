import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContextProvider from './Context/AuthContext';
import LogIn from './Components/LogIn/LogIn';
import CreateOreder from './Components/CreateOrder/CreateOreder';

function App() {
    return(
        <div className = 'App' >
            <AuthContextProvider>
                <BrowserRouter>
                    <NavBar />
                    
                    <Routes>
                    <Route path = '/login' element = {<LogIn/>}/>
                    <Route path = '/pedido' element = {<CreateOreder/>}/>
                        {/* <Route path='/' element = {<></>} /> */}
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
            
        </div>
    );
}

export default App;
