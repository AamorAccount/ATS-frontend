import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import UserContext from "../context/UserContext";
import Loader from '../helpers/Loader';

export default function LoginCallback() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setUser } = useContext(UserContext);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            try {
                const decoded = jwtDecode(token);
                console.log("Decoded JWT:", decoded);


                Cookies.set('token', token, {
                    expires: 7,
                    sameSite: 'Strict',
                    secure: location.protocol === 'https:'
                });


                setUser({
                    name: decoded.FullName,
                    email: decoded.Email,
                    role: decoded.Department,
                    access: decoded.Access || []
                });


                navigate('/home', { replace: true });

            } catch (err) {
                console.error("Invalid token:", err.message);
                navigate('/login', { replace: true });
            }
        } else {
            navigate('/login', { replace: true });
        }
    }, [location, setUser, navigate]);

    return <Loader />;
}
