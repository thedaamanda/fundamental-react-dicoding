import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import useLanguage from '../../hooks/useLanguage';

function NoteList({ noteList }) {
    const text = useLanguage('app');

    return (
        <div className='list-result'>
            {noteList.length ? (
                noteList.map((note) => (
                    <NoteItem key={note.id} id={note.id} {...note} />
                ))
            ) : (
                <div className='empty-state'>
                    <h3 className='title'>{text.list.empty.title}</h3>
                    <p className='body'>{text.list.empty.description}</p>
                </div>
            )}
        </div>
    );
}

NoteList.propTypes = {
    noteList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
