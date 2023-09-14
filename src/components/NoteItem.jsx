import React from 'react';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';
import ActionButton from './ActionButton';

function NoteItem({ id, title, body, archived, createdAt }) {
    return (
        <div className="list-content" id={id}>
            <NoteItemDate date={createdAt} />
            <NoteItemBody title={title} body={body} />
            <ActionButton id={id} />
        </div>
    )
}

export default NoteItem;