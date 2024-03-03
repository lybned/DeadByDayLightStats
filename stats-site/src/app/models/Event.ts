
export class Event {
  constructor(
    public id: string,
    public type: string,
    public name: string | null,
    public multiplier: number,
    public start: number,
    public end: number,
  ) {}
}