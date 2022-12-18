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
}
