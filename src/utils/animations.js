import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
export const animateWthGsap=(target,animatonProps,scrollProps)=>{
    gsap.to(target,
        {
            ...animatonProps,
            scrollTrigger:{
                trigger:target,
                toggleActions:'restart reverse restart reverse',
                start:'top(85%)',
                ...scrollProps
            }
        }
    )

}
export const animateWithGsapTimeline =(timeline,rotationRef,rotationState,firstTarget,secondTarget,animationProps)=>{
    timeline.to(firstTarget,
        {
            ...animationProps,
            ease:'power2.inOut'
        },
        '<'
    )
    timeline.to(secondTarget,
        {
            ...animationProps,
            ease:'power2.inOut'
        },
        '<'
    )

}