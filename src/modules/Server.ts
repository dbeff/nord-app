export namespace Server {
  export interface item {
    name: string;
    distance: number;
  }

  export const sortByDistance = (list: item[], alt: boolean = false) => {
    return [...list].sort((a, b) => {
      return alt ? b.distance - a.distance : a.distance - b.distance;
    });
  };

  export const sortByName = (list: item[], alt: boolean = false) => {
    return [...list].slice().sort((a, b) => {
      if (a.name < b.name) return alt ? 1 : -1;
      if (a.name > b.name) return alt ? -1 : 1;
      return 0;
    });
  };
}
