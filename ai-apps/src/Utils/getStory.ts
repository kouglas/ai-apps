//@ts-nocheck
import { Configuration, OpenAIApi } from 'openai'
import { process } from "./env";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

async function getStory(userInput){
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Generate an engaging, professional and marketable movie synopsis based on an outline.
    The synopsis should include actors names in brackets after each character. Choose actors that 
    would be ideal for this role
    ###
    outline: A big-headed daredevil fighter pilot goes back to school only to be sent on a deadly mission.
    movie synopsis: The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite 
    flying skills. When hotshot fighter pilot Maverick (Tom Cruise) is sent to the school, his reckless attitude and 
    cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val Kilmer). But 
    Maverick isn't only competing to be the top fighter pilot, he's also fighting for the attention of his beautiful 
    flight instructor, Charlotte Blackwood (Kelly McGillis). Maverick gradually earns the respect of his instructors 
    and peers - and also the love of Charlotte, but struggles to balance his personal and professional life. As the 
    pilots prepare for a mission against a foreign enemy, Maverick must confront his own demons and overcome the 
    tragedies rooted deep in his past to become the best fighter pilot and return from the mission triumphant.
    ###
    outline: ${userInput}
    movie synopsis:
    `,
    
    max_tokens: 2000,
  })
  return response.data.choices[0].text?.trim()
}



export default getStory