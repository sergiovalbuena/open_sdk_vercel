import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(request) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true, //para que la respuesta sea un stream
    messages: [
      {
        role: "system",
        content:
          "Comportate como si fueras un chef y responde las pregintas que envia el user",
      },
      {
        role: "user",
        content: "",
      },
    ],
    max_tokens: 500,
    temperature: 0.5,
    top_p: 1,
    presence_penalty: 1,
    frequency_penalty: 1,
  });

  //console.log(response);

  // return new Response(
  //   JSON.stringify({
  //     message: "Entendiendo el SDK de Vercel para IA",
  //   }),
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  //transformar la respuesta ade OpenAi en un text-stream
  const stream = OpenAIStream(response);
  // console.log(stream);
  return new StreamingTextResponse(stream);
}
