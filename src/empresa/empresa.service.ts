import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { formatCnpj } from 'src/common/utils/formatCnpj.util';
import { validateOrReject } from 'class-validator';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createEmpresaDto: CreateEmpresaDto) {
    const formattedCnpj = formatCnpj(createEmpresaDto.cnpj);
    createEmpresaDto.cnpj = formattedCnpj;

    await validateOrReject(createEmpresaDto);

    const empresa = await this.prisma.empresas.create({
      data: {
        nome: createEmpresaDto.nome,
        cnpj: createEmpresaDto.cnpj,
        website: createEmpresaDto.website,
        usuarioId: userId,
      },
      include: {
        locais: true,
      },
    });

    return {
      id: empresa.id,
      empresa: empresa.nome,
      quantidade: empresa.locais.length,
      cnpj: empresa.cnpj,
      website: empresa.website,
    };
  }

  async findAll(userId: string) {
    const empresas = await this.prisma.empresas.findMany({
      where: { usuarioId: userId },
      include: {
        locais: true,
      },
    });

    return empresas.map(empresa => ({
      id: empresa.id,
      empresa: empresa.nome,
      quantidade: empresa.locais.length,
      cnpj: empresa.cnpj,
      website: empresa.website,
    }));
  }

  async findOne(id: string, userId: string) {
    return await this.findEmpresaOrThrow(id, userId);
  }

  async update(userId: string, empresaId: string, updateEmpresaDto: UpdateEmpresaDto) {
    const empresa = await this.findEmpresaOrThrow(empresaId, userId);

    const updatedEmpresa = await this.prisma.empresas.update({
      where: { id: empresaId },
      data: updateEmpresaDto,
      include: {
        locais: true,
      },
    });

    return {
      id: updatedEmpresa.id,
      empresa: updatedEmpresa.nome,
      quantidade: updatedEmpresa.locais.length,
      cnpj: updatedEmpresa.cnpj,
      website: updatedEmpresa.website,
    };
  }

  async remove(userId: string, empresaId: string) {
    await this.findEmpresaOrThrow(empresaId, userId);

    return await this.prisma.empresas.delete({
      where: { id: empresaId },
    });
  }

  private async findEmpresaOrThrow(id: string, userId: string) {
    const empresa = await this.prisma.empresas.findUnique({
      where: { id },
    });

    if (!empresa) {
      throw new NotFoundException(`Empresa com id ${id} não encontrada`);
    }

    if (empresa.usuarioId !== userId) {
      throw new ForbiddenException('Você não tem permissão para acessar esta empresa');
    }

    return empresa;
  }
}
