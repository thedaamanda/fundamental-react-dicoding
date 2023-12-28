import React from "react"
import Skeleton from 'react-loading-skeleton'

function SkeletonLoading({ total }) {
    return (
        <>
            {
                Array(total).fill().map((item, index) => (
                    <div key={index} className="list-result">
                        <div className="list-skeleton">
                            <Skeleton height={25} />
                            <Skeleton height={35} />
                            <Skeleton height={20} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SkeletonLoading;
