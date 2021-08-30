

export const easing =[.6,-0.05,0.01,0.99]


export const fadeInUp={
    initial:{
        y:60,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:.6,
            ease: easing,
            bounce: 0.5
        }
    }
}


export const stagger={
    animate:{
        transition:{
            staggerChildren:0.2,
            bounce:0.5
        }
    }
}