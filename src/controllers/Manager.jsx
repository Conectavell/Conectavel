// UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Função simulada para obter o usuário autenticado
const getAuthenticatedUser = () => {
    // Simulação: retorna um objeto de usuário autenticado
    return { name: 'Kevyn Costa' };
};

// Cria o contexto
const UserContext = createContext();

// Cria um provedor para o contexto
export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        // Obtém o usuário autenticado ao carregar o componente
        const authenticatedUser = getAuthenticatedUser();
        if (authenticatedUser) {
            setUserName(authenticatedUser.name);
        }
    }, []);

    return (
        <UserContext.Provider value={userName}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para usar o contexto do usuário
export const useUserName = () => {
    return useContext(UserContext);
};

