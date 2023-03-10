const initialInlineStyles = {
  BOLD: 'BOLD',
  ITALIC: 'ITALIC',
  UNDERLINE: 'UNDERLINE',
  LINE_THROUGH: 'LINE_THROUGH',
  OVERLINE: 'OVERLINE',
  SUPERSCRIPT: 'SUPERSCRIPT',
  SUBSCRIPT: 'SUBSCRIPT',
};

export type InitialInlineStyleTypes = keyof typeof initialInlineStyles;

export default initialInlineStyles;
