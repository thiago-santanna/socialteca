import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1613564471515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy:"uuid",
                        default:"uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name:"phone",
                        type:"varchar",
                        isNullable: true,
                    },
                    {
                        name: "email",
                        type:"varchar",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name:"password",
                        type:"varchar",
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type:"integer",
                        default:1,
                        isNullable: false
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()',
                      },
                      {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                      },                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
