import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import ImageHeader from '../components/ImageHeader';
import { toast } from 'react-toastify';

function AddPage() {
    const navigate = useNavigate();

    const onAddNoteHandler = async (note) => {
        try {
            await addNote({
                title: note.title,
                body: note.body
            });
            toast.success("Catatan berhasil ditambahkan");
            navigate('/');
        } catch (error) {
            console.log(error);
        }
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
