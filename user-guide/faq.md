# Frequently Asked Questions

Quick answers to common questions about DumbNote. Can't find what you're looking for? Check our **[Troubleshooting](troubleshooting.md)** guide.

## General Questions

### What is DumbNote?

DumbNote is a powerful markdown note-taking app built with Electron. It combines the advanced editing capabilities of Monaco Editor (VS Code's editor) with comprehensive note management features, including attachments, search, themes, and GitHub sync.

### Is DumbNote free?

Yes! DumbNote is completely free and open source. You can use all features without any limitations or subscriptions.

### Which platforms are supported?

DumbNote runs on:

- **macOS** (Intel and Apple Silicon)
- **Windows** (64-bit)
- **Linux** (AppImage, deb, rpm)

### Where can I download DumbNote?

Download the latest version from: https://github.com/baibao577/dumbnote-page/releases

### Is my data safe?

Yes! Your data is:

- Stored locally on your computer
- Never sent to any servers (unless you enable GitHub sync)
- Fully under your control
- Easily exportable in standard markdown format

## Getting Started

### How do I install DumbNote?

1. Download the installer for your platform
2. Run the installer (may need to allow in security settings)
3. Launch DumbNote
4. Choose or create a notes folder

See **[Getting Started](getting-started.md)** for detailed instructions.

### Can I use my existing markdown files?

Absolutely! DumbNote works with standard markdown files. Just:

1. Copy your files to the notes folder
2. Or use File → Import to bring them in
3. Or set DumbNote to use your existing folder

### What file types does DumbNote support?

- **Notes**: `.md` (markdown) files only
- **Attachments**: Images (PNG, JPG, GIF), PDFs, videos, any file type
- **Import**: Markdown files from other apps

## Editor Questions

### How do I enable spellcheck?

Go to **Edit → Check Spelling** or right-click in the editor and select "Enable Spellcheck". Spellcheck underlines misspellings in red and provides suggestions on right-click.

### Can I customize the editor?

Yes! You can:

- Change themes (5 built-in + custom)
- Adjust font size with Cmd/Ctrl+Plus/Minus
- Configure tab size and spaces
- More customization options coming

### Why can't I see line numbers?

Line numbers appear when you hover over the left margin. This keeps the interface clean while providing the feature when needed.

## Features

### How does search work?

DumbNote uses full-text search powered by Lunr.js:

- Searches content, titles, and tags
- Real-time results as you type
- Background indexing for speed
- Supports advanced search syntax

See **[Tags, Favorites & Hub View](tags-favorites-hub.md)** for search details.

### Can I sync with GitHub?

Yes! DumbNote includes built-in GitHub sync:

1. Get a GitHub personal access token
2. Configure in Sync → Setup GitHub Sync
3. Your notes backup to a private repository

See **[GitHub Sync](github-sync.md)** guide.

### How do attachments work?

- Drag & drop or paste images directly
- Files copied to `attachments/` folder
- Automatic organization by date
- Inline preview for images
- Any file type supported

See **[Attachments](attachments.md)** guide.

### Can I use tags?

Yes! Add tags in YAML frontmatter:

```yaml
---
tags: [project, important, todo]
---
```

Tags appear in the sidebar and are searchable.

### Is there a mobile version?

Not currently. DumbNote is desktop-only, but you can access and edit your notes on mobile using GitHub sync:

**Mobile access via GitHub**:

1. Set up GitHub sync in DumbNote (see **[GitHub Sync](github-sync.md)**)
2. Install the GitHub mobile app (iOS/Android)
3. Access your `dumbnote-storage` repository
4. View and edit notes directly in the app

**Benefits**:

- Full access to all your notes
- Edit markdown files on the go
- Changes sync back to DumbNote
- Version history available
- Works offline with sync later

**Tips for mobile editing**:

1. Sync before leaving your desktop
2. Pull changes on mobile before editing
3. Commit and push after mobile edits
4. Sync again when back at desktop

## Customization

### How do I create custom themes?

1. Go to **Preferences → Themes**
2. Click "Create Custom Theme"
3. Adjust colors with the visual editor
4. Save with a unique name

You can also choose from 5 built-in themes in the theme selector (top-right of the window).

### Can I change keyboard shortcuts?

Currently, keyboard shortcuts are fixed. Custom keybindings are planned for a future release. See all shortcuts in **[Keyboard Shortcuts](keyboard-shortcuts.md)**.

### How do I change the preview style?

The preview uses your selected theme. To change how it looks:

1. Switch themes in Preferences
2. Or create a custom theme
3. Preview updates automatically

### Can I use custom CSS?

Not directly yet, but you can:

- Create custom themes for color changes
- Future versions will support custom CSS
- Export to HTML and apply your CSS

## Import/Export

### How do I import notes from other apps?

**From markdown apps** (Obsidian, Bear, etc.):

1. File → Import Notes
2. Select your markdown files
3. Choose copy or link mode

**From other formats**:

- Export from the app as markdown first
- Then import into DumbNote

### How do I export my notes?

Multiple options:

- **Individual**: Right-click → Export as Markdown/PDF
- **All notes**: File → Export All (creates ZIP)
- **GitHub Gist**: File → Share as Gist
- **Copy HTML**: From preview mode

See **[Export & Sharing](export-sharing.md)**.

### Can I backup my notes?

Yes! Several ways:

1. **GitHub Sync** - Automatic cloud backup
2. **Export All** - Creates ZIP archive
3. **Manual** - Copy the notes folder

### Will my notes work in other apps?

Yes! DumbNote uses standard markdown format. Your notes will work in:

- Obsidian
- Typora
- VS Code
- Any markdown editor

## Troubleshooting

### DumbNote won't start

1. Wait 10-15 seconds (initial load)
2. Try restarting your computer
3. Check if another instance is running
4. See **[Troubleshooting](troubleshooting.md)**

### Search isn't working

1. Let indexing complete (see status bar)
2. Try File → Clear Cache
3. Restart DumbNote
4. Check file permissions

### Notes aren't saving

1. Check disk space
2. Verify folder permissions
3. Try saving to different location
4. Disable antivirus temporarily

### Images aren't displaying

1. Check if image file exists
2. Verify path is correct
3. Try re-adding the image
4. Check attachment folder permissions

### Can't sync with GitHub

1. Verify token has 'repo' scope
2. Check internet connection
3. Try manual sync
4. See **[GitHub Sync](github-sync.md)** troubleshooting

## Tips & Best Practices

### What's the best way to organize notes?

Recommendations:

- Use folders for major categories
- Tags for cross-cutting topics
- Date prefixes for journals
- Consistent naming convention

See **[Organization](organization.md)** guide.

### How can I speed up DumbNote?

- Keep notes under 10MB
- Archive old notes
- Clear cache periodically
- Limit attachments per note
- Disable spellcheck for large files

### Should I use copy or link mode?

- **Copy**: For permanent notes you want in your collection
- **Link**: For external projects or shared documents
- **Copy**: If you want GitHub sync
- **Link**: If files must stay in original location

### What's the recommended workflow?

1. **Capture** quickly with Cmd/Ctrl+N
2. **Organize** with folders and tags
3. **Search** instead of browsing
4. **Sync** regularly if using GitHub
5. **Export** for sharing

### How do I migrate from another app?

1. Export all notes as markdown
2. Import into DumbNote
3. Fix any formatting issues
4. Organize with folders/tags
5. Set up GitHub sync

---

Still have questions?

- Check **[Troubleshooting](troubleshooting.md)** for technical issues
- Visit the **[User Guide](index.md)** for detailed documentation
- Report issues on GitHub
- Join our community forums
