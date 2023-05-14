//@ts-nocheck

async function getData() {
  const url = "https://api.openai.com/v1/completions"
  const apiKey = "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"

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': 'Give me an enthusiastic response in 6 words or less ',
    })
  }).then(response => {
    if(response.ok) {
      return response.json()
    }
    else {
      throw new Error('failed to fetch data')
    }
  })
  .catch(error => console.error(error));

return response;
}

export default getData

