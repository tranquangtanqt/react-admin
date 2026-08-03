interface IWithDetails<TDetail> {
  id: number;
  details: TDetail[];
}

export function attachDetails<TParent extends IWithDetails<TDetail>, TDetail>(
  parents: TParent[],
  details: TDetail[],
  getParentId: (detail: TDetail) => number,
): TParent[] {
  parents.forEach((parent) => {
    parent.details = details.filter((d) => getParentId(d) === parent.id);
  });

  return parents;
}
