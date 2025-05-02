import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { comparePassword } from "../common/utils/bcrypt.util";
import { generateToken } from "../common/utils/jwt.util";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async login(email: string, password: string) {
        if (!email || !password) {
            throw new BadRequestException("Email e senha são obrigatórios");
        }

        const user = await this.userService.findByEmail(email);

        if (!user) {
            throw new NotFoundException("Usuário não encontrado");
        }

        if (!user.senha) {
            throw new BadRequestException("Senha não pode ser nula");
        }

        const isPasswordValid = await comparePassword(password, user.senha);

        if (!isPasswordValid) {
            throw new UnauthorizedException("Senha inválida");
        }

        const token = generateToken({ id: user.id, email: user.email });

        return { token };
    }
}
