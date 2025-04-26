import { Controller, Post, Get, Patch, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
import { LocalService } from './local.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('local')
@UseGuards(JwtAuthGuard) 
export class LocalController {
  constructor(private readonly locaisService: LocalService) {}

  @Post()
  async create(@Request() req, @Body() createLocalDto: CreateLocalDto) {
    const empresaId = createLocalDto.empresaId;
    return this.locaisService.create(empresaId, createLocalDto);
  }

  @Get(':empresaId')
  async findAll(@Param('empresaId') empresaId: string) {
    return this.locaisService.findAll(empresaId);
  }

  @Get(':empresaId/:id')
  async findOne(@Param('empresaId') empresaId: string, @Param('id') id: string) {
    return this.locaisService.findOne(id, empresaId);
  }

  @Patch(':empresaId/:id')
  async update(
    @Param('empresaId') empresaId: string,
    @Param('id') id: string,
    @Body() updateLocalDto: UpdateLocalDto,
  ) {
    return this.locaisService.update(id, empresaId, updateLocalDto);
  }

  @Delete(':empresaId/:id')
  async remove(@Param('empresaId') empresaId: string, @Param('id') id: string) {
    return this.locaisService.remove(id, empresaId);
  }
}
