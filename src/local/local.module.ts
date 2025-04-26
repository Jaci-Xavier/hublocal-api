import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LocalController],
  providers: [LocalService, JwtAuthGuard],
})
export class LocalModule {}
