import worldAnimation from './world';
import welcome from './welcome.json';

export const worldOptions = {
    loop: true,
    autoplay: true,
    animationData: worldAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

export const welcomeOptions = {
    loop: true,
    autoplay: true,
    animationData: welcome,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}