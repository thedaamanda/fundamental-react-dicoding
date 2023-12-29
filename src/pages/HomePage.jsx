import React from 'react';
import PropTypes from 'prop-types';
import { getActiveNotes } from '../utils/network-data';
import Search from '../components/Search';
import NoteList from '../components/NoteList';
import NoteContainer from '../components/NoteContainer';
import HomePageAction from '../components/HomePageAction';
import { useSearchParams } from 'react-router-dom';
import SkeletonLoading from '../components/SkeletonLoading'

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const [searchKeyword, setSearchKeyword] = React.useState(() => {
        return searchParams.get('keyword') || '';
    });

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data);
            setLoading(false);
        });
    }, []);

    function changeSearchParams(keyword) {
        setSearchKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchKeyword.toLowerCase()));

    return (
        <div>
            <section className="result-section">
                <Search searchKeyword={searchKeyword} onSearch={changeSearchParams} />
                <div className="padding-tb">
                    <div className="result-container">
                        <div className="row-center-padding" id="list-active-note">
                            <NoteContainer tagline="Daftar Catatan" noteTitle="Catatan Aktif">
                                {!loading ? <NoteList noteList={filteredNotes} /> : <SkeletonLoading total={5} /> }
                            </NoteContainer>
                        </div>
                    </div>
                </div>
            </section>
            <HomePageAction />
        </div>
    );
}

HomePage.propTypes = {
    searchKeyword: PropTypes.string,
    onSearch: PropTypes.func,
};

export default HomePage;
