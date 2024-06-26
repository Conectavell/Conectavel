const isAuthenticated = () => {
    return sessionStorage.getItem('idUsuario') !== null;
}

export default isAuthenticated;