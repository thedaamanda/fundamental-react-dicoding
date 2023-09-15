import React from 'react'

function NoteContainer({ tagline, noteTitle, children }) {
    return (
        <div className="flex-item">
            <div className="form-groups">
                <div className="heading">
                    <span className="tagline">{tagline}</span>
                    <h2 className="title">{noteTitle}</h2>
                </div>
                {children}
            </div>
        </div>
    )
}

export default NoteContainer
