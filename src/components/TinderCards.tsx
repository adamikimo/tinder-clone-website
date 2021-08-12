// imports
import React, {
    useState,
    useEffect
} from 'react';
import '../css/TinderCards.css';
import TinderCard from'react-tinder-card';
import http from '../server/axios';

// component
const TinderCards: React.FC = () => {
    // state
    const [cards, setCards] = useState<Array<any>>([]);


    // this function is responible for detecting the card swiping
    const swiped = (nameToDelete: string): void =>{
        console.log('removing: ' + nameToDelete);
    }

    // getting the data from the server
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const req = await http.get('/tinder/cards');
                setCards(req.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]);

    // this function is responsible for detecting which card is out of the screen frame
    const outOfFrame = (name: string) => {
        console.log(name+ ' left the screen')
    }

    // template
    return (
        <div
        className='tinderCards'
        >
            <div className="tinderCards__cardContainer">
            {cards.map(({name, url}) => 
            <div
            className='Container'
            >
            <TinderCard
            key={name}
            preventSwipe={['up', 'down']}
            onSwipe={()=> swiped(name)}
            onCardLeftScreen={()=> outOfFrame(name)}
            >
                <div
                style={{backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat'}}
                className="card"
                >
                    <h3
                    className='Text'
                    >
                    {name}
                    </h3>
                </div>
            </TinderCard>
            </div>
            )}
            </div>
        </div>
    )
}

export default TinderCards;
