# Attachments

DumbNote makes it easy to include images, PDFs, and other files in your notes. This guide covers everything about working with attachments.

## Quick Start

### Adding Attachments

**Three simple methods**:

1. **Drag and Drop** - Drag any file into the editor
2. **Copy and Paste** - Paste images from clipboard
3. **Markdown Syntax** - Type `![](image.png)`

### Supported File Types

**Images**: PNG, JPG, JPEG, GIF, SVG, WebP, BMP, ICO
**Documents**: PDF
**Other**: Any file type (stored as attachment)

## Image Handling

### Drag and Drop Images

1. **From file manager**: Drag image file into editor
2. **From web browser**: Drag image directly
3. **Between notes**: Drag from one note to another

**What happens**:
- Image copies to `attachments/` folder
- Markdown link inserts at cursor: `![](attachments/image.png)`
- Image preview shows inline

### Copy and Paste Images

**From screenshots**:
1. Take screenshot (OS-specific shortcuts)
2. Click in editor where you want image
3. Paste with `Cmd/Ctrl+V`

**From image editors**:
1. Copy image in Photoshop, GIMP, etc.
2. Paste in DumbNote
3. Auto-saved with timestamp name

**From web**:
1. Right-click image → Copy image
2. Paste in DumbNote
3. Downloads and saves locally

### Image Preview

**In editor**:
- Small inline preview widget
- Click to see full size
- Hover for filename

**In preview mode**:
- Full rendered images
- Click to open in default app
- Responsive sizing

### Image Organization

**Automatic naming**:
```
attachments/
├── image-2024-01-09-143022.png
├── screenshot-2024-01-09-150133.png
└── pasted-2024-01-09-160244.jpg
```

**Manual organization**:
```
attachments/
├── project-a/
│   ├── diagram1.png
│   └── mockup.jpg
└── project-b/
    └── charts.png
```

## PDF Attachments

### Adding PDFs

**Drag and drop**:
1. Drag PDF into editor
2. Creates attachment widget
3. Shows with PDF icon

**Link syntax**:
```markdown
[Project Proposal](attachments/proposal.pdf)
[View PDF](attachments/document.pdf)
```

### PDF Features

- **Icon preview** in editor
- **Click to open** in system PDF viewer
- **Size displayed** in widget
- **Full path** on hover

## Other File Types

### Supported Attachments

**Any file type** can be attached:
- Word documents (.doc, .docx)
- Excel files (.xls, .xlsx)
- ZIP archives
- Video files
- Audio files
- Code files

### How It Works

1. Drag any file into editor
2. Copies to `attachments/`
3. Creates markdown link
4. Shows as attachment widget

**Example links**:
```markdown
[Download](attachments/data.xlsx)
[Source Code](attachments/project.zip)
[Recording](attachments/meeting.mp3)
```

## Attachment Storage

### Location

All attachments stored in:
```
DumbNotes/
├── notes.md
└── attachments/
    ├── image.png
    ├── document.pdf
    └── file.zip
```

### Storage Management

**Automatic**:
- Organized by date
- No duplicates (hash checking)
- Preserves original names when possible

**Manual**:
- Create subfolders in `attachments/`
- Move files to organize
- Update links accordingly

### Size Limits

- **Individual file**: 1GB maximum
- **Total storage**: Limited by disk space
- **Performance**: Large files may slow editor

## Working with Attachments

### Moving Attachments

**To reorganize**:
1. Move file in `attachments/` folder
2. Update markdown link
3. Or use find/replace

**Example**:
```markdown
<!-- Before -->
![](attachments/image.png)

<!-- After moving to subfolder -->
![](attachments/project/image.png)
```

### Renaming Attachments

1. Rename in file system
2. Update all references
3. Use find/replace for multiple

### Deleting Attachments

**Safe deletion**:
1. Remove markdown link first
2. Delete file from `attachments/`
3. Check for other references

**Bulk cleanup**:
- Find unused attachments
- Delete from file system
- Empty trash to reclaim space

## Advanced Features

### Relative Paths

**Within attachments folder**:
```markdown
![](attachments/image.png)
![](attachments/project/diagram.png)
```

