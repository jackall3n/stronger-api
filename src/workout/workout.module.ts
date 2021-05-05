import { HttpModule, Module } from '@nestjs/common';
import { WorkoutResolver } from './workout.resolver';
import { WorkoutService } from './workout.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://strong4-server.herokuapp.com',
      headers: {
        'X-Parse-Application-Id': 'QbtVgYzi9iU1GNBFaGs6rPT0XtvRKMajvuYLLmTW',
        'X-Parse-Installation-Id': '60ed7ca4-fad7-41e6-9bf5-0a2db31cbd8f',
        'X-Parse-Session-Token': 'r:219d0cbeffc7de7381c27c96ee45c204',
      },
    }),
  ],
  providers: [WorkoutResolver, WorkoutService],
})
export class WorkoutModule {}
