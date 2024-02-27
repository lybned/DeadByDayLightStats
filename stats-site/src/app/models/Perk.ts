export class Perk {
  constructor(
    public id: string,
    public categories: string[],
    public name: string,
    public description: string,
    public role: string,
    public character: number,
    public tunables: number[][],
    public modifier: string,
    public teachable: number,
    public image: string
  ) {}
}