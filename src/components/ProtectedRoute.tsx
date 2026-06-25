import { Navigate } from 'react-router'; // اتأكد إنها react-router-dom

export default function ProtectedRoute(props: any) {
    if (localStorage.getItem('userToken')) {
        return props.children;
    } else {
        return <Navigate to={'/login'} />;
    }
}