// imports
import React from 'react';
import Header from './Header';
import '../css/Chats.css';
import Chat from './Chat';

// componenent
const Chats: React.FC = () => {
    // template
    return (
        <div
            className='Chats'
        >
            <Header 
                backButton='/'
            />
            <Chat 
                ImgSrc='https://images.unsplash.com/photo-1609974631382-441d02050871?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                Name='Omar'
                Message='good and you?'
                TimeStamp='2 days ago'
            />
            <Chat 
                ImgSrc='https://images.unsplash.com/photo-1610056754746-a51f344b3205?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                Name='Mohamed'
                Message='How are you?'
                TimeStamp='2 minutes ago'
            />
            <Chat 
                ImgSrc='https://images.unsplash.com/photo-1511719218143-933ef7b27efa?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                Name='Ahmed'
                Message='Hi'
                TimeStamp='2 months ago'
            />
            <Chat 
                ImgSrc='https://images.unsplash.com/photo-1610000224139-bca25437892e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                Name='Khaled'
                Message='SO EXCITING!!!'
                TimeStamp='From 1 second!!!'
            />
        </div>
    )
}

export default Chats;
