import { createAction, props } from '@ngrx/store';
import { filemanagerModel } from '../models/file-manager.model';

export const fetchFileData = createAction('[Data] Fetch File Manager');
export const fetchFileDataSuccess = createAction('[Data] Fetch File Manager Success', props<{ files: filemanagerModel[] }>());
export const fetchFileDataFailure = createAction('[Data] Fetch File Manager Failure', props<{ error: string }>());

