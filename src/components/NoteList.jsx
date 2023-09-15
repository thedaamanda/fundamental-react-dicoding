import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ noteList, onDelete, onArchived }) {
 return (
    <div className="list-result">
        { noteList.length ?
            noteList.map(note => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onArchived={onArchived}
                    {...note} />
            ))
            :
            <div className="empty-state">
                <h3 className="title">Tidak ada catatan</h3>
                <p className="body">Silahkan tambahkan catatan baru</p>
            </div>
        }
    </div>
 );
}

export default NoteList;
