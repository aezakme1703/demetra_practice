import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 100, unique: true})
    email: string

    @Column({type: 'varchar', length: 100})
    password: string

    @Column({type: 'int'})
    age: number

    @Column({type: 'varchar', length: 1000, nullable: true})
    description: string

    @CreateDateColumn({name: 'created_at', type: 'timestamptz'})
    createdAt: Date
}