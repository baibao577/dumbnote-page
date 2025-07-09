# Export & Sharing

DumbNote provides multiple ways to export and share your notes. From simple markdown files to PDF exports and GitHub Gists, you can share your work in the format that works best for your audience.

## Export Options Overview

### Available Formats

1. **Markdown (.md)** - Original format with all features
2. **PDF** - Professional documents for sharing
3. **ZIP Archive** - Complete backup with attachments
4. **GitHub Gist** - Online sharing with version control
5. **HTML** - Web-ready format (via preview)

## Individual Note Export

### Using the Share Button

All individual note exports are accessed through the **Share button** in the toolbar:

1. Open the note you want to export
2. Click the **Share** button (share icon) in the toolbar
3. A dropdown menu appears with export options

### Export as Markdown

**Via Share button**:

1. Click Share button in toolbar
2. Select **"Markdown"** under Export Formats
3. Choose save location
4. File saved with `.md` extension

**Features preserved**:

- All markdown syntax
- YAML frontmatter
- Links (as-is)
- Image references
- Original formatting

### Export as PDF

**Via Share button**:

1. Click Share button in toolbar
2. Select **"PDF"** under Export Formats
3. DumbNote generates the PDF
4. Choose save location

**PDF features**:

- Fully rendered markdown
- Embedded images
- Clickable links
- Professional formatting
- Print-ready output

**Alternative method** (via preview):

1. Switch to preview mode (`Cmd/Ctrl+Shift+V`)
2. Right-click → "Print" or `Cmd/Ctrl+P`
3. Select "Save as PDF"

### Copy as HTML

**From preview**:

1. Select content in preview
2. Copy (`Cmd/Ctrl+C`)
3. Paste into email/web
4. Formatting preserved

## Bulk Export

### Export All Notes

**File menu method**:

1. **File → Export All**
2. Choose location
3. Wait for processing
4. ZIP file created

**What's included**:

```
DumbNote-Export-2024-01-09.zip
├── notes/
│   ├── note1.md
│   ├── note2.md
│   └── folder/
│       └── note3.md
├── attachments/
│   ├── image1.png
│   └── document.pdf
└── manifest.json
```

## GitHub Gist Integration

### What are Gists?

GitHub Gists are:

- Simple way to share text
- Version controlled
- Can be public or private
- Support markdown rendering
- Commentable

### Creating a Gist

**Via Share button**:

1. Open note to share
2. Click **Share** button in toolbar
3. Select **"GitHub Gist"** under Publish Online
4. If not authenticated, connect with GitHub token
5. Choose visibility:
   - **Public** - Discoverable by search engines
   - **Private** - Only accessible via direct URL
6. Gist created, URL copied

**Requirements**:

- GitHub account
- GitHub token with 'gist' scope
- Internet connection

### Gist Features

**Automatic features**:

- Syntax highlighting
- Markdown preview
- Raw file access
- Embed capability
- Fork support

**URL structure**:

```
https://gist.github.com/username/gist-id
```

### Managing Gists

**Update existing**:

1. Make changes in DumbNote
2. Click Share button → GitHub Gist
3. DumbNote detects existing Gist
4. Choose to update, view, or delete

**Gist actions**:

- **Update** - Keep same URL, update content
- **View** - Open in browser
- **Delete** - Remove from GitHub
- **Switch privacy** - Convert public↔private

**View online**:

- Click Gist URL
- See rendered markdown
- View revision history
- Download raw
- Fork or star

## Sharing Strategies

## Format Conversion

### Markdown to Other Formats

#### Using Pandoc

**Install Pandoc**, then:

```bash
# MD to DOCX
pandoc note.md -o note.docx

# MD to HTML
pandoc note.md -o note.html

# MD to LaTeX
pandoc note.md -o note.tex

# MD to EPUB
pandoc note.md -o note.epub
```

#### Online Converters

- Dillinger.io
- StackEdit.io
- Markdown to PDF
- CloudConvert

### Preserving Formatting

**For rich content**:

1. Use PDF export
2. Maintains all styling
3. Images embedded
4. Links clickable

**For plain text**:

1. Export markdown
2. Remove frontmatter
3. Simplify links
4. Check compatibility

## Troubleshooting

### Export Issues

**PDF not rendering correctly**:

1. Check preview first
2. Try different browser
3. Simplify complex elements
4. Update DumbNote

**Images missing**:

1. Check attachment paths
2. Verify files exist
3. Use relative paths
4. Include in export

**Large exports failing**:

1. Export in batches
2. Exclude large attachments
3. Compress images first
4. Check disk space

### Sharing Problems

**Gist creation fails**:

1. Check internet connection
2. Verify GitHub token
3. Check rate limits
4. Try smaller note

**Links broken after export**:

1. Use relative paths
2. Export with structure
3. Update paths manually
4. Include all dependencies

---

Next: Set up **[GitHub Sync](github-sync.md)** for automatic backup →
