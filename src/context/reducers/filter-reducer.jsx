export const FilterReducer = (filterState, action) => {
  switch (action.type) {
    case 'FILTER-PRIORITY':
      return { ...filterState, priorityFilter: [...filterState.priorityFilter, action.payload] }
    case "REMOVE-PRIORITY":
      return { ...filterState, priorityFilter: filterState.priorityFilter.filter((p) => p !== action.payload) }
    case "FILTER-LABEL":
      return { ...filterState, labelFilter: [...filterState.labelFilter, action.payload] }
    case "REMOVE-LABEL":
      return { ...filterState, labelFilter: filterState.labelFilter.filter(l => l !== action.payload) }
    case "FILTER-COLOR":
      return { ...filterState, colorFilter: [...filterState.colorFilter, action.payload] }
    case "REMOVE-COLOR":
      return { ...filterState, colorFilter: filterState.colorFilter.filter(c => c !== action.payload) }
    case "CLEAR-FILTERS":
      return {
        priorityFilter: "",
        labelFilter: "",
        colorFilter: ""
      };
    default:
      return filterState;
  }
};
