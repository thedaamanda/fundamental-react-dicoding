import React from 'react';
import NoteInput from './NoteInput';
import manageImg from '/images/manage-data.png';

function NoteHeader() {
    return (
        <section className="note-section">
            <div className="note-container">
                <div className="row-center">
                    <div className="flex-item-left d-none">
                        <div className="preview-image">
                            <img src={manageImg} alt="Manage Image" />
                        </div>
                    </div>
                    <div className="flex-item-right">
                        <div className="note-wrapper">
                            <NoteInput />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoteHeader;
