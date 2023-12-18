import React from 'react';
import { getActiveNotes } from '../utils/local-data';
import { ToastContainer, toast } from 'react-toastify';

import Search from '../components/Search';
import NoteHeader from '../components/NoteHeader';
import NoteList from '../components/NoteList';
import NoteContainer from '../components/NoteContainer';
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            searchKeyword: props.defaultKeyword || '',
        }

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState({ searchKeyword: keyword });
    }

    render() {
        const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

        return (
            <div>
                {/* <NoteHeader addNote={this.onAddNoteHandler} /> */}
                {/* <NoteBody notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} searchKeyword={this.state.searchKeyword} onSearch={this.onSearchHandler} /> */}
                <section className="result-section">
                    <Search searchKeyword={this.state.searchKeyword} onSearch={this.onSearchHandler} />
                    <div className="padding-tb">
                        <div className="result-container">
                            <div className="row-center-padding" id="list-note">
                                <NoteContainer tagline="Daftar Catatan" noteTitle="Catatan Aktif">
                                    <NoteList noteList={notes} />
                                </NoteContainer>
                            </div>
                        </div>
                    </div>
                </section>
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

export default HomePage;
