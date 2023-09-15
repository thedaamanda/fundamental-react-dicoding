import React from 'react';
import Search from './Search';
import NoteList from './NoteList';
import NoteContainer from './NoteContainer';

function NoteBody({ notes, onDelete, onArchived, searchKeyword, onSearch }) {
    if (searchKeyword) {
        notes = notes.filter(note => note.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    }

    return (
        <section className="result-section">
            <Search onSearch={onSearch} />
            <div className="padding-tb">
                <div className="result-container">
                    <div className="row-center-padding" id="list-note">
                        <NoteContainer tagline="Daftar Catatan" noteTitle="Catatan Aktif">
                            <NoteList noteList={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchived={onArchived} />
                        </NoteContainer>
                        <NoteContainer tagline="Daftar Catatan" noteTitle="Catatan Arsip">
                            <NoteList noteList={notes.filter(note => note.archived === true)} onDelete={onDelete} onArchived={onArchived} />
                        </NoteContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoteBody;
