import Container from '@/Components/Container'
import Test from '@/app/test'
import Image from 'next/image'
import Link from 'next/link'
import { BiCameraMovie } from 'react-icons/bi'


export default function Home() {
  return (
    <main className="">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="absolute justify-center flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit font-extrabold tracking-widest pl-8">
          <Link href="#" className=' text-5xl'>Movie Pitch </Link>
          <BiCameraMovie size={55} />
        </h1> 
      </div>
      <div className='absolute mt-40'>
        {/* <Test /> */}
        <Container />
      </div>    
            



    </main>
  )
}
