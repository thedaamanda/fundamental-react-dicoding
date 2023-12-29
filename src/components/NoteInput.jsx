import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput'

const CHAR_LIMIT = 50;

function NoteInput({ addNote }) {
    const [title, setTitle] = useInput('');
    const [body, setBody] = React.useState('');

    const onBodyChangeHandler = (event) => {
        setBody(event.target.innerHTML);
    }

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        addNote({
            title,
            body,
        });
    }

    const remainingTitleLength = CHAR_LIMIT - title.length;

    return (
        <form id="note-form" onSubmit={onFormSubmitHandler}>
            <div className="form-groups">
                <div className="heading">
                    <span className="tagline">Formulir Catatan</span>
                    <h2 className="title">Simpan Catatanmu</h2>
                </div>
                <div className="field-group">
                    <div className="title-length">Sisa Karakter: {remainingTitleLength}</div>
                    <input type="text" placeholder="Isi Judul" id="inputNoteTitle" value={title} onChange={setTitle} required />
                </div>
                <div className="field-group body-wrapper">
                    <div
                        className="input-body"
                        contentEditable="true"
                        data-placeholder="Tuliskan catatanmu disini ...."
                        onInput={onBodyChangeHandler}
                        spellCheck="false"
                        suppressContentEditableWarning={true}
                    >
                    </div>
                </div>
                <div className="field-group">
                    <button value="submit" id="btnSubmitForm">Buat Catatan</button>
                </div>
            </div>
        </form>
    );
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
    note: PropTypes.object,
};

export default NoteInput;
