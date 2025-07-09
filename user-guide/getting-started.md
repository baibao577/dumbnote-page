# Getting Started with DumbNote

This guide will help you install DumbNote and create your first note in minutes.

## Installation

### Download DumbNote

1. Visit the [DumbNote releases page](https://github.com/baibao577/dumbnote-page/releases)
2. Download the appropriate version for your system:
   - **macOS**: `.pkg` installer (universal - works on Intel and Apple Silicon)
   - **Windows**: `.exe` installer
   - **Linux**: `.AppImage` or `.deb` file

### Install on macOS

1. Double-click the downloaded `.pkg` file
2. Follow the installation wizard steps
3. Enter your password when prompted (for system installation)
4. DumbNote will be installed in your Applications folder
5. Launch from Applications or Spotlight search

### Install on Windows

1. Run the downloaded `.exe` installer
2. Follow the installation wizard
3. DumbNote will create a desktop shortcut
4. Launch from the Start menu or desktop

### Install on Linux

**AppImage** (recommended):

```bash
chmod +x DumbNote-*.AppImage
./DumbNote-*.AppImage
```

**Debian/Ubuntu**:

```bash
sudo dpkg -i dumbnote_*.deb
```

## First Launch

When you first open DumbNote, you'll see:

1. **Welcome Note** - A sample note with basic tips
2. **Sidebar** - Your notes list (left side)
3. **Editor** - The main writing area (center)
4. **Preview Toggle** - Switch between edit and preview modes

## Creating Your First Note

### Method 1: Keyboard Shortcut

Press `Cmd/Ctrl+N` to create a new note instantly.

### Method 2: Menu

Go to `File → New Note`

### Method 3: Sidebar

Right-click in the sidebar and select "New Note"

Your new note will:

- Open automatically in the editor
- Have a temporary name like "Untitled-1"
- Auto-save as you type

## Basic Editing

### Writing Markdown

Start typing! DumbNote supports full CommonMark syntax:

```markdown
# This is a heading

This is a paragraph with **bold** and _italic_ text.

- This is a list item
- Another item
  - Nested item

1. Numbered list
2. Second item
```

### Preview Your Note

Toggle preview mode with `Cmd/Ctrl+Shift+V` to see how your markdown renders.

### Save Your Note

Notes auto-save every 5 seconds, but you can manually save with `Cmd/Ctrl+S`.

### Rename Your Note

DumbNote automatically suggests filenames based on:

1. Title in YAML frontmatter (highest priority)
2. The first H1 heading (`# Title`)
3. The first line of text
4. Falls back to "Untitled" if empty

Example with frontmatter title:

```yaml
---
title: My Custom Title
---
# This heading won't be used as the title
```

To manually rename:

- Edit the filename directly in the file system
- Add/change the `title` in YAML frontmatter

## Understanding the Interface

### Sidebar (Right Panel)

- **Notes List**: All your markdown files
- **Search Bar**: Quick file search
- **Tags Section**: Organize by tags (collapsible)
- **Context Menu**: Right-click for options

### Editor (Center)

- **Monaco Editor**: Full VS Code editing power
- **Line Numbers**: Clickable for selection
- **Outline**: Navigate long documents
- **Status Bar**: Shows cursor position

### Toolbar (Top)

- **File Operations**: New, Save, Import
- **View Controls**: Toggle sidebar, preview
- **Sync Status**: GitHub sync indicator

## Essential Features to Try

### 1. Smart Lists

Type `- ` and press Enter to continue lists automatically:

```markdown
- First item [Enter]
- Second item (auto-added dash)
  - Tab to indent [Enter]
  - Another nested item
```

### 2. Checkboxes

Create interactive task lists:

```markdown
- [ ] Unfinished task
- [x] Completed task
```

Click checkboxes in preview mode to toggle!

### 3. Quick Date

Type `@today` and it expands to current date/time:

- `@today` → `2024-01-09 14:30:45`
- `@date` → `2024-01-09`
- `@time` → `14:30:45`

### 4. Emoji Picker

Type `::` to open the emoji picker:

1. Type `::`
2. Start typing emoji name
3. Use arrows to select
4. Press Enter to insert

## Customizing Your Experience

### Change Theme

1. Go to theme selector (top-right)
2. Choose from built-in themes:
   - Dark themes: Default, Monokai, Nord, etc.
   - Light themes: Clean, Paper, Solarized, etc.

### Adjust Font Size

- **Increase**: `Cmd/Ctrl+Plus`
- **Decrease**: `Cmd/Ctrl+Minus`
- **Reset**: `Cmd/Ctrl+0`

### Toggle Sidebar

Hide the sidebar for distraction-free writing:

- Keyboard: `Cmd/Ctrl+\`
- Menu: `View → Toggle Sidebar`

### Try Typewriter Mode

Keep your cursor centered on screen:

- Press `Cmd/Ctrl+Shift+T` to enable
- Your cursor stays in the middle while text moves
- Perfect for long writing sessions

## Your Notes Folder

To quickly access your notes folder, use **File → Go to Notes Folder**. This opens your notes directory in your system's file manager.

DumbNote organizes your files as:

- `*.md` - Your markdown notes
- `attachments/` - Embedded images and files
- `.dumbnote/` - App settings and cache (hidden)

## Next Steps

Now that you've created your first note, explore these features:

1. **[Learn Markdown](markdown-guide.md)** - Master markdown syntax
2. **[Keyboard Shortcuts](keyboard-shortcuts.md)** - Work faster
3. **[Tags, Favorites & Hub View](tags-favorites-hub.md)** - Organize your notes
4. **[GitHub Sync](github-sync.md)** - Backup your notes

## Tips for New Users

### 💡 Pro Tips

1. **Auto-save is always on** - No need to worry about losing work
2. **Markdown preview** - Use `Cmd/Ctrl+Shift+V` frequently
3. **Multiple windows** - Open notes in separate windows
4. **Quick search** - `Cmd/Ctrl+F` works everywhere

### ⚡ Performance Tips

1. **Fast startup** - Pin DumbNote to your dock/taskbar
2. **Quick notes** - Use `Cmd/Ctrl+N` for instant new notes
3. **Efficient search** - Search indexes automatically

### 🎯 Best Practices

1. **Use headings** - Organize with `#` headers
2. **Link notes** - Type `[[` to link between notes
3. **Tag everything** - Add tags in frontmatter
4. **Regular backups** - Use export or GitHub sync

## Getting Help

### In-App Help

- Hover over any button for tooltips
- Check the Help menu for guides

### Online Resources

- [GitHub Issues](https://github.com/baibao577/dumbnote-page/issues) - Report bugs
- [User Guide](index.md) - This documentation
- [FAQ](faq.md) - Common questions

### Keyboard Help

Not sure about a shortcut? Check our complete [Keyboard Shortcuts](keyboard-shortcuts.md) guide.

---

Ready to explore more? Continue to **[Editor Features](editor-features.md)** →
