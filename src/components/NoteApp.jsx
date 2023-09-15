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

        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onArchivedHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                note.archived = !note.archived;
            }
            return note;
        });

        this.setState({ notes });
    }

    onSearchHandler(query) {
        if (!query) {
            this.setState({ notes: getInitialData() });
            return;
        }

        const notes = this.state.notes.filter(note => {
            const title = note.title.toLowerCase();
            const body = note.body.toLowerCase();
            const q = query.toLowerCase();

            return title.includes(q) || body.includes(q);
        });

        this.setState({ notes });
    }

    render() {
        return (
            <div className="note-app">
                <NoteHeader />
                <NoteBody notes={this.state.notes} onArchived={this.onArchivedHandler} onSearch={this.onSearchHandler} />
            </div>
        );
    }
}

export default NoteApp;
