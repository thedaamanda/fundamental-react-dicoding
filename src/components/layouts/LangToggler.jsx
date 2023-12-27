import React, { useEffect, useState } from 'react'
import { MdGTranslate } from "react-icons/md";

function LangToggler() {
    return (
        <button className="lang-toggler">
            <MdGTranslate />
        </button>
    )
}

export default LangToggler
