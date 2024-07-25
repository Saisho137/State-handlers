import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';

const Auth = () => {
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({ id: 1, name: 'John Doe' }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Bienvenido, {user.name}</p>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Iniciar Sesión</button>
            )}
        </div>
    );
};

export default Auth;
