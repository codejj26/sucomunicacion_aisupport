import OpenAI from "openai";
import { Message, TextContentBlock } from "openai/resources/beta/threads/messages";

interface Options {
    threadId: string;
}

export const listMessagesUseCase = async (openai: OpenAI, options: Options) => {
    const { threadId } = options;

    const messages = await openai.beta.threads.messages.list(threadId);

    return messages.data.map((message: Message) => ({
        role: message.role,
        content: message.content.map(((content: TextContentBlock) => content.text.value))
    })).reverse();
}