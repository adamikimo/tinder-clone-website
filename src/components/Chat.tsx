// imports
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../css/Chat.css';
import { 
    Link 
} from 'react-router-dom';

// props interface
interface chat{
    ImgSrc?: string;
    Message?: string;
    TimeStamp?: string;
    Name?: string;
    alt?: string;
}

// component
const Chat: React.FC<chat> = (
    {
        ImgSrc,
        Message,
        TimeStamp,
        Name,
        alt,
    }
) => {
    // template
    return (
        <Link
        to={`/chats/${Name}`}
        >
        <div
        className='chat'
        >
            <Avatar 
            className='chat__img'
            src={ImgSrc}
            alt={alt}
            />
            <p
            className='chat__details'
            >
                <h3>{Name}</h3>
                <h5>{Message}</h5>
            </p>
            <p 
            className='chat__timeStamp'
            >
                {TimeStamp}
            </p>
        </div>
        </Link>
    )
}

export default Chat;
