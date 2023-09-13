import React from 'react';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';
import ActionButton from './ActionButton';

function NoteItem() {
    return (
        <div className="list-content" id="note-1">
            <NoteItemDate />
            <NoteItemBody />
            <ActionButton />
        </div>
    )
}

export default NoteItem;
