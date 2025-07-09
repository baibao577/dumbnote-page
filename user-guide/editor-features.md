# Editor Features

DumbNote uses Monaco Editor - the same powerful editor that powers Visual Studio Code. This guide covers all the editor features and how to use them effectively.

## Monaco Editor Overview

Monaco Editor brings professional IDE features to your note-taking:

- **Syntax Highlighting** - Full language support
- **IntelliSense** - Smart completions
- **Multi-cursor Editing** - Edit multiple locations
- **Code Folding** - Collapse sections
- **Minimap** - Document overview
- **Find & Replace** - Powerful search

## Basic Editing

### Text Selection

- **Click and drag** - Select text
- **Double-click** - Select word
- **Triple-click** - Select line
- **Quadruple-click** - Select all
- **Shift+Click** - Extend selection
- **Alt+Click** - Column selection

### Multi-cursor Editing

Create multiple cursors for simultaneous editing:

- **Alt+Click** - Add cursor at click position
- **Alt+Shift+Click** - Add cursors between current and click
- **Cmd/Ctrl+Alt+↑/↓** - Add cursor above/below
- **Cmd/Ctrl+D** - Add cursor at next occurrence of selection
- **Cmd/Ctrl+Shift+L** - Add cursors at all occurrences

### Smart Editing

#### Auto-closing Pairs
The editor automatically closes:
- Brackets: `()`, `[]`, `{}`
- Quotes: `""`, `''`, ` `` `
- Markdown: `**`, `__`, `~~`

#### Smart Indentation
- **Tab** - Indent line or selection
- **Shift+Tab** - Outdent line or selection
- Auto-indent after lists and code blocks

## Code Features

### Syntax Highlighting

Full support for 100+ languages in code blocks:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

```python
def greet(name):
    return f"Hello, {name}!"
```
````

### Code Folding

Collapse and expand sections:

- **Fold indicators** - Click the arrow in the gutter
- **Cmd/Ctrl+Shift+[** - Fold region
- **Cmd/Ctrl+Shift+]** - Unfold region
- **Cmd/Ctrl+K, Cmd/Ctrl+0** - Fold all
- **Cmd/Ctrl+K, Cmd/Ctrl+J** - Unfold all

Works with:
- Markdown headers
- Code blocks
- Lists
- HTML tags

### Bracket Matching

- **Automatic highlighting** - Matching brackets light up
- **Cmd/Ctrl+Shift+\** - Jump to matching bracket
- **Rainbow brackets** - Nested brackets in different colors

## Advanced Editing

### Line Operations

- **Alt+↑/↓** - Move line up/down
- **Alt+Shift+↑/↓** - Copy line up/down
- **Cmd/Ctrl+Shift+K** - Delete line
- **Cmd/Ctrl+L** - Select current line
- **Cmd/Ctrl+I** - Select current line (alternative)

### Word Operations

- **Cmd/Ctrl+D** - Select word (repeat for next occurrence)
- **Cmd/Ctrl+F2** - Select all occurrences of word
- **F2** - Rename symbol (in code blocks)
- **Cmd/Ctrl+Backspace** - Delete word left
- **Cmd/Ctrl+Delete** - Delete word right

### Comment Operations

