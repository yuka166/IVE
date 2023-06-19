import { Link } from 'react-router-dom';
import AlbumImage1 from '../../assets/images/iveive_album_cover.jpg';
import AlbumImage2 from '../../assets/images/wave_album_cover.jpg';
import AlbumImage3 from '../../assets/images/kitsch_album_cover.jpg';
import AlbumImage4 from '../../assets/images/lovedivejp_album_cover.jpg';
import AlbumImage5 from '../../assets/images/elevenjp_album_cover.jpg';
import AlbumImage6 from '../../assets/images/afterlike_album_cover.jpg';
import AlbumImage7 from '../../assets/images/lovedive_album_cover.jpg';
import AlbumImage8 from '../../assets/images/eleven_album_cover.jpg';
import './discography.css';

function DiscographyPage() {
    return (
        <div className="container album-list">
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage1} alt="Album cover" />
            </Link>
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage2} alt="Album cover" />
            </Link>
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage3} alt="Album cover" />
            </Link>
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage4} alt="Album cover" />
            </Link>
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage5} alt="Album cover" />
            </Link>
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage6} alt="Album cover" />
            </Link>
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage7} alt="Album cover" />
            </Link>
            <Link to='/discography/test' className='album'>
                <img src={AlbumImage8} alt="Album cover" />
            </Link>
        </div>
    );
}

export default DiscographyPage;
