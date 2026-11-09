import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    try {

    } catch (error) {

    }
  }
  return (
    <section className='lg:py-20 py-14' id='contact'>
      <div className='px-5 lg:px-0 lg:w-300 mx-auto justify-center items-center h-auto space-y-5'>
        <div className='text-center'>
          <div className="inline-flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-foreground"></div>Communication leads to connection</div>
          <h2 className='lg:text-2xl uppercase font-semibold'>I will like to hear from you</h2>
        </div>
        <div className='lg:w-120 mx-auto mt-14'>
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <Input type={'text'} placeholder="Oluwafemi Michael" className={"h-12"} />
            </div>
            <div>
              <Input type={'email'} placeholder="username@gmail.com" className={"h-12"} />
            </div>
            <div>
              <Textarea placeholder="Like to say something..." className={"h-35 resize-none"} />
            </div>

            <Button variant='secondary' className={"w-full h-12 cursor-pointer"} >Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
