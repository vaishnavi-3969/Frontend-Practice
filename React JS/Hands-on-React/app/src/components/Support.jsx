import React, { useEffect, useState } from 'react'

const Support = () => {
    const [count, setCount] = useState(0);
    const pageTitle = document.title;

    useEffect(() => {
        if(count>0){
            // document.title = `${pageTitle}--(${count})`;
            count && (document.title = `${pageTitle} - ${count}`)
        }
    })
    return (
        <div>
            <div className='button__outline'>
                <button className='outline' onClick={() => setCount(count + 1)}>
                    {
                        count === 0 ? "Click to support" : `Supported ${count} times`
                    }
                </button>
            </div>

        </div>
    )
}

export default Support