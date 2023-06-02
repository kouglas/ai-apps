//@ts-nocheck
import { Configuration, OpenAIApi } from 'openai'
import { process } from "./env";
// import {getImagePrompt} from "./getImagePrompt"



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

// const {getImagePrompt} = imagePrompt

async function getImageUrl(imagePrompt) {
  const response = await openai.createImage({
    prompt: `${imagePrompt} There should be no text in this image.`,
    n: 1,
    size: '512x512',
    response_format: 'url',
  })

  return response.data.data[0].url 

}


export default getImageUrl