import { useState } from 'react';
/* useAuth.js to manage authentication state */
const useAuth = () => {
    const [token, setToken] = useState(null);

    const login = (userToken)=> {
        setToken(userToken);
    };

    return { token, login};
};

export default useAuth;