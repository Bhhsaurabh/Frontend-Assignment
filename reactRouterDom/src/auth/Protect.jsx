import {Navigate} from 'react-router-dom'
let Protect = ({children})=>{
    let isAuth = localStorage.getItem("isAuth")
    if(isAuth !== "true"){
        return <Navigate to = "/login" />
    }
        return children
}

export default Protect