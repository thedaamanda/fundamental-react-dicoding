import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ noteList, onArchived }) {
 return (
    <div className="list-result">
        { noteList.length ?
            noteList.map(note => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    onArchived={onArchived}
                    {...note} />
            ))
            :
            <div className="empty-state">
                <h3 className="title">Tidak ada catatan</h3>
                <p className="body">Catatan yang anda buat akan muncul disini</p>
            </div>
        }
    </div>
 );
}

export default NoteList;
