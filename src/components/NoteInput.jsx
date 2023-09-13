import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form action="#" id="note-form">
                <div className="form-groups">
                    <div className="heading">
                        <span className="tagline">Formulir Catatan</span>
                        <h2 className="title">Simpan Catatanmu</h2>
                    </div>
                    <div className="field-group">
                        <input type="text" placeholder="Isi Judul" id="inputNoteTitle" required />
                    </div>
                    <div className="field-group">
                        <textarea placeholder="Tuliskan Catatanmu disini ..." id="inputBodyDescription" rows="5" required></textarea>
                    </div>
                    <div className="field-group">
                        <button value="submit" id="btnSubmitForm">Buat Catatan</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default NoteInput;
