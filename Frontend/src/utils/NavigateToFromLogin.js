import { useHistory } from "react-router-dom";

function Auth(setIsLoggedIn)
{
    const history = useHistory();

    const SignOut = ()=>{
        sessionStorage.setItem("isLoggedIn",false);
        setIsLoggedIn(false)
        history.push("/pizza")
        }
    
    const SignIn = ()=>{
            history.push("/pizza")
    }

    return {SignIn, SignOut}
}

export default Auth;

