# Navigation & Search

DumbNote provides powerful navigation and search features to help you find and access your notes quickly. This guide covers all navigation methods and search capabilities.

## Sidebar Navigation

### Overview

The sidebar (left panel) is your primary navigation tool:
- **Notes list** - All your markdown files
- **Folder structure** - Organized hierarchy
- **Search bar** - Quick filter
- **Tags section** - Grouped by tags

### Using the Sidebar

**Basic navigation**:
- **Click** - Select and open note
- **Double-click** - Open in new window
- **Right-click** - Context menu
- **Drag** - Reorder (in same folder)

**Keyboard navigation**:
- **↑/↓** - Navigate list
- **Enter** - Open selected note
- **Letter keys** - Jump to note by name

### Folder Navigation

**Expanding/Collapsing**:
- Click arrow to expand folder
- Alt+Click to expand all subfolders
- Folders remember their state

**Folder organization**:
```
📁 Work/
  📁 Projects/
    📄 project-a.md
    📄 project-b.md
  📁 Meetings/
    📄 2024-01-09.md
📁 Personal/
  📄 journal.md
```

### Sidebar Search

**Quick filter** (top of sidebar):
1. Click search box or press `/`
2. Type to filter notes
3. Clear with Escape or X button

**Filter behavior**:
- Matches note names
- Case-insensitive
- Partial matches work
- Folders auto-expand to show matches

## Full-Text Search

### Opening Search

**Three ways to search**:
1. **Global search**: `Cmd/Ctrl+F` when no text selected
2. **Search menu**: Edit → Find
3. **Search icon**: In toolbar

### Search Interface

**Search dialog features**:
- Search input field
- Result count
- Navigation buttons
- Search options

### Search Behavior

**How it works**:
- Searches all notes instantly
- Shows preview of matches
- Highlights results
- Updates as you type

**Search syntax**:
- **Simple terms**: `meeting`
- **Phrases**: `"project update"`
- **Multiple terms**: `react component`
- **Case-sensitive**: Toggle option

### Search Results

**Result display**:
```
📄 project-notes.md (3 matches)
   Line 15: ...discuss the project timeline...
   Line 42: ...project dependencies include...
   Line 78: ...final project deliverables...

📄 meeting-2024.md (1 match)
   Line 23: ...reviewed project status...
```

**Navigating results**:
- Click result to jump to location
- Use ↑/↓ to move between results
- Enter to go to result
- Escape to close search

### Search Highlighting

**In editor**:
- Yellow background for matches
- Current match in orange
- Navigate with F3/Shift+F3

**In preview**:
- Highlighted matches
- Scroll to first match
- Click to jump between

## Outline Navigation

### Document Outline

**What it shows**:
- All headings in current note
- Hierarchical structure
- Current position indicator

**Example outline**:
```
▼ # Main Title
  ▼ ## Introduction
    ### Background
    ### Goals
  ▼ ## Implementation
    ### Phase 1
    ### Phase 2
  ## Conclusion
```

### Using the Outline

**Navigation**:
1. Click any heading to jump
2. Shows current location
3. Updates as you type
4. Works in edit and preview

**Keyboard shortcuts**:
- Focus outline panel
- ↑/↓ to navigate
- Enter to jump

### Outline Features

**Smart features**:
- Collapses long sections
- Shows heading levels
- Updates in real-time
- Syncs with scroll position

## Wiki-Style Links

### Creating Links

Type `[[` to open note picker:
```markdown
[[My Other Note]]
[[Project Notes|Project]]
```

### Link Navigation

**Following links**:
- **Click** in preview mode
- **Cmd/Ctrl+Click** in edit mode
- **Middle-click** to open in new window

**Link types**:
- `[[Note Title]]` - Link by title
- `[[Note Title|Display]]` - Custom text
- `[[Folder/Note]]` - With path

### Back/Forward Navigation

**Browser-style history**:
- **Back**: Alt+←
- **Forward**: Alt+→
- **History**: Track visited notes

**Navigation stack**:
- Remembers last 50 locations
- Per-window history
- Survives note switches

## Quick Switcher

### Quick Note Access

**Future feature** - Quick switcher dialog:
- `Cmd/Ctrl+P` to open
- Fuzzy search all notes
- Recent files first
- Instant preview

## Navigation Shortcuts