- **Cmd/Ctrl+/** - Toggle line comment
- **Alt+Shift+A** - Toggle block comment

In markdown, this creates HTML comments:
```markdown
<!-- This is a comment -->
```

## Find and Replace

### Basic Find

- **Cmd/Ctrl+F** - Open find
- **Enter** - Find next
- **Shift+Enter** - Find previous
- **Escape** - Close find

### Find Options

- **Alt+C** - Toggle case sensitive
- **Alt+W** - Toggle whole word
- **Alt+R** - Toggle regex

### Replace

- **Cmd/Ctrl+H** - Open find and replace
- **Cmd/Ctrl+Alt+Enter** - Replace all
- **Enter** - Replace and find next

### Find in Selection

1. Select text
2. Open find (`Cmd/Ctrl+F`)
3. Toggle "Find in selection" button

## Navigation

### Go to Line

- **Cmd/Ctrl+G** - Go to line dialog
- Type line number and press Enter

### Scroll

- **Cmd/Ctrl+↑/↓** - Scroll up/down
- **Alt+PgUp/PgDn** - Scroll page up/down
- **Cmd/Ctrl+Home/End** - Go to beginning/end

### Minimap

The minimap shows a bird's-eye view of your document:
- Click to jump to location
- Drag to scroll quickly
- Hover for preview

## Special Features

### Sticky Scroll

Headers stay visible while scrolling:
- Markdown headers "stick" to the top
- Shows current section context
- Click sticky header to jump back

### Typewriter Mode

Keep your cursor centered while typing:

1. Enable: `Edit → Typewriter Mode` or `Cmd/Ctrl+Shift+T`
2. Adjust position: `Edit → Typewriter Center Position`
3. Choose 20-80% vertical position

Benefits:
- Reduces eye movement
- Better posture
- Focus on current paragraph

### Line Numbers

Toggle line numbers:
- Right-click gutter → "Show Line Numbers"
- Useful for long documents
- Click number to select entire line

### Word Wrap

Text automatically wraps at window edge:
- Always enabled in DumbNote
- Soft wraps (doesn't insert line breaks)
- Preserves markdown formatting

## Editor Behavior

### Auto-Save

- **Automatic** - Saves every 5 seconds
- **Manual** - `Cmd/Ctrl+S` to save immediately
- **Visual feedback** - Brief highlight on save

### Undo/Redo

- **Cmd/Ctrl+Z** - Undo
- **Cmd/Ctrl+Shift+Z** - Redo
- **Unlimited history** - Within session
- **Persistent** - Survives mode switches

### Tab Behavior

In DumbNote, Tab has special behavior:
- **In lists** - Indents list item
- **In code blocks** - Inserts tab/spaces
- **Normal text** - Inserts 4 spaces

## Performance Features

### Large File Handling

Monaco efficiently handles large documents:
- **Viewport rendering** - Only visible parts render
- **Virtual scrolling** - Smooth even with 10,000+ lines
- **Incremental parsing** - Fast syntax highlighting

### Memory Management

- **Automatic cleanup** - Releases unused memory
- **Efficient caching** - Fast file switching
- **Background processing** - Non-blocking operations

## Accessibility

### Keyboard Navigation

- **F1** - Command palette (context help)
- **Tab** - Navigate through elements
- **Escape** - Exit current mode
- **Alt+F1** - Accessibility help

### Screen Reader Support

- Full ARIA labels
- Navigation announcements
- Edit operation feedback

## Tips and Tricks

### Productivity Boosters

1. **Multi-cursor for lists**:
   - Select all list markers
   - Change `-` to `1.` instantly

2. **Column selection for tables**:
   - Alt+drag to select table column
   - Edit all cells at once

3. **Fold all headers**:
   - `Cmd/Ctrl+K, Cmd/Ctrl+0`
   - See document outline instantly

### Hidden Features

1. **Middle-click paste** (Linux/Windows)
2. **Drag text to move** (with mouse)
3. **Ctrl+scroll to zoom** (changes font size)
4. **Shift+scroll for horizontal scroll**

### Common Workflows

#### Restructure Document
1. Fold all sections
2. Drag folded sections to reorder
3. Unfold when done

#### Mass Rename
1. Select term to rename
2. `Cmd/Ctrl+F2` to select all
3. Type new name

#### Clean Up Formatting
1. Select all (`Cmd/Ctrl+A`)
2. Find & replace multiple spaces
3. Fix line endings

## Customization

### Editor Settings

Available in preferences:
- **Font size** - 8px to 48px
- **Line height** - 1.0 to 4.5
- **Theme** - Syntax color scheme

### Behavior Settings

- **Auto-save interval** - Fixed at 5 seconds
- **Tab size** - 4 spaces
- **Word wrap** - Always on

## Troubleshooting

### Common Issues

**Cursor disappears**
- Press Escape to reset
- Click in editor to refocus

**Syntax highlighting broken**
- Check code block language tag
- Ensure proper fence closure

**Performance slow**
- Check document size
- Clear cache if needed
- Reduce minimap rendering

### Reset Editor State

If editor behaves strangely:
1. Save your work
2. Close and reopen note
3. Clear cache if persists

---

Next: Learn about **[Markdown syntax](markdown-guide.md)** in DumbNote →