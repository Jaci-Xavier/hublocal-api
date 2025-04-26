import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';

@Injectable()
export class LocalService {
  constructor(private prisma: PrismaService) {}

  async create(empresaId: string, createLocalDto: CreateLocalDto) {
    return await this.prisma.locais.create({
      data: {
        ...createLocalDto,
        empresaId,
      },
    });
  }

  async findAll(empresaId: string) {
    return await this.prisma.locais.findMany({
      where: { empresaId },
    });
  }

  async findOne(id: string, empresaId: string) {
    return await this.findLocalOrThrow(id, empresaId);
  }

  async update(id: string, empresaId: string, updateLocalDto: UpdateLocalDto) {
    await this.findLocalOrThrow(id, empresaId);

    return await this.prisma.locais.update({
      where: { id },
      data: updateLocalDto,
    });
  }

  async remove(id: string, empresaId: string) {
    await this.findLocalOrThrow(id, empresaId);

    return await this.prisma.locais.delete({
      where: { id },
    });
  }

  private async findLocalOrThrow(id: string, empresaId: string) {
    const local = await this.prisma.locais.findFirst({
      where: {
        id,
        empresaId,
      },
    });

    if (!local) {
      throw new NotFoundException(`Local com id ${id} não encontrado para a empresa ${empresaId}`);
    }

    return local;
  }
}
