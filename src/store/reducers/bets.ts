import { IBet } from 'src/model';


export interface IBetsReducerState {
  errors: string[],
  byIds: { [id: number]: IBet },
}

const initialState: IBetsReducerState = {
  byIds: {},
  errors: [],
};

export default function (state = initialState, action: any): IBetsReducerState {
  switch (action.type) {

    default:
      return state;
  }
}
