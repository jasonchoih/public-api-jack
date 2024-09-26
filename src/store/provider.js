"use client";
// 
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from '@/store'
// 
export default ({ children }) =>
{
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children}      
        </PersistGate>
    </Provider>
}