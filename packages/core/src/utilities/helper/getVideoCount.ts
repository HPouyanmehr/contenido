// Custom Utilites
import getAtomicCount from './getAtomicCount';

// Custom Types
import type { State } from '../../types';

const getVideoCount = (state: State) => getAtomicCount(state, 'video');

export default getVideoCount;
