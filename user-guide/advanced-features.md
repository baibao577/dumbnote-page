# Advanced Features

This guide covers DumbNote's advanced features for power users, including performance optimizations, multi-window workflows, and technical capabilities.

## Performance Features

### Search Indexing

**Child process architecture**:
- Search runs in separate process
- Non-blocking UI
- Parallel processing
- Automatic index updates

**How it works**:
1. On startup, spawns indexer
2. Builds index in background
3. Incremental updates on changes
4. Caches to disk for fast startup

**Performance stats**:
- 10,000 notes: <5 second initial index
- Incremental: <50ms per file
- Search results: <100ms
- Memory: ~50MB for large collections

### Viewport Processing

**Smart rendering**:
- Only processes visible content
- Lazy loads off-screen elements
- Smooth 60fps scrolling
- Handles 100,000+ line files

**Applied to**:
- Syntax highlighting
- Spellcheck
- Line numbers
- Preview rendering

### Memory Management

**Automatic optimization**:
- Releases unused memory
- Garbage collection tuning
- LRU cache for files
- Efficient string handling

**Cache management**:
```
Cache locations:
- Search index: .dumbnote/search/
- Metadata: .dumbnote/cache/
- Thumbnails: .dumbnote/thumbs/
```

### Background Tasks

**Non-blocking operations**:
- File watching
- Search indexing
- Attachment processing
- Sync operations

**Task prioritization**:
1. User input (highest)
2. Visible rendering
3. Background indexing
4. Network operations (lowest)

## Multi-Window Features

### Window Management

**Independent windows**:
- Separate editor instances
- Own navigation history
- Individual themes
- Shared file access

**Creating windows**:
- `Cmd/Ctrl+Shift+N` - New empty
- Right-click → Open in New Window
- Middle-click notes
- Drag tab out (future)

### Cross-Window Features

**Synchronized elements**:
- File changes
- Settings updates
- Search index
- Custom themes

**Independent elements**:
- Cursor position
- Scroll location
- Preview state
- Window size

### Multi-Window Workflows

#### Research Mode
```
Window 1: Source materials
Window 2: Writing document
Window 3: Outline/notes
```

#### Review Mode
```
Window 1: Original document
Window 2: Edited version
Side-by-side comparison
```

#### Presentation Mode
```
Window 1: Notes (private screen)
Window 2: Preview (projector)
Different zoom levels
```

## Developer Features

### Developer Tools

**Access DevTools**:
- F12 or Cmd/Ctrl+Shift+I
- View → Developer Tools
- Full Chrome DevTools

**Capabilities**:
- Console access
- Network monitoring
- Performance profiling
- Memory analysis

### File System Access

**Direct access**:
```javascript
// In DevTools console
window.electronAPI.showItemInFolder(notePath)
window.electronAPI.openPath(notePath)
```

**File operations**:
- Read/write any location
- Watch for changes
- Symbolic link support
- Hidden file access

### API Access

**Available APIs**:
```javascript
// Editor instance
window.editor

// File operations
window.electronAPI

// Theme system
window.getThemeInstance()

// Settings
window.settings
```

### Custom Scripts

**User scripts** (future):
```javascript
// Custom commands
DumbNote.registerCommand({
  id: 'myCommand',
  name: 'My Custom Command',
  execute: () => {
    // Custom logic
  }
});
```

## Integration Features

### Command Line

**CLI arguments**:
```bash
# Open specific note
dumbnote path/to/note.md

# Open in new window
dumbnote --new-window note.md

# Open folder
dumbnote path/to/folder/
```

### URL Protocol

**dumbnote:// protocol**:
```
dumbnote://open?file=note.md
dumbnote://search?query=term
dumbnote://create?title=New%20Note
```

### External Editor

**Open in external app**:
1. Right-click → Open With
2. Edit in VS Code, Vim, etc.
3. Changes sync back
4. Live reload in DumbNote

### Automation

**AppleScript** (macOS):
```applescript
tell application "DumbNote"
  create note with title "Daily Note"
  search for "project"
end tell
```

**PowerShell** (Windows):
```powershell
Start-Process dumbnote -ArgumentList "note.md"
```

## Data Management

### Metadata System

**Cached metadata**:
```json
{
  "filename": "note.md",
  "title": "Extracted from H1",
  "modified": "2024-01-09T10:30:00Z",
  "size": 1024,
  "tags": ["project", "important"],
  "links": ["other-note.md"],
  "wordCount": 500
}
```

