import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils/data';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        }
    }

    render() {
        return (
            <div className="note-app">
                <NoteHeader />
                <NoteBody notes={this.state.notes} />
            </div>
        );
    }
}

export default NoteApp;
