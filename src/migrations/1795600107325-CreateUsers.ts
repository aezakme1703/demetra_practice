import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1795600107325 implements MigrationInterface {
    name = 'CreateUsers1795600107325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE
    "users" (
        "id" SERIAL NOT NULL,
        "email" character varying(100) NOT NULL,
        "password" character varying(100) NOT NULL,
        "age" integer NOT NULL,
        "description" character varying(1000),
        "created_at" TIMESTAMP
        WITH
            TIME ZONE NOT NULL DEFAULT now (),
            CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
            CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
    )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
