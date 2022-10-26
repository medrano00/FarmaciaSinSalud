import { AnimationController, Animation } from "@ionic/angular";


export const enterAnimation = (baseEL: HTMLElement, opts?: any): Animation => {
  // TODO document why this arrow function is empty
    const DURATION = 400;

    console.log('baseEL: ', baseEL);
    console.log('opts: ', opts);
    

    const animationCTRL = new AnimationController();

    if(opts.direction == 'foward'){
        
        return animationCTRL.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', 0, 1);
    }
	
    else{
        const rootAnimation = animationCTRL.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', 0, 1);  

        const leavingAnimation = animationCTRL.create()
        .addElement(opts.leavingEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', 0, 1);  

        animationCTRL.create().addAnimation([rootAnimation, leavingAnimation]);

    }
}