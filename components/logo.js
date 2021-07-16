import MyImage from "./myImage";

export default function Logo(props){

    const logos=[{
        url:'/images/icons/BBC.svg'
    },{
        url:'/images/icons/Dolby.svg'
        },{
        url:'/images/icons/HBO.svg'
    },{
        url:'/images/icons/Microsoft.svg'
    },{
        url:'/images/icons/Netflix.svg'
    },{
        url:'/images/icons/Sony.svg'
    },{
        url:'/images/icons/tv5monde.svg'
    },{
        url:'/images/icons/HBO.svg'
    },{
        url:'/images/EA.svg'
    },{
        url:'/images/FOX.svg'
    },{
        url:'/images/M6.svg'
    },{
        url:'/images/NASA.svg'
    },{
        url:'/images/ProSieben.svg'
    },{
        url:'/images/Sky.svg'
    },{
        url:'/images/ViaSat.svg'
    },{
        url:'/images/ZDF.svg'
    }]

    let containers=logos.map(x=><img className={props.img} src={x.url}/>)
    if(props.reverse==1){
        containers.reverse()
    }


    return (<div className={props.class}>{containers}</div>);
};
