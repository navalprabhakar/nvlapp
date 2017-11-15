import { Candidate } from './candidate';
import { Education } from '../education/model/education';
export class Resume {
  constructor(
    public candidate: Candidate,
    public highlights: string,
    public mission: string,
    public milestonesToGo: string [],
    public milestonesSeen: string [],
    public education: Education
  ) {}
}
