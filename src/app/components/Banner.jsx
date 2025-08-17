import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section>
        <div className='container relative aspect-[3/1] mb-12'>
        <Image src="/featured.png" alt="Featured Product" fill />
        </div>
    </section>
  )
}

export default Banner