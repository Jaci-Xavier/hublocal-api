import { IsString, IsOptional, Validate } from 'class-validator';
import { IsCnpjValid } from 'src/common/utils/IsCnpjValid';

export class UpdateEmpresaDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  @Validate(IsCnpjValid)
  cnpj?: string;

  @IsOptional()
  @IsString()
  website?: string;
}
