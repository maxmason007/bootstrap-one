import ReactPlayer from 'react-player';
import './index.css';


const Vimeo = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                width='100%'
                height='450px'
                playing='false'
                loop='false'
                muted='true'
                controls='false'
                className='react-player'
                url="https://vimeo.com/750878921"
                onReady={() => console.log('onReady callback')}
            />
        </div>

    )
}

export default Vimeo