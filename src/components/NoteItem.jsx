import React from 'react';
import PropTypes from 'prop-types';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

function NoteItem({ id, title, body, createdAt }) {
    return (
        <div className='list-content' id={id}>
            <NoteItemDate date={createdAt} />
            <NoteItemBody id={id} title={title} body={body} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
