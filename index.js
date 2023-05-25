import express  from 'express';
import { Configuration, OpenAIApi } from "openai";

const app = express();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
    const animal = req.body;

    const response = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: `Tell me a joke about a ${animal.name} that drank coffee`,
        temperature: 0.6,
      });

      if (response.data.choices[0].text){
        res.json({message: response.data.choices[0].text})
        console.log({message: response.data.choices[0].text})
    };
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});