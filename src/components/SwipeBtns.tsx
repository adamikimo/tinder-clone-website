// imports
import React from 'react';
import '../css/SwipeBtns.css';
// icons from material-ui
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

// component
const SwipeBtns: React.FC = () => {
    // template
    return (
        <div
        className='swipeBtns'
        >
            <IconButton
            className='swipeBtns__repeat'
            >
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton
            className='swipeBtns__left'
            >
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton
            className='swipeBtns__star'
            >
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton
            className='swipeBtns__right'
            >
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton
            className='swipeBtns__lightning'
            >
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeBtns;