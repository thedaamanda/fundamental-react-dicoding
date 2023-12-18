import React from "react";
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import ImageHeader from '../components/ImageHeader';

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler({ title, body }) {
        addNote({
            title,
            body,
        });

        navigate('/');
    }

    return (
        <section className="note-section">
            <div className="note-container">
                <div className="row-center">
                    <div className="flex-item-left d-none">
                        <ImageHeader />
                    </div>
                    <div className="flex-item-right">
                        <div className="note-wrapper">
                            <NoteInput addNote={onAddNoteHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddPage;
