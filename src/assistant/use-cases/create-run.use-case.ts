import OpenAI from "openai";

interface Options {
    threadId: string;
    assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {
    const { threadId, assistantId = 'asst_KKJbSfBkeL4JpX0D16vblXLb' } = options;
    
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId
    });
    
    return run;
};