import { VisibilityFilters } from "../actions";

const visibiltyFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILTY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibiltyFilter;
