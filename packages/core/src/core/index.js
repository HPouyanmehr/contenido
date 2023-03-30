const Draft = require('draft-js');

const {
  AtomicBlockUtils,
  CompositeDecorator,
  EditorState,
  Modifier,
  RichUtils,
  SelectionState,
  KeyBindingUtil,
  convertToRaw,
  getDefaultKeyBinding,
} = Draft;

module.exports = {
  AtomicBlockUtils,
  CompositeDecorator,
  EditorState,
  Modifier,
  RichUtils,
  SelectionState,
  KeyBindingUtil,
  convertToRaw,
  getDefaultKeyBinding,
};
module.exports.DraftEntityMutability = Draft.DraftEntityMutability;
module.exports.DraftDecorator = Draft.DraftDecorator;
