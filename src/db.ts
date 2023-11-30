import { DataSource } from 'typeorm';
import { User } from './entities/User.entity'

export const AppDataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    port: 5432,
    username: "davidcastellanos",
    password: "124125126",
    database:"typeormefazt",
    entities: [User],
    logging: true,
    // synchronize: true
})