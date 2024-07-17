import { ElementoController } from './elemento.controller';
import { Module } from "@nestjs/common";
import { ElementoRepository } from './elemento.repository';
import { ElementoEUnicoValidator } from './validacao/elemento-e-unico.validator';

@Module({
        controllers:[ElementoController],
        providers: [ElementoRepository, ElementoEUnicoValidator]
})
export class ElementoModule {}