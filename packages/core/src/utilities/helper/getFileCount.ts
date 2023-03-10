// Custom Utilites
import getAtomicCount from './getAtomicCount';

// Custom Types
import type { State } from '../../types';

const getFileCount = (state: State) => getAtomicCount(state, 'file');

export default getFileCount;
