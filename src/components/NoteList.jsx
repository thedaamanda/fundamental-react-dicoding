import React from 'react';
import NoteItem from './NoteItem';

function NoteList() {
 return (
    <div className="flex-item">
        <div className="form-groups">
            <div className="heading">
                <span className="tagline">Daftar Catatan</span>
                <h2 className="title">Catatan Aktif</h2>
            </div>
            <div className="list-result" id="notes">
                <NoteItem />
            </div>
        </div>
    </div>
 );
}

export default NoteList;
