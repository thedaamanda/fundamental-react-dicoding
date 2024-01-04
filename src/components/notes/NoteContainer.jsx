import React from 'react';
import PropTypes from 'prop-types';

function NoteContainer({ tagline, noteTitle, children }) {
    return (
        <div className='form-groups'>
            <div className='heading'>
                <span className='tagline'>{tagline}</span>
                <h2 className='title'>{noteTitle}</h2>
            </div>
            {children}
        </div>
    );
}

NoteContainer.propTypes = {
    tagline: PropTypes.string.isRequired,
    noteTitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default NoteContainer;
