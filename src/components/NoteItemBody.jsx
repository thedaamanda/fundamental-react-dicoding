import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { extractContent } from '../utils';

function NoteItemBody({ id, title, body }) {
    return (
        <>
            <h4 className='title'>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h4>
            <p className='body'>{extractContent(body)}</p>
        </>
    );
}

NoteItemBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteItemBody;
