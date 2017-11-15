import { Skill } from './skill';
import { Level } from './level';

export class Competency {
  constructor(
    public skill: Skill,
    public level: Level
  ) { }
}
