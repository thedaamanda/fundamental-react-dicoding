import React from 'react'
import { Link } from 'react-router-dom'

function NoteItemBody({ id, title, body }) {
    return (
        <>
            <h4 className="title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h4>
            <p className="body">{body}</p>
        </>
    )
}

export default NoteItemBody
