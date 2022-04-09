import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContextProvider from './Context/AuthContext';
import LogIn from './Components/LogIn/LogIn';
import CreateOreder from './Components/CreateOrder/CreateOrder';
import OrderContextProvider from './Context/OrderContext';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from './Components/PublicRoutes/PublicRoutes';

function App() {
    return(
        <div className = 'App' >
            <AuthContextProvider>
                <OrderContextProvider>
                    <BrowserRouter>
                        <NavBar />
                        <Routes>

                            <Route>
                                <Route element = {<PublicRoutes />} >
                                    <Route path = '/follow-up' />
                                    <Route path = '/login' element = {<LogIn/>}/>
                                </Route>
                            </Route>

                            <Route>
                                <Route element = {<PrivateRoutes />} >
                                    <Route path = '/pedido' element = {<CreateOreder/>}/>
                                    <Route path = '/' />
                                </Route>
                            </Route>

                        </Routes>
                    </BrowserRouter>
                </OrderContextProvider>
            </AuthContextProvider>
            
        </div>
    );
}

export default App;
