import React from "react"
import manageImg from '/images/manage-data.png'

function ImageHeader() {
    return (
        <div className="preview-image">
            <img src={manageImg} alt="Manage Image" />
        </div>
    )
}

export default ImageHeader
