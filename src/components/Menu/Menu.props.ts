export interface MenuProps  {
  links: {
    name: string,
    url: string,
    count?: number,
    active: boolean,
  }[]   
}