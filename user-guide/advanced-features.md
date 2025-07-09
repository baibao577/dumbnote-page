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
