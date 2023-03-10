const initialBlockStyles: { [key: string]: string } = {
  'text-align-left': 'text-align-left',
  'text-align-center': 'text-align-center',
  'text-align-right': 'text-align-right',
  'text-align-justify': 'text-align-justify',
  blockquote: 'blockquote',
  unstyled: 'unstyled',
};

export type BlockStyleType =
  | 'text-align-left'
  | 'text-align-center'
  | 'text-align-right'
  | 'text-align-justify'
  | 'blockquote'
  | 'unstyled';

export default initialBlockStyles;
