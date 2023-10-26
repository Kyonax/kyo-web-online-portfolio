import { useState, useEffect} from "react"

const animationVariants = {
    init: {
        width: 0
    },
    anim: {
        width: 100
    },
}

const SlideAnimation = (useAnimation: any) => {
    const animationControls = useAnimation();

    return {
        animationControls
    }
}

export default SlideAnimation
