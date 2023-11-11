import { useEffect } from "react";
export default function Logout(){
    useEffect(()=>{
        alert('logged out');
        localStorage.removeItem('user')
        window.location.href='/'
    },[])
}