import Cookies from "universal-cookie";


export default function Success(){


    const cookies = new Cookies();
    cookies.remove('cart', {path: '/'})




    return(
        <div style={{"background":"#2A7221", "marginTop":"180px"}}><h1 style={{"margin": "auto", "textAlign": "center"}}>You gave us your money. Thanks. Go away now. Also check your email!</h1></div>
    )
}

