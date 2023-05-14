//@ts-nocheck
'use client';
import {FiSend} from 'react-icons/fi'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import getData from '@/Utils/Fetch';


const Container = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)

  const handleClick = async () => {
    setIsLoading(true) 
    try {
      const response = await getData()
      setFetchedData(response)
    }
    catch(error) {
      console.log(error)
      setFetchedData(null)
    }
    setIsLoading(false)
  
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
  console.log(getData())

  return ( 
    <section className="border-2 border-red-700">
      {fetchedData ? (
          <div id='output'>
          <div id='image-container' ></div>
          <p>{fetchedData.choices[0].text}</p>

          </div> 
          ) : (
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
      
          )}
      
    </section>
    
    


  );
} 
export default Container;