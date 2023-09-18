import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generationAiCompletionRoute } from './routes/generate-ai-completion';

const app = Fastify();

app.register(fastifyCors, {
  origin: '*' //endereço do meu front
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generationAiCompletionRoute);

app
  .listen({
    port: 3000
  })
  .then(() => console.log('server is running!!'));
