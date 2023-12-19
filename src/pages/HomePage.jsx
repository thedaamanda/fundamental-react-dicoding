import React from 'react';
import PropTypes from 'prop-types';
import { getActiveNotes } from '../utils/local-data';
import Search from '../components/Search';
import NoteList from '../components/NoteList';
import NoteContainer from '../components/NoteContainer';
import HomePageAction from '../components/HomePageAction';
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
        this.setState(() => {
            return {
                searchKeyword: keyword,
            };
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

        return (
            <div>
                <section className="result-section">
                    <Search searchKeyword={this.state.searchKeyword} onSearch={this.onSearchHandler} />
                    <div className="padding-tb">
                        <div className="result-container">
                            <div className="row-center-padding" id="list-active-note">
                                <NoteContainer tagline="Daftar Catatan" noteTitle="Catatan Aktif">
                                    <NoteList noteList={notes} />
                                </NoteContainer>
                            </div>
                        </div>
                    </div>
                </section>
                <HomePageAction />
            </div>
        );
    }
}

HomePage.propTypes = {
    keywordChange: PropTypes.func.isRequired,
    defaultKeyword: PropTypes.string
}

export default HomePageWrapper;
