import React from 'react';
import { getInitialData } from '../utils/data';
import { ToastContainer, toast } from 'react-toastify';

import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import 'react-toastify/dist/ReactToastify.min.css';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        try {
            this.setState((prevState) => {
                return {
                    notes: [
                        ...prevState.notes,
                        {
                            id: +new Date(),
                            title,
                            body,
                            archived: false,
                            createdAt: new Date(),
                        },
                    ],
                };
            });

            toast.success("Catatan berhasil ditambahkan");
        } catch (error) {
            toast.error("Catatan gagal ditambahkan");
        }
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });

        toast.success("Catatan telah dihapus");
    }

    onArchivedHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                note.archived = !note.archived;
            }
            return note;
        });

        this.setState({ notes });

        if (notes.find(note => note.id === id).archived) {
            toast.success("Catatan berhasil diarsipkan");
        } else {
            toast.success("Catatan dipulihkan dari arsip");
        }
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
            <div>
                <NoteHeader addNote={this.onAddNoteHandler} />
                <NoteBody notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} onSearch={this.onSearchHandler} />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                    theme="colored" />
            </div>
        );
    }
}

export default NoteApp;
