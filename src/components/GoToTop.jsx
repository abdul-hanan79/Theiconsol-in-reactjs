import React, { useEffect, useState } from 'react'

function GoToTop() {
    const [visible, setvisible] = useState(false)
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    const listenScroll = () => {
        let heightHidden = 250;
        const winscroll = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(winscroll)
        if (winscroll > heightHidden) {
            setvisible(true)
        }
        else {
            setvisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScroll)
    }, [])
    return (
        <>
            {visible && (<div className='gototop' onClick={goToBtn}>
                <i class="fa-solid fa-arrow-up "></i>

            </div>)}
        </>
    )
}

export default GoToTop