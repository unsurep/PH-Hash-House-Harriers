import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='px-[1rem] md:px-[3rem] bg-black text-gray-200 flex'>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Phone #</li>
                    <li>email</li>
                    <li>location</li>
                    <li>time</li>
                </ul>

                <ul>
                    <li>facebook</li>
                    <li>tik tok</li>
                    <li>youtube</li>
                </ul>
            </div>

            <div>
                <h3>About Hashing</h3>
                <ul>
                    <li>The Hash House Harriers (abbreviated to HHH or H3) is an international group of non-competitive running social clubs.</li>
                    <li>An event organized by a club is known as a hash, hash run or simply hashing, with participants calling themselves hashers or hares and hounds. New to the Hash?</li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer
