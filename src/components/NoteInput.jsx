import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

const CHAR_LIMIT = 50;

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onFormSubmitHandler = this.onFormSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        if (event.target.value.length <= CHAR_LIMIT) {
            this.setState(() => {
                return {
                    title: event.target.value,
                };
            });
        }
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            };
        });
    }

    onFormSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const remainingTitleLength = CHAR_LIMIT - this.state.title.length;

        return (
            <form id="note-form" onSubmit={this.onFormSubmitHandler}>
                <div className="form-groups">
                    <div className="heading">
                        <span className="tagline">Formulir Catatan</span>
                        <h2 className="title">Simpan Catatanmu</h2>
                    </div>
                    <div className="field-group">
                        <div className="title-length">Sisa Karakter: {remainingTitleLength}</div>
                        <input type="text" placeholder="Isi Judul" id="inputNoteTitle" value={this.state.title} onChange={this.onTitleChangeHandler} required />
                    </div>
                    <div className="field-group add-new-page__input">
                        {/* <textarea placeholder="Tuliskan Catatanmu disini ..." id="inputBodyDescription" rows="5" value={this.state.body} onChange={this.onBodyChangeHandler} contentEditable='true' suppressContentEditableWarning={true} required></textarea> */}
                        {/* <div contentEditable='true' suppressContentEditableWarning={true} id="inputBodyDescription" data-placeholder="Tuliskan Catatanmu disini ..." spellCheck='false' onInput={this.onBodyChangeHandler}>
                            {parser(this.state.body)}
                        </div> */}
                        <div
                            className='add-new-page__input__body'
                            contentEditable='true'
                            data-placeholder='Sebenarnya saya adalah ....'
                            onInput={this.onBodyChangeHandler}
                            spellCheck='false'
                            suppressContentEditableWarning={true}
                        >
                            {/* {parser(this.state.body)} */}
                        </div>

                    </div>
                    <div className="field-group">
                        <button value="submit" id="btnSubmitForm">Buat Catatan</button>
                    </div>
                </div>
            </form>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;
