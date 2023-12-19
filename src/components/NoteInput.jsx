import React from 'react';
import PropTypes from 'prop-types';

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
                body: event.target.value,
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
                    <div className="field-group">
                        <textarea placeholder="Tuliskan Catatanmu disini ..." id="inputBodyDescription" rows="5" value={this.state.body} onChange={this.onBodyChangeHandler} required></textarea>
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
