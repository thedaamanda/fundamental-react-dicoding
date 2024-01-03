import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import { MdOutlineDateRange } from 'react-icons/md';

function NoteItemDate({ date }) {
    return (
        <ul className='list-meta'>
            <li>
                <div className='item'>
                    <MdOutlineDateRange style={{ height: '24', width: '24' }} />
                    <span>{showFormattedDate(date)}</span>
                </div>
            </li>
        </ul>
    );
}

NoteItemDate.propTypes = {
    date: PropTypes.string.isRequired,
};

export default NoteItemDate;
