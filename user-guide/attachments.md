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

---

Next: Learn about **[Tags, Favorites & Hub View](tags-favorites-hub.md)** →
