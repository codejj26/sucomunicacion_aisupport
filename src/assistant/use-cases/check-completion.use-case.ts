import OpenAI from "openai";

interface Options {
    threadId: string;
    runId: string;
}

export const checkCompletionUseCase = async (openai: OpenAI, options: Options) => {

    await new Promise(resolve => setTimeout(resolve, 1000));

    const { threadId, runId } = options;
    const run = await openai.beta.threads.runs.retrieve(threadId, runId);

    if (run.status === 'completed') {
        return run;
    }

    if (run.status === 'failed') {
        throw new Error('Mensaje fallido');
    }

    return await checkCompletionUseCase(openai, options);
}