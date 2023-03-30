const Draft = require('draft-js');

const {
  AtomicBlockUtils,
  CompositeDecorator,
  EditorState,
  Modifier,
  RichUtils,
  SelectionState,
  KeyBindingUtil,
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
  getDefaultKeyBinding,
};
module.exports.DraftEntityMutability = Draft.DraftEntityMutability;
module.exports.DraftDecorator = Draft.DraftDecorator;
