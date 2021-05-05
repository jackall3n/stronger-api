import { Injectable } from '@nestjs/common';
import { WorkoutModel } from './models/workout.model';
import { parseISO } from 'date-fns';
import { SetModel } from './models/set.model';
import { ExerciseModel } from './models/exercise.model';

@Injectable()
export class WorkoutMapper {
  map(workout: any): WorkoutModel {
    const exercises = workout.parseSetGroups.map((exercise) =>
      this.mapExercise(exercise),
    );

    return {
      id: workout.objectId,
      name: workout.name,
      completed: parseISO(workout.completionDate.iso),
      exercises,
    };
  }

  mapExercise(exercise: any): ExerciseModel {
    const sets = exercise.parseSetsDictionary.map((set) => this.mapSet(set));

    return {
      id: exercise.objectId,
      completed: parseISO(exercise.completionDate.iso),
      name: exercise.parseExercise.name,
      sets,
    };
  }

  mapSet(set: any): SetModel {
    return {
      checked: set.isChecked,
    };
  }
}
