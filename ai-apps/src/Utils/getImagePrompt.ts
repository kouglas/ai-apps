//@ts-nocheck
import { Configuration, OpenAIApi } from 'openai'
import { process } from "./env";



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

async function getImagePrompt(title, synopsis) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Give a short description of an image which could be used to advertise a movie based on a title 
    and synopsis. The description should be rich in visual detail but contain no names.
    ###
    title: Love's Time Warp
    synopsis: When scientist and time traveller Wendy (Emma Watson) is sent back to the 1920s to assassinate a 
    future dictator, she never expected to fall in love with them. As Wendy infiltrates the dictator's inner circle, 
    she soon finds herself torn between her mission and her growing feelings for the leader (Brie Larson). With the 
    help of a mysterious stranger from the future (Josh Brolin), Wendy must decide whether to carry out her mission 
    or follow her heart. But the choices she makes in the 1920s will have far-reaching consequences that reverberate 
    through the ages.
    image description: A silhouetted figure stands in the shadows of a 1920s speakeasy, her face turned away from the 
    camera. In the background, two people are dancing in the dim light, one wearing a flapper-style dress and the other 
    wearing a dapper suit. A semi-transparent image of war is super-imposed over the scene.
    ###
    title: zero Earth
    synopsis: When bodyguard Kob (Daniel Radcliffe) is recruited by the United Nations to save planet Earth from the 
    sinister Simm (John Malkovich), an alien lord with a plan to take over the world, he reluctantly accepts the challenge. 
    With the help of his loyal sidekick, a brave and resourceful hamster named Gizmo (Gaten Matarazzo), Kob embarks on
    a perilous mission to destroy Simm. Along the way, he discovers a newfound courage and strength as he battles Simm's
    merciless forces. With the fate of the world in his hands, Kob must find a way to defeat the alien lord and save 
    the planet.
    image description: A tired and bloodied bodyguard and hamster standing atop a tall skyscraper, looking out over a 
    vibrant cityscape, with a rainbow in the sky above them.
    ###
    title: ${title}
    synopsis: ${synopsis}
    image description:
    `,
    temperature: 0.8,
    max_tokens: 100
  })
  return response.data.choices[0].text?.trim()
  // console.log(response.data.choices[0].text?.trim())

}


export default getImagePrompt