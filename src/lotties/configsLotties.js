import worldAnimation from './world';

export const worldOptions = {
    loop: true,
    autoplay: true,
    animationData: worldAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}