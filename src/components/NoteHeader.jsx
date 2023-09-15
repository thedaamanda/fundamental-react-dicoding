import React from 'react';
import NoteInput from './NoteInput';
import ImageHeader from './ImageHeader';

function NoteHeader({ addNote }) {
    return (
        <section className="note-section">
            <div className="note-container">
                <div className="row-center">
                    <div className="flex-item-left d-none">
                        <ImageHeader />
                    </div>
                    <div className="flex-item-right">
                        <div className="note-wrapper">
                            <NoteInput addNote={addNote} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoteHeader;
