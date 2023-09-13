import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note-app">
                <NoteHeader />
                <NoteBody />
            </div>
        );
    }
}

export default NoteApp;
