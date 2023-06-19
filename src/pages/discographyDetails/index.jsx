import AlbumImage1 from '../../assets/images/iveive_album_cover.jpg';
import './discographyDetails.css';

function DiscographyDetails() {
    return (
        <div className='container'>
            <div className='album-contents'>
                <div className="album-contents-image"><img src={AlbumImage1} alt="Album cover" /></div>
                <div className='album-contents-details'>
                    <div>Tên</div>
                    <div>Loại album</div>
                    <div>Ngày ra mắt</div>
                    <div>Thể loại</div>
                    <div>Ngôn ngữ</div>
                    <div>Hãng thu âm</div>
                </div>
            </div>
            <div>
                <div>Track list:</div>
                <div className='album-contents-tracklist'>
                    <div>Blue Blood</div>
                    <div>I AM</div>
                    <div>Kitsch</div>
                    <div>Lips</div>
                    <div>Heroine</div>
                    <div>Mine</div>
                    <div>Hypnosis</div>
                    <div>Not Your Girl</div>
                    <div>Next Page</div>
                    <div>Cherish</div>
                    <div>Shine With Me</div>
                </div>
            </div>
            <div>
                <p>I've Ive is the first studio album by South Korean girl group Ive. It was released by Starship Entertainment on April 10, 2023, the album contains 11 tracks, including the pre-release single "Kitsch" and lead single "I Am".</p>
                <p>Starship Entertainment explained that the title I've Ive "refers to Ive's name and carry the meaning of [the group] presenting themselves in the 'Ive way'" in the album.</p>
                <p>Prior to the announcement of the album, the group performed the unreleased songs "Blue Blood" and "Not Your Girl" at their first concert, the Prom Queens, on February 11 and 12, 2023. It was later reported by Korea JoongAng Daily that both tracks were from Ive's upcoming studio album, which would be released in April.[2] On March 16, Starship Entertainment announced that Ive would be releasing their first studio album, titled I've Ive, on April 10.[3] It was also announced that the album would contain 11 tracks, including a lead single written by Kim Eana and composed by Ryan S. Jhun, with Seo Ji-eum, who wrote the group's past lead singles, also participating in songwriting on the album.[4] On March 20, the music video teaser for "Kitsch" was released, alongside confirmation that the song would be released on March 27, ahead of the album.[5] On March 23, the promotional schedule was released.[6] On March 27, "Kitsch" and its music video were released.[7] On April 2, the track listing was released with "I Am" announced as the lead single.[8] On April 8, the music video teaser for "I Am" was released.[9] Followed by the highlight medley teaser video a day later.[10] The album was released alongside the music video for "I Am" on April 10.</p>
            </div>
        </div>
    );
}

export default DiscographyDetails;