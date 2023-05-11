'use client';
//@ts-nocheck
import {FiSend} from 'react-icons/fi'
import { useState, useEffect } from 'react';
import Image from 'next/image';


const Container = () => {

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    console.log('hey')
  }

  const handleSubmit = (e) => {
    // prevent browser reload
    e.preventDefault()

    // read form data
    const form = e.target
    const formData = new FormData(form)
    const formJSON = Object.fromEntries(formData.entries())
    console.log(formJSON)
  }

  return ( 
    <section className="border-2 border-red-700">
      <div id="speech-bubble-ai"> 
      {isLoading ? null : (
          <p id="movie-boss-text">
          Provide me you idea and I will give you
          a synopsis, movie poster, and cast!
        </p> 
      )} 
      <div>
        {isLoading ? (
          <div>
            <p>generating idea now</p>
            <Image width={50} height={50} src='loading.svg' alt='Loading...'/>
          </div>  
        ) : (
          <form action="" onSubmit={handleSubmit}>
        <textarea
          name='movie idea'
          className=""
          defaultValue="In a hopeless moment, a sloth comes to save the day"
        />
        <button type='submit' onClick={handleClick}><FiSend /></button>
        </form>
        )}
      </div>
      </div>
      
      <div>
        <div id='image-container' ></div>
        <h1 id='output-title'>Put title here</h1>
        <h2 id='output-stars'>put cast here</h2>
        <p id='output-text'>put text here</p>
      </div>
      
    </section>
    
    


  );
} 
export default Container;