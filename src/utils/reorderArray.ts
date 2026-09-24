export default function reorderArray<T extends { id: string | number }>(
  array: T[],
  activeId: string | number,
  overId: string | number,
): T[] {
  const oldIndex = array.findIndex((item) => item.id === activeId);
  const newIndex = array.findIndex((item) => item.id === overId);

  if (oldIndex === -1 || newIndex === -1) return array;

  const newArray = [...array];
  const [movedItem] = newArray.splice(oldIndex, 1);
  newArray.splice(newIndex, 0, movedItem);

  return newArray;
}
