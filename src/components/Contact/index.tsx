import emailjs from '@emailjs/browser';
// import "leaflet/dist/leaflet.css";
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useRef } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './index.css';



const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f1i2k13', 'template_gv6dstj', form.current, '9BYin_SuswFPDzS_T')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce="true" >
                <h1 id="contactus" className="contact-us">Contact Us!</h1>
                <div className='container contact-page'>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail} onClick={() => gaEventTracker('send')}>
                            <ul className="listitems">
                                <li className='top'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='top'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li className='top'>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea className="textarea" placeholder="Message" name="message" required ></textarea>
                                </li>
                                <li>
                                    <input name="submit" type="submit" value="SEND" className="flat-button" />
                                </li>
                            </ul>
                        </form>
                        <p className="footer">Website Design By Max Mason</p>
                    </div>
                </div>
            </AnimationOnScroll>
        </>
    )
}

export default Contact


{/* <div className='map-wrap'>
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
        <Popup>
            This is where I'm based! Lets go have a coffee :D
        </Popup>
    </Marker>
</MapContainer>
</div> */}