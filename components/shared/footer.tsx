'use client'

import { ChevronUp } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
            variant='ghost'
            className="bg-gray-800 w-full rounded-none"
            onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ChevronUp className="mr-2 h-4 w-4" /> Back to Top       
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
            <Link href='/page/conditions-of-use'>Condition of use</Link>
            <Link href='/page/conditions-of-use'>Privacy Notice</Link>
            <Link href='/page/conditions-of-use'>Help</Link>
        </div>
        <div className="flex justify-center text-sm">
        <p> ©</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          dedeed
        </div>
      </div>
    </footer>
  )
}

export default Footer
