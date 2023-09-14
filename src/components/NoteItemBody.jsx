import React from 'react'

function NoteItemBody({ title, body }) {
    return (
        <>
            <h4 className="title">{title}</h4>
            <p className="body">{body}</p>
        </>
    )
}

export default NoteItemBody
