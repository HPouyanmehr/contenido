// Custom Utilites
import getAtomicCount from './getAtomicCount';

// Custom Types
import type { State } from '../../types';

const getImageCount = (state: State) => getAtomicCount(state, 'image');

export default getImageCount;
