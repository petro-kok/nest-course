import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { ItemModule } from './item/item.module';

@Module({
  imports: [ConfigModule.forRoot(), ItemModule],
  controllers: [AppController],
  providers: [AppService],
  exports
})
export class AppModule {}
