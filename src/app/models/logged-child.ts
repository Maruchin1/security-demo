import {Parent} from './parent';

export interface LoggedChild {
  childId: number;
  name: string;
  parent: Parent;
}
