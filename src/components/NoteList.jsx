import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ noteList }) {
 return (
    <div className="flex-item">
        <div className="form-groups">
            <div className="heading">
                <span className="tagline">Daftar Catatan</span>
                <h2 className="title">Catatan Aktif</h2>
            </div>
            <div className="list-result" id="notes">
                { noteList.length !== 0 ?
                    noteList.map(note => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            {...note} />
                    ))
                    :
                    <div className="empty-state">
                        <h3 className="title">Tidak ada catatan</h3>
                        <p className="body">Catatan yang anda buat akan muncul disini</p>
                    </div>
                }
            </div>
        </div>
    </div>
 );
}

export default NoteList;
