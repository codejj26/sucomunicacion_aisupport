import { IsNotEmpty, IsString } from "class-validator";


export class QuestionDto {
    
    @IsString()
    @IsNotEmpty()
    readonly threadId: string;

    @IsNotEmpty()
    @IsString()
    readonly question: string;
}