import {useRouter} from 'next/router'

export default function LoginSuccess(){
    const router=useRouter();
    const time=router.query
    return(
        <div style={{"background":"#2A7221", "marginTop":"180px"}}><h1 style={{"margin": "auto", "textAlign": "center"}}>YOU LOGGED IN! gg ez</h1><small>{JSON.stringify(time)}</small></div>
    )
}

