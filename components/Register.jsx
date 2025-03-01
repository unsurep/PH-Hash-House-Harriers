'use client';

import React from 'react'
import Image from 'next/image';

const Register = () => {
  return (
    <>
      <div className='flex flex-col items-center '>
        <h1>REGISTER HERE</h1>

        <div className='flex gap-10 items-center justify-center'>
          <div>
            <Image src='/image/locked.svg' width={100} height={100} alt='svg' className=''/>
            <h1>Port Harcourt Hash House Harriers <span>#NWTS</span></h1>
            <h3>A running club with a drinking problem</h3>
            <h3>A drinking club with a running problem</h3>
          </div>


          <div>
            <h1>Register to access #NWTS</h1>

            <form>
              {/* hash handle */}
              <div>
                <label>Hash Handle</label>
                <input type="text"
                  placeholder='Enter hash Name' 
                  className=''
                  />
              </div>

              {/* Kennel */}
              <div>
                <label>Kennel</label>
                <input type="text"
                  placeholder='Enter kennel' 
                  className=''
                  />
              </div>

              {/* What'sapp number  */}
              <div>
                <label>Kennel</label>
                <input type="number"
                  placeholder='Enter Whatsapp number' 
                  className=''
                  />
              </div>

              {/* Password */}
              <div>
                <label>Kennel</label>
                <input type="password"
                  placeholder='Enter Passwordr' 
                  className=''
                  />
              </div>

              <div>
                <button>Submit form</button>
              </div>
            </form>

            <p>Already registeredy, clikc here to <span>login</span></p>

          </div>
        </div>






      </div>
    </>
  )
}

export default Register;
