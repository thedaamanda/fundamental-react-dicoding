import React from 'react';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

function NoteItem({ id, title, body, createdAt }) {
    return (
        <div className="list-content" id={id}>
            <NoteItemDate date={createdAt} />
            <NoteItemBody title={title} body={body} />
        </div>
    )
}

export default NoteItem;
