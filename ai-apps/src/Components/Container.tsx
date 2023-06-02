//@ts-nocheck
'use client';
import {FiSend} from 'react-icons/fi'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import getReply from '@/Utils/getReply';
import getStory from '@/Utils/getStory';
import getTitle from '@/Utils/getTitle';
import getCast from '@/Utils/getCast';
import getImagePrompt from '@/Utils/getImagePrompt';
import getImageUrl from '@/Utils/getImageUrl';

// STOP FOR A SEC AND WRITE OUT SOME COMMENTS!!!!!!

const Container = () => {
  //state for loading svg
  const [isLoading, setIsLoading] = useState(false)
  //state for fetchedReply
  const [fetchedReply, setFetchedReply] = useState(null)
  //state for fetchStory
  const [fetchedStory, setFetchedStory] = useState(null)
  //state for fetchedTitle
  const [fetchedTitle, setFetchedTitle] = useState(null)
  //state for fetchedCast 
  const [fetchedCast, setFetchedCast] = useState(null)
  //state for fetchedImagePrompt
  const [fetchedImagePrompt, setFetchedImagePrompt] = useState(null)
  //state for fetchedImageUrl
  const [fetchedImageUrl, setFetchedImageUrl] = useState(null)

  // state for watching text area input
  const [isInput, setIsInput] = useState({})

  // get responses for initial response and synopsis response
  const handleClick = async () => {
    setIsLoading(true) 
    try {
      const response = await getReply(isInput.value)
      setFetchedReply(response)
      const storyResponse = await getStory(isInput.value)
      setFetchedStory(storyResponse)
      const titleResponse = await getTitle(isInput.value)
      setFetchedTitle(titleResponse)
      const castResponse = await getCast(isInput.value)
      setFetchedCast(castResponse)
      const imagePromptResponse = await getImagePrompt(isInput.value)
      setFetchedImagePrompt(imagePromptResponse)
      const imageUrlResponse = await getImageUrl(isInput.value)
      setFetchedImageUrl(imageUrlResponse)
    }
    catch(error) {
      console.log(error)
      setFetchedReply(null)
      setFetchedStory(null)
      setFetchedTitle(null)
      setFetchedCast(null)
      setFetchedImagePrompt(null)
      setFetchedImageUrl(null)
    }
    setIsLoading(false)
  }

  // watch every keystroke from text area
  const handleChange = (e)=> {
    const {value} = e.target
    setIsInput({...isInput, value})
  }

  useEffect(() => console.log(isInput), [isInput])


  return ( 
    <main>
    <section className="border-2 border-red-700">
      {fetchedReply ? (
          <div id='output'>
          <div id='image-container' ></div>
          <p>{fetchedReply}</p>

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
          <form action="submit" >
        <textarea
          name='movie idea'
          className=""
          placeholder="In a hopeless moment, a sloth comes to save the day"
          onChange={handleChange}
        />
        <button type='button' onClick={handleClick}><FiSend /></button>
        </form>
        )}
      </div>
      </div>
          )}
    </section>
    <section>
      <div>
        {fetchedStory ? (
          <div>
            <h1 className='  text-2xl'>{fetchedTitle}</h1>
            <p>{fetchedCast}</p>
            {/* fetchedCast displays none for some reason
            as in can't find names from the generated 
            story so it needs to be fixed.
             */}
            <p>{fetchedStory}</p>
            <img src={fetchedImageUrl} alt="" />
          </div>
        
        ) : null}
      </div>
    </section>
    </main>
    
    


  );
} 
export default Container;