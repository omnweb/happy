// Criando a classe de Orphanages
// descomentar a linha "strictPropertyInitialization": true, em tsconfig.json e alterar para false
// Descomentando tbm "experimentalDecorators": true, "emitDecoratorMetadata": true. Habilita a api do decorator

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

//Decorator é utilizado na classe em propriedades ou em funções
@Entity('orphanages')

export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: string;
}