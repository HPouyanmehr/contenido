const initialAtomicTypes = {
  image: 'image',
  video: 'video',
  audio: 'audio',
  file: 'file',
};

export type AtomicType = keyof typeof initialAtomicTypes;

export default initialAtomicTypes;
