import { AnimationOnScroll } from 'react-animation-on-scroll';
import poster1 from '../../assets/photos/SSC1.jpg';
import poster2 from '../../assets/photos/SSC2.jpg';
import poster3 from '../../assets/photos/SSC3.jpg';
import poster4 from '../../assets/photos/SSC4.jpg';
import poster5 from '../../assets/photos/SSC5.jpg';
import poster6 from '../../assets/photos/SSC6.jpg';
import './index.css';







function ResponsiveAutoExample() {
    return (
        <div className="bigcontainer">
            <div id="posters" className="postercontainer">
                <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true" >
                    <img id="poster1" src={poster1} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__flipInX" delay="100" animateOnce="true" >
                    <img id="poster2" src={poster2} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__flipInX" delay="200" animateOnce="true" >
                    <img id="poster3" src={poster3} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__flipInX" delay="300" animateOnce="true" >
                    <img id="poster4" src={poster4} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__flipInX" delay="400" animateOnce="true" >
                    <img id="poster5" src={poster5} />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__flipInX" delay="500" animateOnce="true" >
                    <img id="poster6" src={poster6} />
                </AnimationOnScroll>
            </div>

        </div >
    );
}

export default ResponsiveAutoExample;