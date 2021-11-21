import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const databaseConfig = (env: NodeJS.ProcessEnv): TypeOrmModuleOptions => ({
    type: "postgres",
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT),
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: true,
    entities: [env.DB_ENTITIES],
    autoLoadEntities: true,
});

export default databaseConfig;
