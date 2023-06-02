//@ts-nocheck
import { Configuration, OpenAIApi } from 'openai'
import { process } from "./env";



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

// delete configuration.baseOptions.headers['User-Agent'];


async function getTitle(story){
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Generate an engaging and unique movie title for this story: ${story}
    `,
    max_tokens: 25,
    temperature: 0.7 ,  
  })
  return response.data.choices[0].text?.trim()


}

export default getTitle