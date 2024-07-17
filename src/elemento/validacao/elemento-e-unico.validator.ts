import { Injectable } from '@nestjs/common';
import { ElementoRepository } from './../elemento.repository';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@Injectable()
@ValidatorConstraint({async: true} )
export class ElementoEUnicoValidator implements ValidatorConstraintInterface {

    constructor(private elementoRepository:ElementoRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const elementoComNomeExiste = await this.elementoRepository.existeComNomeElemento(value);
        return !elementoComNomeExiste;
    }
}

export const nomeEUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: ElementoEUnicoValidator
        });
    }
}