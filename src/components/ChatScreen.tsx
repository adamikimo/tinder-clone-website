// imports
import React, {
    useState
} from 'react'
import Header from './Header';
import Avatar from '@material-ui/core/Avatar';
import '../css/ChatScreen.css';

// component
const ChatScreen: React.FC = () => {
    // states
    const [input, setInput] = useState('');
    const [Message, setMessage]= useState([
        {
            name: 'Omar',
            img: 'https://images.unsplash.com/photo-1609974631382-441d02050871?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            message: 'hey!',
        },
        {
            message: 'wassup!',
        },
        {
            name: 'Omar',
            img: 'https://images.unsplash.com/photo-1609974631382-441d02050871?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            message: 'How are you?',
        },
        {
            message: 'Al hamdo L Allah',
        }
    ]);

    // this function is resposible for what happens when clicking the btn
    const handleSend = (e: any) =>{
        e.preventDefault();

        setMessage([...Message, {message: input}]);
        setInput("");
    }
    // template
    return (
        <div 
        className='chatScreen'
        >
            <Header 
            backButton='/chats'
            />
            <p
            className='chatScreen__timestamp'
            >
                YOU MATCHED WITH OMAR ON 10/01/2021 
            </p>
            {
                Message.map(el =>
                    el.name ?
                    <div
                    className='chatScreen__message'
                    >
                    <Avatar 
                    src={el.img}
                    alt={el.name}
                    className='chatScreen__img'
                    />
                    <p
                    className='chatScreen__message__text'
                    >
                    {el.message}
                    </p>
                    </div>
                    
                : <div
                    className='chatScreen__message'
                    >
                    <p
                    className='chatScreen__message__textUser'
                    >
                    {el.message}
                    </p>
                </div>  
                ) 
            }
                <form
                className='chatScreen__input'
                >
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    type="text"
                    placeholder='Type a message here...'
                    />
                    <button
                    className='chatScreen__inputButton'
                    type='submit'
                    onClick={handleSend}
                    >
                    SEND
                    </button>
                </form>
            </div>
    )
}

export default ChatScreen;