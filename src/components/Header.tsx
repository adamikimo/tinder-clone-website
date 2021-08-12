// imports
import React from 'react';
import { 
    Link , 
    useHistory 
} from 'react-router-dom';
import '../css/Header.css';

// icons from material-ui
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// interface of the props
interface HeaderProps{
    backButton?: string;
}

// component
const Header: React.FC<HeaderProps> = ({backButton}) => {
    // using the history to go back
    const history = useHistory();
    // template
    return (
        <div
        className='header'
        >
            {
                backButton ?
                <IconButton
                onClick={()=>history.replace(backButton)}
                >
                <ArrowBackIosIcon
                fontSize='large'
                className='header__icon special' 
                />
                </IconButton>
                :
                <IconButton>
                <PersonIcon 
                fontSize='large' 
                className='header__icon'
                />
                </IconButton>
            }
            

            <Link
            to='/'
            >
            <img 
            className='header__logo'
            src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
            alt=''
            />
            </Link>
            

            <Link
            to='/chats'
            >
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
            </Link>
        </div>
    );
}

export default Header;