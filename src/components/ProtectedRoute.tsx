import { Navigate } from 'react-router'

export default function PrrotectedRoute(props:any) {
    if (localStorage.getItem('userToken')) {

       return  props.children
    }else{

        return <Navigate to={'/login'}></Navigate>
    }
  
}
