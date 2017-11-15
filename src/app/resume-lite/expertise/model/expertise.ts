import { ExpertiseType } from './expertise-type';
import { Competency } from './competency';

export class Expertise {
    constructor(
        public expertise: ExpertiseType,
        public competencies: Competency[]
    ) { }
}
