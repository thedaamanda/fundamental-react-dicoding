import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ noteList }) {
 return (
    <div className="list-result">
        { noteList.length ?
            noteList.map(note => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    {...note} />
            ))
            :
            <div className="empty-state">
                <h3 className="title">Tidak ada catatan</h3>
                <p className="body">Silahkan tambahkan catatan baru</p>
            </div>
        }
    </div>
 );
}

NoteList.propTypes = {
    noteList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;
