export namespace Server {
  export interface item {
    name: string;
    distance: number;
  }

  export const sortByDistance = (list: item[], asc: boolean) => {
    return list.sort((a, b) => {
      return asc ? a.distance - b.distance : b.distance - a.distance;
    });
  };

  export const sortByName = (list: item[], asc: boolean) => {
    return list.sort((a, b) => {
      if (a.name < b.name) return asc ? -1 : 1;
      if (a.name > b.name) return asc ? 1 : -1;
      return 0;
    });
  };
}
