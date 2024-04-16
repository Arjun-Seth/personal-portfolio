import React from 'react'

const ContactForm = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 w-full px-20" id='contact'>
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Contact
            </h1>
            <form className='mt-12 flex flex-col gap-8'>
                <input type="text" />

            </form>
            {/* <input type="text" /> */}
        </div>
    )
}

export default ContactForm