import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditBookmarkDto {
    @IsOptional()
    @IsString()
    title?:string;

    @IsOptional()
    @IsString()
    link?:string;

    @IsOptional()
    @IsString()
    description?:string;
}