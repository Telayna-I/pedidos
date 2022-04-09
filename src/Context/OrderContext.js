import { createContext, useContext, useState } from "react";
import { addDoc, collection,  Timestamp  } from 'firebase/firestore'
import { dataBase } from "../Services/Firebase/firebase";



export const OrderContext = createContext();

export const useOrder = () => {
    const context = useContext(OrderContext);
    return context
}



const OrderContextProvider = ( { children } ) => {

    const [idPedido, setIdPedido] = useState()


    











    const confirmOrder = (data) => {
        const objOrder = {
            order: {
                nombre: data.nombre,
                producto: data.producto,
                kilos: data.kilos,
                telefono: data.phone,
                senia: data.senia,
                fecha: data.date,
                notas: data.notas,
                estado: false,
                date: Timestamp.fromDate(new Date()).toDate().toString()
            },
            vendedor: JSON.parse(sessionStorage.getItem("vendedor")),
        }
        
        const generateOrder = ()=>{
            addDoc(collection(dataBase,'orders'), objOrder).then(({id}) =>{
                setIdPedido(id)
            }).catch((err)=>{
                console.log(err)
            })
            
        }
        
        generateOrder()
    }










    return (
        <OrderContext.Provider value = {{ confirmOrder, idPedido }}>
            { children }
        </OrderContext.Provider>
    );
}

export default OrderContextProvider