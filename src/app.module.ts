import { Module } from '@nestjs/common';
import { ElementoModule } from './elemento/elemento.module';
import { UsuarioModule } from './usuario/usuario.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({imports: [
    UsuarioModule,
    ElementoModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
})
export class AppModule {}
