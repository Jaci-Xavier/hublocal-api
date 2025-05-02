import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUsuarioDto } from "./dto/create-user.dto";
import { hashPassword } from "../common/utils/bcrypt.util";


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateUsuarioDto) {
        return await this.prisma.$transaction(async (prisma) => {
            try {
                const hashedPassword = await hashPassword(data.senha);
                await prisma.usuarios.create({
                    data: {
                        ...data,
                        senha: hashedPassword,
                    },
                });
                return {message: "Usuario criado com sucesso!"};
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        });
    }
    
    async findByEmail(email: string) {
        return this.prisma.usuarios.findUnique({
            where: { email },
        })
    }

    async delete(id: string) {
        await this.prisma.usuarios.delete({
            where: { id },
        });

        return { message: "Usuario deletado com sucesso!" };
    }
}