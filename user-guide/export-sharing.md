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

### Export as Markdown

**Right-click method**:
1. Right-click note in sidebar
2. Select "Export as Markdown"
3. Choose save location
4. File saved with `.md` extension

**Features preserved**:
- All markdown syntax
- YAML frontmatter
- Links (as-is)
- Image references

**Options**:
- Include frontmatter (yes/no)
- Line ending style (LF/CRLF)

### Export as PDF

**From preview mode**:
1. Open note
2. Switch to preview mode (`Cmd/Ctrl+Shift+V`)
3. Right-click → "Print" or `Cmd/Ctrl+P`
4. Select "Save as PDF"

**PDF features**:
- Rendered markdown
- Embedded images
- Clickable links
- Page breaks honored
- Headers/footers optional

**Customization**:
- Page size (Letter/A4)
- Margins adjustment
- Scale to fit
- Background graphics

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

**Export options**:
- Include attachments (default: yes)
- Include hidden files (default: no)
- Preserve folder structure (default: yes)

### Selective Export

**Manual selection**:
1. Create folder for export
2. Copy desired notes
3. Copy related attachments
4. ZIP manually

**Via file manager**:
- Select multiple files
- Right-click → Compress/ZIP
- Share resulting archive

## GitHub Gist Integration

### What are Gists?

GitHub Gists are:
- Simple way to share text
- Version controlled
- Can be public or private
- Support markdown rendering
- Commentable

### Creating a Gist

**From DumbNote**:
1. Open note to share
2. **File → Share as Gist**
3. Choose visibility:
   - **Public** - Anyone can see
   - **Secret** - Only with link
4. Gist created, URL copied

**Requirements**:
- GitHub account
- GitHub token (configured)
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
2. Share as Gist again
3. Updates existing if same name

**View online**:
- Click Gist URL
- See rendered markdown
- View revision history
- Download raw

## Sharing Strategies

### For Collaboration

#### Shared Folder
**Best for**: Team access
1. Place notes in cloud folder
2. Share folder with team
3. Real-time sync
4. Edit conflicts handled by cloud

#### Git Repository
**Best for**: Version control
```bash
cd ~/Documents/DumbNotes
git init
git add .
git commit -m "Initial notes"
git remote add origin <repo-url>
git push
```

#### Export + Email
**Best for**: One-time sharing
1. Export as PDF
2. Attach to email
3. Formatting preserved
4. No DumbNote required

### For Publishing

#### Blog Posts
**Markdown → Blog**:
1. Export as markdown
2. Copy content
3. Paste in blog editor
4. Adjust image paths

**Popular platforms**:
- Jekyll/GitHub Pages
- Ghost
- WordPress (with plugin)
- Dev.to
- Medium (via import)

#### Documentation
**Static site generators**:
```bash
# Copy notes to docs folder
cp ~/DumbNotes/*.md ./docs/

# Build with generator
mkdocs build
# or
hugo
# or
gatsby build
```

#### Knowledge Base
**For wikis**:
1. Export markdown
2. Convert links to wiki format
3. Upload images separately
4. Maintain structure

### For Backup

#### Local Backup
**Regular schedule**:
1. Weekly: Export All
2. Name with date
3. Store on external drive
4. Keep 3-4 versions

**Backup script**:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d)
zip -r "DumbNote-Backup-$DATE.zip" ~/Documents/DumbNotes/
mv *.zip /Volumes/Backup/
```

#### Cloud Backup
**Automatic options**:
- Place notes in Dropbox
- Use iCloud Drive
- OneDrive sync
- Google Drive backup

**Version history**:
- Most clouds keep versions
- Can restore previous
- Conflict resolution
- Offline access

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

## Advanced Export

### Automated Exports

**Using scripts**:
```javascript
// Node.js script example
const fs = require('fs');
const path = require('path');

// Read all .md files
const notes = fs.readdirSync('./notes')
  .filter(f => f.endsWith('.md'));

// Convert each to HTML
notes.forEach(note => {
  // Conversion logic
});
```

### Custom Templates

**For PDF export**:
1. Create HTML template
2. Include CSS styling
3. Use print media queries
4. Export via browser

**Example template**:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    @media print {
      body { font-family: serif; }
      h1 { page-break-before: always; }
    }
  </style>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

### Batch Processing

**Export multiple notes**:
```bash
# Export all notes as PDF
for file in *.md; do
  pandoc "$file" -o "${file%.md}.pdf"
done

# Create individual zips
for file in *.md; do
  zip "${file%.md}.zip" "$file" attachments/*
done
```

## Sharing Best Practices

### Privacy Considerations

**Before sharing**:
1. Review for sensitive info
2. Check linked notes
3. Verify image content
4. Remove private tags

**Sanitization**:
- Remove personal details
- Redact confidential info
- Check frontmatter data
- Review attachments

### Formatting Tips

**For best results**:
1. Use standard markdown
2. Avoid custom syntax
3. Test preview first
4. Check image paths

**Cross-platform**:
- Use forward slashes
- Relative paths
- Standard image formats
- UTF-8 encoding

### Version Control

**Track changes**:
1. Date in filename
2. Version in frontmatter
3. Git for history
4. Change log notes

**Example naming**:
```
project-proposal-v1-20240109.md
project-proposal-v2-20240115.md
project-proposal-FINAL-20240120.md
```

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

### Format Issues

**Encoding problems**:
1. Use UTF-8 always
2. Check special characters
3. Test on target system
4. Convert if needed

**Line ending issues**:
1. Windows: CRLF
2. Mac/Linux: LF
3. Git: auto-convert
4. Configure editor

## Tips and Tricks

### Quick Sharing

1. **Screenshots**: For quick visual share
2. **Copy/paste**: For chat/email
3. **Gists**: For code/technical
4. **PDF**: For formal documents

### Preservation

1. **Archive regularly**: Weekly/monthly
2. **Multiple locations**: 3-2-1 backup
3. **Test restores**: Verify backups work
4. **Document structure**: README files

### Integration

**With other tools**:
- Obsidian: Compatible markdown
- Notion: Import markdown
- Roam: Convert wiki links
- Bear: Similar format

---

Next: Set up **[GitHub Sync](github-sync.md)** for automatic backup →