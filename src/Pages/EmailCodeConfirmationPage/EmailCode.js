import React from 'react'
import '../EmailCodeConfirmationPage/EmailCode.css'

const EmailCode = () => {
  return (
    <>
    <section className="email-code">
        <div className="emailcode">
        <h1>Enter Code</h1>
        <p>We have sent you access code via email for verification</p>
        <div className="code">
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
        <div className="resend">
          <p>If you didn’t receive a code, </p>
          <p className='resend-code'>Resend</p>
        </div>
        <button>Verify</button>
        </div>
    </section>
    </>
  )
}

export default EmailCode