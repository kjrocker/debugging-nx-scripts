import { run as firstRun } from '@script-test/dep1';
import { run as secondRun } from '@script-test/dep2';

const run = () => {
  firstRun();
  secondRun();
};

run();

export default run;
