// Custom Utilites
import getEntityCount from './getEntityCount';

// Custom Types
import type { State } from '../../types';

const getLinkCount = (state: State) => getEntityCount(state, 'link');

export default getLinkCount;
