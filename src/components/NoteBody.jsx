import React from 'react';
import NoteSearch from './Search';
import NoteList from './NoteList';
import NoteContainer from './NoteContainer';

function NoteBody({ notes, onDelete, onArchived, onSearch }) {
    return (
        <section className="result-section">
            <NoteSearch onSearch={onSearch} />
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
