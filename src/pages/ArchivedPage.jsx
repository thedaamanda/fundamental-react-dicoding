import React from 'react';
import PropTypes from 'prop-types';
import { getArchivedNotes } from '../utils/network-data';
import Search from '../components/layouts/Search';
import NoteList from '../components/notes/NoteList';
import NoteContainer from '../components/notes/NoteContainer';
import { useSearchParams } from 'react-router-dom';
import SkeletonLoading from '../components/layouts/SkeletonLoading'
import useLanguage from '../hooks/useLanguage'

function ArchivedPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const textArchived = useLanguage('archived')

    const [searchKeyword, setSearchKeyword] = React.useState(() => {
        return searchParams.get('keyword') || '';
    });

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
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
                        <div className="row-center-padding" id="list-archived-note">
                            <NoteContainer tagline={textArchived.tagline} noteTitle={textArchived.title}>
                                {!loading ? <NoteList noteList={filteredNotes} /> : <SkeletonLoading total={5} /> }
                            </NoteContainer>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

ArchivedPage.propTypes = {
    searchKeyword: PropTypes.string,
    onSearch: PropTypes.func,
};

export default ArchivedPage;
