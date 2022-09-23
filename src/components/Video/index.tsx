
import video from '../../assets/videos/SSCSHORT.mp4';
import './index.css';


const Video = () => {
    return (
        <div id="video" className='video'>
            <video src={video} muted />
        </div>

    )
}

export default Video

