import { IsNotEmpty } from 'class-validator'
import { Column, 
        Entity, 
        PrimaryGeneratedColumn, 
        CreateDateColumn, 
        UpdateDateColumn,
        BaseEntity } from 'typeorm';

@Entity({name: "Users", synchronize: true})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid", {name: "Id"})
    // @Column()
    public id : string;
    @Column({})
    firstname : string;
    @Column()
    lastname : string;
    @Column({ unique: true})
    @IsNotEmpty()
    email: string;
    @Column({
        default: true
    })
    active : string;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}