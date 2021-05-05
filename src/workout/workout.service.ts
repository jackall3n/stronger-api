import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutService {
  constructor(private httpService: HttpService) {}

  async workouts(user: string, limit = 100) {
    const query = {
      limit,
      include: 'parseSetGroups.parseExercise,parseOriginRoutine',
      _method: 'GET',
      where: {
        completionDate: {
          $exists: true,
        },
        user: {
          __type: 'Pointer',
          className: '_User',
          objectId: user,
        },
      },
    };

    const { data } = await this.httpService
      .post('parse/classes/ParseWorkout', query)
      .toPromise();

    return data.results;
  }
}
