// Custom Utilites
import getAtomicCount from './getAtomicCount';

// Custom Types
import type { State } from '../../types';

const getAudioCount = (state: State) => getAtomicCount(state, 'audio');

export default getAudioCount;
