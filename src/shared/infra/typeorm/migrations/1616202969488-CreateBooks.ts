import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooks1616202969488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'books',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'author',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'isbn',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'publication_year',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'pages',
                        type: 'integer',
                        default: 0,
                        isNullable: false
                    },
                    {
                        name: 'synopsis',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'status',
                        type: 'integer',
                        default: 1,
                    }                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }

}
