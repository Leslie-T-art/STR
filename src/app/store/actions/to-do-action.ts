import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../models/to-do.models';

export const fetchTodoData = createAction('[Data] Fetch TodoData');
export const fetchTodoDataSuccess = createAction('[Data] Fetch TodoData Success', props<{ todo: TodoModel[] }>());
export const fetchTodoDataFailure = createAction('[Data] Fetch TodoData Failure', props<{ error: string }>());


// Add Data
export const addTodoData = createAction(
    '[Data] Add TodoData',
    props<{ newData: TodoModel }>()
  );
  export const addTodoDataSuccess = createAction(
    '[Data] Add TodoData Success',
    props<{ newData: TodoModel }>()
  );
  export const addTodoDataFailure = createAction(
    '[Data] Add TodoData Failure',
    props<{ error: string }>()
);
  
// Update Data
export const updateTodoData = createAction(
  '[Data] Update TodoData',
  props<{ updatedData: TodoModel }>()
);
export const updateTodoDataSuccess = createAction(
  '[Data] Update TodoData Success',
  props<{ updatedData: TodoModel }>()
);
export const updateTodoDataFailure = createAction(
  '[Data] Update TodoData Failure',
  props<{ error: string }>()
);

// Delete Data
export const deleteTodoData = createAction(
  '[Data] Delete TodoData',
  props<{ id: string }>()
);
export const deleteTodoDataSuccess = createAction(
  '[Data] Delete TodoData Success',
  props<{ id: string }>()
);
export const deleteTodoDataFailure = createAction(
  '[Data] Delete TodoData Failure',
  props<{ error: string }>()
);