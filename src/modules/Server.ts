export namespace Server {
  export interface item {
    name: string;
    distance: number;
  }

  export const sortByDistance = (list: item[], alt: boolean) => {
    return list.sort((a, b) => {
      return alt ? a.distance - b.distance : b.distance - a.distance;
    });
  };

  export const sortByName = (list: item[], alt: boolean) => {
    return list.sort((a, b) => {
      if (a.name < b.name) return alt ? -1 : 1;
      if (a.name > b.name) return alt ? 1 : -1;
      return 0;
    });
  };
}
