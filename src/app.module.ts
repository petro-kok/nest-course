import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ItemModule } from "./item/item.module";
import databaseConfig from "../config/database.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: "schema.graphql",
            debug: true,
            playground: true,
        }),
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(databaseConfig(process.env)),
        ItemModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
