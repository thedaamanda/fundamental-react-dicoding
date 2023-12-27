import React from 'react';
import PropTypes from 'prop-types';
import { getActiveNotes } from '../utils/network-data';
import Search from '../components/Search';
import NoteList from '../components/NoteList';
import NoteContainer from '../components/NoteContainer';
import HomePageAction from '../components/HomePageAction';
import { useSearchParams } from 'react-router-dom';

// function () {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const keyword = searchParams.get('keyword');
//     function changeSearchParams(keyword) {
//       setSearchParams({ keyword });
//     }

//     return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
// }

// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             notes: getActiveNotes(),
//             searchKeyword: props.defaultKeyword || '',
//         }

//         this.onSearchHandler = this.onSearchHandler.bind(this);
//     }

//     onSearchHandler(keyword) {
//         this.setState(() => {
//             return {
//                 searchKeyword: keyword,
//             };
//         });

//         this.props.keywordChange(keyword);
//     }

//     render() {
//         const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

//         return (
//             <div>
//                 <section className="result-section">
//                     <Search searchKeyword={this.state.searchKeyword} onSearch={this.onSearchHandler} />
//                     <div className="padding-tb">
//                         <div className="result-container">
//                             <div className="row-center-padding" id="list-active-note">
//                                 <NoteContainer tagline="Daftar Catatan" noteTitle="Catatan Aktif">
//                                     <NoteList noteList={notes} />
//                                 </NoteContainer>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <HomePageAction />
//             </div>
//         );
//     }
// }

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
                                <NoteList noteList={filteredNotes} />
                            </NoteContainer>
                        </div>
                    </div>
                </div>
            </section>
            <HomePageAction />
        </div>
    );
}

export default HomePage;
