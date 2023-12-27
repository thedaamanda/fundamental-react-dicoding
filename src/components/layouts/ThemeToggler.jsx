import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun} from "react-icons/fi";

function ThemeToggler() {
    return (
        <button className="theme-toggler">
            <FiMoon />
        </button>
    )
}

export default ThemeToggler
