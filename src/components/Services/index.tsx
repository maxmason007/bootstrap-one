
import { AnimationOnScroll } from 'react-animation-on-scroll';
import runner from '../../assets/photos/runner.png';
import './index.css';




const Services = () => {

    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" >

                <div className="services">
                    <h1 id="services">Services</h1>
                    <p className="servicestext">We don’t just DJ. We can also add video & photo content
                        to the booking with drone shots. See previous work below with MixMag.</p>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" >
                <div className="runcontainer">
                    <img className="runner" src={runner}></img>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Services