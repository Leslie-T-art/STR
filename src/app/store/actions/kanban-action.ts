import { createAction, props } from '@ngrx/store';
import { Task } from '../models/kanban.model';

export const fetchKanbanData = createAction('[Data] Fetch KanbanData');
export const fetchKanbanDataSuccess = createAction('[Data] Fetch KanbanData Success', props<{ kanban: Task[] }>());
export const fetchKanbanDataFailure = createAction('[Data] Fetch KanbanData Failure', props<{ error: string }>());


// Add Data
export const addKanbanData = createAction(
    '[Data] Add KanbanData',
    props<{ newData: Task }>()
  );
  export const addKanbanDataSuccess = createAction(
    '[Data] Add KanbanData Success',
    props<{ newData: Task }>()
  );
  export const addKanbanDataFailure = createAction(
    '[Data] Add KanbanData Failure',
    props<{ error: string }>()
);
