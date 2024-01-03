import React from 'react';
import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function HomePageAction() {
    return (
        <IconContext.Provider
            value={{ style: { height: '2em', width: '2em' } }}
        >
            <div className='homepage_action'>
                <Link to={`/notes/new`}>
                    <BiPlus />
                </Link>
            </div>
        </IconContext.Provider>
    );
}

export default HomePageAction;
