import React from 'react';
import NoteSearch from './Search';
import NoteList from './NoteList';

function NoteBody() {
    return (
        <section className="result-section">
            <NoteSearch />
            <div className="padding-tb">
                <div className="result-container">
                    <div className="row-center-padding" id="list-note">
                        <NoteList />
                        <NoteList />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoteBody;
