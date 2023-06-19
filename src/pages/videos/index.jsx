import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './videos.css';

function VideosPage() {
    return (
        <div className='container videos'>
            <div className='youtube-embed'>
                <iframe src="https://www.youtube.com/embed/6ZUIwj3FgUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <a href='https://www.youtube.com/@IVEstarship/playlists' target='_blank' rel="noopener">Watch more on youtube <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
        </div>
    );
}

export default VideosPage;