import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';
import Skeleton from 'react-loading-skeleton'

function NoteDetail({ title, body, createdAt  }) {
    return (
        <div className="note-detail">
            <div className="heading">
                <h2 className="title">{title || <Skeleton />}</h2>
                <p className="date">{createdAt ? showFormattedDate(createdAt) : <Skeleton />}</p>
            </div>
            <div className="note-body">
                {body ? parser(body) : <Skeleton count={3} />}
            </div>
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
 }

export default NoteDetail;
