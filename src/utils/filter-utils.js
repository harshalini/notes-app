import { useFilteredData } from "../context/filter-context";
export const GetPriority = (filteredNotes) => {
  const { filterState: { priorityFilter } } = useFilteredData()
  priorityFilter.length !== 0 ?
    filteredNotes = filteredNotes.filter((note) => priorityFilter.includes(note.priority)) :
    filteredNotes;
  return filteredNotes;
}

export const getLabeledNotes = (filteredNotes) => {
  const { filterState: {labelFilter}} = useFilteredData();
  labelFilter.length !== 0 ?
    filteredNotes = filteredNotes.filter((note) => labelFilter.includes(note.label)) :
    filteredNotes;
  return filteredNotes;
}

export const GetColor = (filteredNotes) => {
  const { filterState: {colorFilter}} = useFilteredData();
  colorFilter.length !== 0 ?
  filteredNotes = filteredNotes.filter((note) => colorFilter.includes(note.color)):
  filteredNotes;
  return filteredNotes
}