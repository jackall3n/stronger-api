import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [
    WorkoutModule,
    GraphQLModule.forRoot({
      playground: true,
      introspection: true,
      autoSchemaFile: 'schema.graphql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
