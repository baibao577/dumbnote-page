# File Management

This guide covers everything about creating, organizing, importing, and managing your notes in DumbNote.

## Understanding Your Notes Directory

### Default Location

DumbNote stores all your notes in a dedicated folder:

- **macOS**: `~/Documents/DumbNotes`
- **Windows**: `C:\Users\[Username]\Documents\DumbNotes`
- **Linux**: `~/Documents/DumbNotes`

### Directory Structure

```
DumbNotes/
├── your-note.md
├── another-note.md
├── project/
│   ├── project-notes.md
│   └── tasks.md
├── attachments/
│   ├── image1.png
│   └── document.pdf
└── .dumbnote/
    └── cache/
```

### Changing Notes Location

1. Go to **File → Preferences**
2. Click **"Change Notes Folder"**
3. Select your preferred directory
4. DumbNote will reload with the new location

> **Note**: Changing location doesn't move existing notes. Move them manually if needed.

## Creating Notes

### Method 1: Keyboard Shortcut
**Fastest method** - Press `Cmd/Ctrl+N`

### Method 2: File Menu
**File → New Note**

### Method 3: Sidebar Context Menu
1. Right-click in the sidebar
2. Select **"New Note"**

### Auto-naming

DumbNote automatically suggests filenames based on:

1. **First H1 heading**: `# My Title` → `My Title.md`
2. **First line of text**: If no H1 found
3. **Default**: `Untitled-1.md`, `Untitled-2.md`, etc.

### Manual Naming

- **During creation**: Type your preferred name
- **After creation**: Right-click → Rename

## Organizing Notes

### Folder Structure

Create folders to organize your notes:

1. **In file system**: Create folders in your notes directory
2. **From DumbNote**: Notes automatically appear in sidebar

Example structure:
```
DumbNotes/
├── Personal/
│   ├── journal/
│   │   ├── 2024-01-09.md
│   │   └── 2024-01-10.md
│   └── ideas.md
├── Work/
│   ├── meetings/
│   └── projects/
└── Archive/
```

### Naming Conventions

**Best practices**:
- Use descriptive names: `meeting-notes-2024-01-09.md`
- Avoid special characters: `/ \ : * ? " < > |`
- Use hyphens or underscores: `my-note.md` or `my_note.md`
- Add dates for chronological sorting: `2024-01-09-daily.md`

### Moving Notes

**Within DumbNote**:
- Currently, use your file manager to move files
- DumbNote auto-refreshes when files move

**Keyboard shortcut**: 
- `Cmd/Ctrl+Shift+O` - Open notes folder in file manager

## Importing Markdown Files

### Import Methods

#### 1. File Menu Import
1. **File → Import Markdown Files** or `Cmd/Ctrl+I`
2. Select one or multiple `.md` files
3. Choose import mode

#### 2. Drag and Drop
1. Drag `.md` files from file manager
2. Drop onto DumbNote window
3. Choose import mode

#### 3. Multi-select Import
- Hold `Cmd/Ctrl` to select multiple files
- Hold `Shift` to select range
- Import all at once

### Import Modes

#### Link Mode 🔗
**What it does**:
- Creates a "pointer" file in your notes directory
- Original file stays in its location
- Changes save back to the original
- Yellow background indicates linked notes

**Use when**:
- Working with files in other projects
- Editing README files in git repos
- Temporary editing of external files

**Example**:
```yaml
---
linkedPath: /Users/you/projects/README.md
---
# Content appears here but saves to original
```

#### Copy Mode 📄
**What it does**:
- Copies the entire file to your notes directory
- Creates independent copy
- No connection to original
- Normal white background

**Use when**:
- Importing notes permanently
- Moving from other apps
- Creating your note collection

### Import Conflict Resolution

When importing files with existing names:

1. **Automatic renaming**: `note.md` → `note-1.md`
2. **Timestamp suffix**: `note-2024-01-09-143045.md`
3. **No overwrites**: Original files always preserved

## Managing Linked Files

### Identifying Linked Files

Linked files have:
- 🔗 Yellow background in sidebar
- `linkedPath` in frontmatter
- Special handling in toolbar

### Working with Linked Files

**Editing**:
- Edit normally in DumbNote
- Changes save to original location
- Auto-save works as usual

**Converting to Regular**:
1. Remove `linkedPath` from frontmatter
2. Save the file
3. It becomes a regular note

