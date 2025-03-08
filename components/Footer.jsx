import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='px-[1rem] py-[3rem] md:px-[3rem] bg-black text-gray-200 flex items-center justify-evenly'>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Phone #</li>
                    <li>email</li>
                    <li>location</li>
                    <li>time</li>
                </ul>

                <ul className='flex items-center gap-3'>
                    <li>facebook</li>
                    <li>tik tok</li>
                    <li>youtube</li>
                </ul>
            </div>

            <div>
                <h3>About Hashing</h3>
                <ul>
                    <li>The Hash House Harriers (abbreviated to HHH or H3) <br /> is an international group of non-competitive running social clubs.</li>
                    <li>An event organized by a club is known as a hash, hash run or <br /> simply hashing, with participants calling themselves hashers or <br /> hares and hounds. New to the Hash?</li>
                </ul>
            </div>

            <div>
                <h3>Navigate</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Photo-Blast</li>
                    <li>Misma</li>
                    <li>#NWTS</li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer
