import store from "..";
import * as Actions from "../actions";
const initialState = {
  candidatesData: [],
  shortListed:[],
  rejected:[]
};
const Candidates = (store = initialState, actions) => {
  switch (actions.type) {
    case Actions.FETCH_CANDIDATES:
      return {
        ...store,
        candidatesData: actions.payload,
      };
    case Actions.SHORT_LIST_CANDIDATES:
      return {
        ...store,
        shortListed:[...store.shortListed,actions.payload]
      }
      case Actions.REJECT_CANDIDATES:
        return {
          ...store,
          rejected:[...store.rejected,actions.payload]
        }
    default:
      return store;
  }
};
export default Candidates;