### Essential Shortcuts

| Action | Shortcut |
|--------|----------|
| Toggle sidebar | `Cmd/Ctrl+B` |
| Search all | `Cmd/Ctrl+F` |
| Go to line | `Cmd/Ctrl+G` |
| Next search result | `F3` |
| Previous result | `Shift+F3` |
| Navigate back | `Alt+←` |
| Navigate forward | `Alt+→` |

### Editor Navigation

| Action | Shortcut |
|--------|----------|
| Top of document | `Cmd/Ctrl+Home` |
| End of document | `Cmd/Ctrl+End` |
| Page up/down | `PgUp/PgDn` |
| Next/prev word | `Cmd/Ctrl+←/→` |

## Search Features

### Advanced Search

**Search operators**:
- `AND` - Both terms (default)
- `OR` - Either term
- `NOT` - Exclude term
- `*` - Wildcard

**Examples**:
```
project AND deadline
meeting OR conference
report NOT draft
doc* (matches docs, document, documentation)
```

### Search Scope

**What's searched**:
- Note content
- Note titles
- YAML frontmatter
- Code blocks

**What's excluded**:
- Attachments folder
- Binary files
- Hidden files (.*)

### Search Performance

**Optimizations**:
- Indexed on startup
- Incremental updates
- Background processing
- Cache for speed

**Large collections**:
- 10,000+ notes supported
- Sub-second results
- Minimal memory usage

## Navigation Tips

### Efficient Workflows

1. **Two-pane setup**:
   - Sidebar + Editor
   - Quick switching
   - Drag between panes

2. **Keyboard-first**:
   - Learn shortcuts
   - Minimize mouse use
   - Faster navigation

3. **Search-first**:
   - Search instead of browsing
   - Use specific terms
   - Filter by tags

### Organization for Navigation

**Best practices**:
1. **Descriptive names** - Easy to search
2. **Logical folders** - Clear hierarchy
3. **Consistent structure** - Predictable
4. **Use tags** - Cross-cutting concerns

**Example structure**:
```
📁 Areas/
  📁 Work/
  📁 Personal/
  📁 Learning/
📁 Projects/
  📁 Active/
  📁 Archive/
📁 Resources/
  📁 Templates/
  📁 Reference/
```

### Multi-Window Navigation

**Use cases**:
1. **Reference + Writing** - Keep reference open
2. **Compare notes** - Side by side
3. **Copy between** - Drag and drop

**Window management**:
- Each window has own history
- Independent navigation
- Shared search index

## Troubleshooting

### Search Not Working

1. **No results?**
   - Check spelling
   - Try partial terms
   - Verify note exists

2. **Slow search?**
   - Rebuild index: File → Clear Cache
   - Check note count
   - Close other apps

3. **Missing notes?**
   - Check file extension (.md)
   - Verify in correct folder
   - Refresh sidebar

### Navigation Issues

1. **Links not working?**
   - Check target exists
   - Verify link syntax
   - Case-sensitive on Linux/Mac

2. **Outline missing?**
   - Need headings in note
   - Check markdown syntax
   - Refresh with F5

3. **History not working?**
   - Per-window history
   - Limited to 50 items
   - Clears on restart

## Advanced Features

### Custom Search

**Regular expressions**:
```
/todo:\s*\w+/
/\d{4}-\d{2}-\d{2}/
/^#{1,2}\s/
```

### Search and Replace

**In current note**:
1. `Cmd/Ctrl+H` for replace
2. Enter search term
3. Enter replacement
4. Replace all or one by one

### Bookmarks (Future)

**Planned features**:
- Bookmark favorite notes
- Quick access panel
- Keyboard shortcuts
- Sync across devices

## Best Practices

### Search Strategies

1. **Start specific** - Exact phrases
2. **Broaden if needed** - Remove words
3. **Use filters** - Tags, folders
4. **Save searches** - Common queries

### Navigation Patterns

1. **Hub notes** - Central index pages
2. **Link liberally** - Connect related
3. **Tag consistently** - Easy filtering
4. **Date prefixes** - Chronological order

### Performance Tips

1. **Close unused** - Free resources
2. **Archive old** - Faster searches
3. **Optimize images** - Quicker loading
4. **Regular cleanup** - Remove drafts

---

Next: Learn about **[Organization](organization.md)** with tags and structure →