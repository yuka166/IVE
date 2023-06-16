import Image from '../../../assets/images/banner2.jpg';
import './member.css';

function Member() {
    return (
        <div className='member'>
            <div className='member-image'><img src={Image} alt='Member image' /></div>
            <div className='member-name'>Name goes here...</div>
        </div>
    );
}

export default Member;
