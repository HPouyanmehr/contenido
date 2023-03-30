const Draft = require('draft-js');

const {
  AtomicBlockUtils,
  CompositeDecorator,
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  SelectionState,
  KeyBindingUtil,
  convertToRaw,
  convertFromRaw,
  genKey,
  getDefaultKeyBinding,
} = Draft;

module.exports = {
  AtomicBlockUtils,
  CompositeDecorator,
  Editor,
  EditorState,
  Modifier,
  RichUtils,
  SelectionState,
  KeyBindingUtil,
  convertToRaw,
  convertFromRaw,
  genKey,
  getDefaultKeyBinding,
};
module.exports.DraftEntityMutability = Draft.DraftEntityMutability;
module.exports.DraftDecorator = Draft.DraftDecorator;
