import { IsString, IsOptional, IsDateString } from 'class-validator';

export class EmpresaDto {
    id: string;

    @IsString()
    nome: string;

    @IsString()
    cnpj: string;

    @IsOptional()
    @IsString()
    website?: string;

    @IsDateString()
    createdAt: Date;

    @IsDateString()
    updatedAt: Date;
}



