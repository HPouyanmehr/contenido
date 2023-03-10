const initialBlockTypes = {
  H1: 'header-one',
  H2: 'header-two',
  H3: 'header-three',
  H4: 'header-four',
  H5: 'header-five',
  H6: 'header-six',
  OL: 'ordered-list-item',
  UL: 'unordered-list-item',
  P: 'paragraph',
  Blockquote: 'blockquote',
};

export type InitialBlockType = keyof typeof initialBlockTypes;

export default initialBlockTypes;
