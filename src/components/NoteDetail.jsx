import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

function NoteDetail({ title, body, createdAt  }) {
    return (
        <div className="note-detail">
            <div className="heading">
                <h2 className="title">{title}</h2>
                <p className="date">{showFormattedDate(createdAt)}</p>
            </div>
            <div className="note-body">
                <p className="body">{body}</p>
            </div>
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
 }

export default NoteDetail;