**Benefits**:
- Instant file listing
- Quick sorting
- Tag extraction
- Link mapping

### Search Architecture

**Three-tier system**:
1. **Memory cache** - Recent searches
2. **Disk index** - Persistent storage
3. **Live indexing** - Real-time updates

**Index format**:
```
.dumbnote/search/
├── index.json
├── documents/
├── metadata.json
└── version
```

### Import System

**Smart import detection**:
- Detects file type
- Handles conflicts
- Preserves metadata
- Batch processing

**Link vs Copy decision**:
```javascript
if (isExternalProject || isGitRepo) {
  suggestLinkMode();
} else {
  suggestCopyMode();
}
```

## Experimental Features

### Performance Mode

**Enable high performance**:
- Disables animations
- Reduces visual effects
- Aggressive caching
- Minimal UI updates

### Database Backend

**SQLite integration** (future):
- Full-text search
- Complex queries
- Relationship mapping
- Performance gains

### Plugin System

**Planned architecture**:
```javascript
// Plugin manifest
{
  "name": "My Plugin",
  "version": "1.0.0",
  "main": "index.js",
  "permissions": ["files", "editor"]
}
```

## Power User Settings

### Hidden Preferences

**Advanced config**:
```json
{
  "advanced": {
    "maxSearchResults": 1000,
    "indexBatchSize": 100,
    "cacheSize": "500MB",
    "debugMode": false
  }
}
```

### Performance Tuning

**Adjust for your system**:
```javascript
// Low-end system
{
  "performance": {
    "renderDelay": 100,
    "searchDelay": 500,
    "maxConcurrent": 2
  }
}

// High-end system
{
  "performance": {
    "renderDelay": 0,
    "searchDelay": 50,
    "maxConcurrent": 8
  }
}
```

### Debug Mode

**Enable debugging**:
1. Settings → Advanced
2. Enable Debug Mode
3. See verbose logs
4. Performance metrics

**Debug outputs**:
- File operations
- Search queries
- Render timings
- Memory usage

## Keyboard Mastery

### Advanced Shortcuts

**Power user combos**:
- `Cmd+K, Cmd+K` - Command palette
- `Cmd+Shift+P` - All commands
- `Cmd+,` - Quick settings

### Custom Keymaps

**Override defaults** (future):
```json
{
  "keybindings": [
    {
      "key": "cmd+e",
      "command": "editor.action.smartSelect"
    }
  ]
}
```

### Vim Mode

**Basic Vim emulation**:
- Motion commands
- Visual mode
- Ex commands
- Custom bindings

## Network Features

### Proxy Support

**Configure proxy**:
```json
{
  "network": {
    "proxy": "http://proxy:8080",
    "proxyAuth": "user:pass"
  }
}
```

### Offline Mode

**Full offline capability**:
- No internet required
- Local search
- Cached resources
- Sync when online

### Remote Storage

**Network drives**:
- SMB/CIFS support
- NFS mounting
- WebDAV (future)
- Cloud mounts

## Security Features

### Encryption

**At-rest encryption** (future):
- Note encryption
- Attachment protection
- Key management
- Secure sync

### Sandboxing

**Process isolation**:
- Renderer sandboxed
- Limited file access
- No remote code
- Secure IPC

### Privacy

**Data protection**:
- No telemetry
- Local processing
- No cloud required
- You own your data

## Monitoring

### Performance Metrics

**Built-in monitoring**:
```
Menu → View → Performance Monitor

- CPU usage
- Memory usage
- Disk I/O
- Network activity
```

### Activity Logs

**Application logs**:
```
~/.config/DumbNote/logs/
├── main.log
├── renderer.log
└── error.log
```

### Health Checks

**System status**:
- Index health
- Cache status
- Memory pressure
- Disk space

## Tips for Power Users

### Workflow Optimization

1. **Learn shortcuts** - Minimize mouse use
2. **Use multi-window** - Parallel workflows
3. **Master search** - Faster than browsing
4. **Automate tasks** - Scripts and tools

### Performance Tips

1. **Regular maintenance** - Clear cache monthly
2. **Optimize images** - Before importing
3. **Archive old notes** - Keep working set small
4. **Monitor resources** - Watch for issues

### Integration Ideas

1. **Git hooks** - Auto-format on commit
2. **CI/CD** - Build documentation
3. **Scripts** - Batch operations
4. **APIs** - Custom integrations

---

Next: **[Troubleshooting](troubleshooting.md)** common issues →