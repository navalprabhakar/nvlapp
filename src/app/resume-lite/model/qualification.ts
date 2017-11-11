import {Degree} from './degree';

export class Qualification {
  constructor(
    public degree: Degree,
    public institution: string,
    public degreeDate: string,
    public percentage: number
  ) {}
}
