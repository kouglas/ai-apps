//@ts-nocheck
import { process } from "./env";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

async function getReply(userInput) {

  const response = await openai.createCompletion({

    model: 'text-davinci-003',
    prompt: `Generate a short message to enthusiastically say the user input sounds interesting and that you need some minutes to think about it.
    ###
    user input: "Two dogs fall in love and move to Hawaii to learn to surf.
    response: "I'll need to think about that. But your idea is amazing! I love the bit about Hawaii!
    ###
    user input: "A plane crashes in the jungle and the passengers have to walk 1000km to safety.
    "
    response: "I'll spend a few moments considering that. But I love your idea!! A disaster movie in the jungle!
    "
    ###
    user input: "A group of corrupt lawyers try to send an innocent woman to jail.
    response: "Wow that is awesome! Corrupt lawyers, huh? Give me a few moments to think!"
    ###
    user input: ${userInput}
    response: 
    `,
    max_tokens: 60,
  })
  return response.data.choices[0].text?.trim()
}



export default getReply