**Finding Original**:
- Check frontmatter for `linkedPath`
- Right-click → "Show in Finder/Explorer"

### Linked File Limitations

- Can't rename from DumbNote
- Moving original breaks link
- No attachment support for linked files

## Deleting Notes

### Safe Deletion

**Via Sidebar**:
1. Right-click note
2. Select **"Delete"**
3. Confirm in dialog

**Via File Manager**:
1. Open notes folder
2. Delete file normally
3. DumbNote auto-refreshes

### Recovery

**Deleted notes go to**:
- **macOS**: Trash
- **Windows**: Recycle Bin
- **Linux**: Trash/Wastebasket

**No permanent deletion** from within DumbNote!

## Multi-window Support

### Opening Notes in New Windows

**Methods**:
1. **Right-click** note → "Open in New Window"
2. **Middle-click** on note (Linux/Windows)
3. **Cmd/Ctrl+Click** on wiki links

### Multi-window Features

**Benefits**:
- Edit multiple notes simultaneously
- Compare notes side-by-side
- Drag text between windows
- Different themes per window

**Sync**:
- Changes sync in real-time
- Settings sync across windows
- Independent preview states

### Window Management

**Tips**:
- `Cmd/Ctrl+Shift+N` - New empty window
- `Cmd/Ctrl+W` - Close current window
- `Alt+Tab` - Switch between windows

## File Operations

### Rename

**In DumbNote**:
1. Right-click note
2. Select "Rename"
3. Enter new name
4. Press Enter

**Rules**:
- `.md` extension added automatically
- Can't rename to existing filename
- Linked files can't be renamed

### Duplicate

**Manual duplication**:
1. Copy file in file manager
2. Paste with new name
3. Appears in sidebar instantly

### Batch Operations

**Currently via file manager**:
- Select multiple files
- Move/copy/delete as needed
- DumbNote reflects changes

## File Watching

### Automatic Updates

DumbNote watches for:
- New files added
- Files deleted
- Files renamed
- Content changes (external edits)

### External Editors

You can:
- Edit notes in VS Code, Vim, etc.
- Changes appear in DumbNote
- Real-time sync maintained

### Limitations

- Sub-folder creation needs manual refresh
- Very large operations may need restart
- Network drives may have delays

## Best Practices

### Organization Tips

1. **Use folders** for major categories
2. **Date prefixes** for chronological items
3. **Tags in frontmatter** for cross-cutting concerns
4. **Consistent naming** throughout

### Backup Strategies

1. **Regular exports**: File → Export All
2. **Cloud sync**: Place notes in Dropbox/iCloud/OneDrive
3. **Git repository**: Version control for notes
4. **GitHub sync**: Built-in backup option

### Performance

**For best performance**:
- Keep individual notes under 10,000 lines
- Limit folders to 1,000 notes each
- Archive old notes periodically
- Use search instead of deep nesting

## Advanced File Management

### Command Line

Access notes via terminal:
```bash
cd ~/Documents/DumbNotes
ls -la
vim my-note.md
```

### Symbolic Links

Create symlinks for advanced organization:
```bash
ln -s /path/to/external/notes ~/Documents/DumbNotes/external
```

### File Permissions

Ensure DumbNote has permissions:
- Read/write for notes directory
- Execute for directories
- No special permissions needed

## Troubleshooting

### Files Not Appearing

1. **Check location**: Verify notes directory
2. **Check extension**: Must be `.md`
3. **Refresh**: Close and reopen DumbNote
4. **Permissions**: Ensure read access

### Can't Create Files

1. **Check permissions**: Write access needed
2. **Check disk space**: Ensure space available
3. **Check path**: No invalid characters

### Sync Issues

1. **File locks**: Close in other editors
2. **Cloud conflicts**: Resolve in cloud service
3. **Permissions**: Check file ownership

## Tips and Tricks

### Quick Access

1. **Pin DumbNote** to dock/taskbar
2. **Set up hotkeys** for quick launch
3. **Use Spotlight/Search** to find notes

### Templates

Create template files:
```
templates/
├── meeting.md
├── daily-journal.md
└── project-brief.md
```

Copy when needed for consistency.

### Integration

**With file managers**:
- Quick Look (macOS) works with .md
- Preview pane (Windows) shows content
- File managers can search inside .md

**With cloud services**:
- Place notes folder in cloud
- Real-time sync across devices
- Version history from cloud

---

Next: Learn about **[Attachments](attachments.md)** and media handling →