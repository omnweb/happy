import { MigrationInterface, QueryRunner, Table } from "typeorm";
import Orphanage from "../../models/Orphanage";

export class createImages1602617880772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'imageOrphanages',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', // caso o id seja atualizado, leva as imagens junto
                    onDelete: 'CASCADE' //  Caso o id seja deletado deleta as imagens tbm
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
