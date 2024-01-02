import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../hooks/useLanguage'

const CHAR_LIMIT = 50;

function NoteInput({ addNote }) {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const setTitleHandler = (event) => {
        const title = event.target.value;
        if (title.length <= CHAR_LIMIT) {
            setTitle(title);
        }
    }

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

    const text = useLanguage('app');
    const remainingTitleLength = CHAR_LIMIT - title.length;

    return (
        <form id="note-form" onSubmit={onFormSubmitHandler}>
            <div className="form-groups">
                <div className="heading">
                    <span className="tagline">{text.addNote.tagline}</span>
                    <h2 className="title">{text.addNote.title}</h2>
                </div>
                <div className="field-group">
                    <div className="title-length">{text.addNote.remainingCharacters} {remainingTitleLength}</div>
                    <input type="text" placeholder={text.input.placeholder.title} id="inputNoteTitle" value={title} onChange={setTitleHandler} required />
                </div>
                <div className="field-group body-wrapper">
                    <div
                        className="input-body"
                        contentEditable="true"
                        data-placeholder={text.input.placeholder.body}
                        onInput={onBodyChangeHandler}
                        spellCheck="false"
                        suppressContentEditableWarning={true}
                    >
                    </div>
                </div>
                <div className="field-group">
                    <button value="submit" id="btnSubmitForm">{text.addNote.button}</button>
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
