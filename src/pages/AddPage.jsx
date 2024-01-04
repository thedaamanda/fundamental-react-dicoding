import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/notes/NoteInput';
import ImageHeader from '../components/layouts/ImageHeader';
import { toast } from 'react-toastify';
import useLanguage from '../hooks/useLanguage';

function AddPage() {
    const navigate = useNavigate();
    const text = useLanguage('app');

    const onAddNoteHandler = async (note) => {
        try {
            await addNote({
                title: note.title,
                body: note.body,
            });
            toast.success(text.message.toasts.success.create);
            navigate('/');
        } catch (error) {
            alert(text.message.alert.error.error);
        }
    };

    return (
        <section className='note-section'>
            <div className='note-container'>
                <div className='row-center'>
                    <div className='flex-item-left d-none'>
                        <ImageHeader />
                    </div>
                    <div className='flex-item-right'>
                        <div className='note-wrapper'>
                            <NoteInput addNote={onAddNoteHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

AddPage.propTypes = {
    addNote: PropTypes.func,
};

export default AddPage;
