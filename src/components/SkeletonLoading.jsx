import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import useTheme from "../hooks/useTheme";

function SkeletonLoading({ total }) {
    const [ theme ] = useTheme();

    return (
        <>
            {
                Array(total).fill().map((item, index) => (
                    <div key={index} className="list-result">
                        <div className="list-skeleton">
                            <SkeletonTheme {...theme === 'dark' ? { baseColor: '#2a3748', highlightColor: '#3c4858' } : {}}>
                                <Skeleton height={25} />
                                <Skeleton height={35} />
                                <Skeleton height={20} />
                            </SkeletonTheme>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SkeletonLoading;
