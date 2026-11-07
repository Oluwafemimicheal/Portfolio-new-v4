import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const WorkFlow = () => {
  return (
    <section className='py-10 h-160'>
      <div className='w-300 mx-auto flex justify-between gap-5 h-full'>
        <div className='mt-10 flex flex-col'>
          <div className="grow space-y-2">
            <div className='inline-flex items-center gap-2 text-sm font-semibold'><div className="w-2 h-2 rounded-full bg-accent-foreground"></div>How i work</div>
            <h2 className="text-3xl font-bold">From the first conversation to the final delivery, every step is carefully planned to build a reliable digital product.</h2>
            <p className='text-muted-foreground'>Following a well planned step to work brings in a seamless product to life, and give room for improvement and scalable all through the product live span.</p>
          </div>
          <div className='flex justify-between items-end'>
            <ul className='text-xs space-y-2'>
              <li className='uppercase'>
                <span className='inline-flex gap-3'>01 <p>Understand</p></span>
              </li>
              <li className='uppercase'>
                <span className='inline-flex gap-3'>02 <p>Discover</p></span>
              </li>
              <li className='uppercase'>
                <span className='inline-flex gap-3'>03 <p>Create</p></span>
              </li>
              <li className='uppercase'>
                <span className='inline-flex gap-3'>04 <p>Refine</p></span>
              </li>
              <li className='uppercase'>
                <span className='inline-flex gap-3'>05 <p>Deliver</p></span>
              </li>
            </ul>
            <div className='w-100 h-60 p-5 rounded-md border border-muted-foreground flex flex-col justify-between'>
              <div className='flex justify-between grow'>
                <div className='w-2 h-2 bg-blue-700 rounded-full'></div>
                <p className='uppercase text-muted-foreground text-xs '>05 - project manager</p>
              </div>

              <div className='space-y-3'>
                <h2 className='text-md'>Understanding Before Building</h2>
                <p className='text-muted-foreground text-xs'>Every great solution begins with understanding your business. your users and the challenges starding in the way of a better experience.</p>

                <Button className={"secondary"} size='xs'>Contact Me <ArrowRight/></Button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full border border-muted-foreground p-5 rounded-md bg-muted-foreground/10 backdrop-blur-xs'>
           
        </div>
      </div>
    </section>
  )
}

export default WorkFlow
