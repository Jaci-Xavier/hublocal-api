import { Controller, Post, Get, Patch, Delete, Body, Param, UseGuards, Request } from "@nestjs/common";
import { EmpresaService } from "./empresa.service";
import { CreateEmpresaDto } from "./dto/create-empresa.dto";
import { UpdateEmpresaDto } from "./dto/update-empresa.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("empresa")
@UseGuards(JwtAuthGuard)  
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService) {}

    @Post()
    async create(@Request() req, @Body() createEmpresaDto: CreateEmpresaDto) {
        const userId = req.user.id;
        return this.empresaService.create(userId, createEmpresaDto);
    }

    @Get()
    async findAll(@Request() req) {
        const userId = req.user.id;
        return this.empresaService.findAll(userId);
    }

    @Get(":id")
    async findOne(@Param("id") id: string, @Request() req) {
        const userId = req.user.id;
        return this.empresaService.findOne(id, userId);
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updateEmpresaDto: UpdateEmpresaDto, @Request() req) {
        const userId = req.user.id;
        return this.empresaService.update(userId, id, updateEmpresaDto);
    }

    @Delete(":id")
    async remove(@Param("id") id: string, @Request() req) {
        const userId = req.user.id;
        return this.empresaService.remove(id, userId);
    }
}
