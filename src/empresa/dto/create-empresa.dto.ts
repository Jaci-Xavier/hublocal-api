import { IsString, IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { IsCnpjValid } from '../../common/utils/IsCnpjValid';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Validate(IsCnpjValid)
  cnpj: string;

  @IsOptional()
  @IsString()
  website?: string;
}
