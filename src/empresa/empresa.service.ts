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

    return this.prisma.empresas.create({
      data: {
        nome: createEmpresaDto.nome,
        cnpj: createEmpresaDto.cnpj,
        website: createEmpresaDto.website,
        usuarioId: userId,
      },
    });
  }

  async findAll(userId: string) {
    return await this.prisma.empresas.findMany({
      where: {
        usuarioId: userId,
      },
    });
  }

  async findOne(id: string, userId: string) {
    const empresa = await this.prisma.empresas.findFirst({
      where: {
        id,
        usuarioId: userId,
      },
    });

    if (!empresa) {
      throw new NotFoundException('Empresa não encontrada');
    }

    return empresa;
  }

  async update(userId: string, empresaId: string, updateEmpresaDto: UpdateEmpresaDto) {
    const empresa = await this.prisma.empresas.findUnique({
      where: { id: empresaId },
    });

    if (!empresa) {
      throw new NotFoundException('Empresa não encontrada');
    }

    if (empresa.usuarioId !== userId) {
      throw new ForbiddenException('Você não tem permissão para atualizar esta empresa');
    }

    return await this.prisma.empresas.update({
      where: { id: empresaId },
      data: updateEmpresaDto,
    });
  }

  async remove(userId: string, empresaId: string) {
    const empresa = await this.prisma.empresas.findUnique({
      where: { id: empresaId },
    });

    if (!empresa) {
      throw new NotFoundException('Empresa não encontrada');
    }

    if (empresa.usuarioId !== userId) {
      throw new ForbiddenException('Você não tem permissão para excluir esta empresa');
    }

    return await this.prisma.empresas.delete({
      where: { id: empresaId },
    });
  }
}
