import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://shivanisingh:shivani%40123@projects.lscvfeo.mongodb.net/?retryWrites=true&w=majority&appName=Projects"), ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