**Outside notes folder** (not recommended):
```markdown
![](../external/image.png)
![](/absolute/path/image.png)
```

### Image Sizing

**Markdown doesn't support sizing**, but you can use HTML:

```html
<img src="attachments/image.png" width="300">
<img src="attachments/image.png" style="width: 50%">
```

### Image Alignment

**Using HTML**:
```html
<!-- Center -->
<div align="center">
  <img src="attachments/image.png">
</div>

<!-- Right align -->
<img src="attachments/image.png" align="right">
```

### Captions

**Using HTML**:
```html
<figure>
  <img src="attachments/diagram.png">
  <figcaption>System Architecture Diagram</figcaption>
</figure>
```

## Best Practices

### Organization

1. **Use subfolders** for projects
2. **Descriptive names** for files
3. **Date prefixes** for versions
4. **Clean up** unused attachments

**Good structure**:
```
attachments/
├── blog/
│   ├── 2024-01-09-header.png
│   └── 2024-01-09-diagram.svg
├── projects/
│   ├── app-mockup-v1.png
│   └── app-mockup-v2.png
└── temp/
    └── screenshot.png
```

### Performance

**For best performance**:
- **Optimize images** before adding
- **Use appropriate formats**:
  - PNG for screenshots
  - JPG for photos
  - SVG for diagrams
- **Avoid huge files** (>10MB images)
- **Clean up** unused attachments

### Backup

**Important**: Attachments are part of your notes!

1. **Include in backups**: Don't forget `attachments/`
2. **Export with attachments**: Use Export All
3. **Cloud sync**: Ensure folder syncs
4. **Git**: Consider `.gitignore` for large files

## Import/Export

### Exporting with Attachments

**File → Export All**:
- Creates ZIP with notes + attachments
- Preserves folder structure
- Maintains all links

### Moving Between Systems

**To transfer notes**:
1. Copy entire DumbNotes folder
2. Or use Export All → Import
3. Links remain intact

### Sharing Notes

**With attachments**:
```bash
zip -r my-notes.zip note.md attachments/
```

**Without attachments**:
- Export as PDF (images embedded)
- Share markdown only

## Troubleshooting

### Images Not Displaying

1. **Check path**: Verify link correctness
2. **Check file**: Ensure file exists
3. **Check name**: Case-sensitive on Linux/Mac
4. **Check format**: Supported image type

### Broken Links

**Find and fix**:
1. Look for broken image icons
2. Check file exists in `attachments/`
3. Update path if moved
4. Use find/replace for bulk fixes

### Performance Issues

**If editor is slow**:
1. Too many large images
2. Optimize images externally
3. Use smaller preview sizes
4. Archive old attachments

### Permission Errors

**Can't save attachments**:
1. Check folder permissions
2. Ensure write access
3. Check disk space
4. Try different location

## Tips and Tricks

### Quick Screenshots

**macOS**:
- `Cmd+Shift+4` - Select area
- `Cmd+Ctrl+Shift+4` - Copy to clipboard
- Paste directly into DumbNote

**Windows**:
- `Win+Shift+S` - Snipping tool
- `PrtScn` - Full screen
- Paste into DumbNote

**Linux**:
- `Shift+PrtScn` - Select area
- Use screenshot tool
- Paste or drag result

### Image Editing

**Before adding**:
- Crop unnecessary parts
- Reduce resolution if needed
- Convert to appropriate format

**After adding**:
- Right-click → Open with editor
- Edit and save
- Updates in note automatically

### Templates with Images

Create template notes with placeholder images:
```markdown
# Project Template

![Logo](attachments/templates/logo-placeholder.png)

## Overview
![Diagram](attachments/templates/diagram-placeholder.png)
```

## Platform Differences

### Windows
- Paths use backslashes (auto-converted)
- Some formats need codecs
- Network drives supported

### macOS
- Case-sensitive filenames
- Quick Look preview works
- iCloud attachments sync

### Linux
- Case-sensitive filenames
- Permissions important
- Symlinks supported

---

Next: Master **[Navigation & Search](navigation-search.md)** features →