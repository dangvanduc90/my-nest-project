import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration, { ConfigVariables } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration]
     }),
    // MongooseModule.forRootAsync({
    //   useFactory: async (configService: ConfigService<ConfigVariables>) => ({
    //     uri: configService.get<string>('mongoUri'),
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {};
