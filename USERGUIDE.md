---
title: User Guide
tags: [guide, help, documentation]
date: 2024-06-28
---

# DumbNote - Tips & Tricks Guide

A powerful markdown note-taking app with smart features for productive writing.

## 🎯 Smart Features Overview

- 🎯 **Smart typing** — Auto-complete lists, bullets, and checkboxes
- 🎯 **Drag & drop everything** — Images, PDFs, any file type as attachments
- 🎯 **Live preview** — See images and attachments inline while writing
- 🎯 **Folding** — Collapse sections for better document navigation
- 🎯 **Quick emoji** — Type `::` for instant emoji picker
- 🎯 **Zen mode** — Clean, dark, distraction-free writing environment
- 🎯 **Markdown shortcuts** — Bold, italic, code blocks with hotkeys
- 🎯 **Tag filtering** — Organize with #tags and filter instantly
- 🎯 **HTML paste conversion** — Copy from web, auto-converts to Markdown
- 🎯 **Smart indentation** — Perfect for code snippets and nested lists
- 🎯 **Syntax highlighting** — Code blocks with language-specific highlighting
- 🎯 **Sticky scroll context** — Always see which heading section you're in
- 🎯 **Multi-window support** — Open notes in multiple windows
- 🎯 **Fully offline** — Works completely without internet connection
- 🚀 **GitHub Gist integration** — Publish notes as public/private Gists with one click (requires internet)
- 📤 **PDF export** — One-click beautiful documents
- 📤 **ZIP archive** — Bulk export all notes + attachments

## 📝 Writing Tips & Tricks

### Smart List Continuation

- Type `-` and press Space → Auto bullet list
- Type `1.` and press Space → Auto numbered list
- Type `- [ ]` and press Space → Auto checkbox list
- Press **Enter** after any list item → Continues the list automatically
- Press **Tab** in a list → Indent/nest the item
- Press **Shift+Tab** in a list → Outdent the item

### Quick Formatting Shortcuts

| Action             | Shortcut    | Alternative                 |
| ------------------ | ----------- | --------------------------- |
| **Bold**           | `⌘B`        | Wrap text with `**bold**`   |
| _Italic_           | `⌘I`        | Wrap text with `*italic*`   |
| Heading            | `⌘+1-6`     | type #, ##, ###             |
| ~~Strike Through~~ | `⌘+shift+x` | Wrap text with `~~strike~~` |
| ==Highlight==      | `⌘+shift+h` | Wrap text with `==text==`   |

### Emoji Magic ✨

- Type `::` → Opens emoji picker instantly
- Copy emojis from anywhere and paste directly

## 🔍 Search & Organization

### Tag System

```yaml
---
tags: [work, meeting, important, Q4-2024]
category: project
priority: high
---
```

**Pro Tips:**

- Type `[]` in YAML front matter → Get tag autocomplete suggestions
- Use specific tags like `meeting-2024-06` instead of just `meeting`
- Use the tag filter in sidebar to show only notes with specific tags

### Search Like a Pro

- **Global search**: Find across all notes instantly
- **In-editor search**: `⌘F` to search within current note
- **Search by tag**: Click any tag in the sidebar to filter
- **Recent notes**: Always sorted by last modified

## 📎 File & Attachment Mastery

### Drag & Drop Everything

- **Images**: Drag PNG, JPG, GIF, SVG → Auto-embeds as `![](path)`
- **PDFs**: Drag documents → Creates `[filename.pdf](path)` link
- **Any file**: Drag anything → Smart link creation
- **Multiple files**: Drag several at once → All get processed

### Copy & Paste Magic

- **Web images**: Right-click image → Copy → `⌘V` → Auto-embeds
- **Web content**: Copy HTML from websites → Auto-converts to Markdown

### Live Preview Mode

- Click **Preview** button
- See images and attachments rendered inline
- Perfect for reviewing formatted documents
- Toggle back to edit with same shortcut

## 🖥️ Multi-Window Workflow

### Open Notes in New Windows

- **Right-click** any note → "Open in New Window"
- **Menu**: File → Open in New Window
- Perfect for:
  - Comparing notes side by side
  - Reference material while writing
  - Multi-monitor setups

## 🌐 Sharing & Export

### GitHub Gist Integration

1. Click **Gist** button in toolbar
2. Choose **Public** (discoverable) or **Private** (secret link)
3. One-click publishing to GitHub Gists
4. Perfect for sharing code snippets or notes

### PDF Export

- Click **PDF** button → Beautiful formatted document
- Includes all images and formatting
- Great for sharing with non-technical people

### Bulk Export

- **Export All** → ZIP file with all notes + attachments
- Perfect for backups or moving to another system
- Preserves folder structure and file relationships

## 🎨 Visual Features

### Document Folding

- Click the **▼** arrows next to headings
- Collapse entire sections for better navigation
- Perfect for long documents with multiple sections
- Fold/unfold with `⌘⇧[` and `⌘⇧]`

### Sticky Scroll Context

- **Automatic context headers** - Shows which heading section you're currently editing
- **Always visible** - Headers "stick" to the top when scrolling down
- **Nested awareness** - Shows the full heading hierarchy (H1 > H2 > H3)
- **Up to 5 levels** - Displays maximum 5 context lines for clarity
- **Perfect for long documents** - Never lose track of where you are!

### Zen Mode

- Clean, dark interface designed for focus
- Minimal distractions
- Syntax highlighting for better readability
- Optimized typography for long writing sessions

## 💡 Power User Tips

### YAML Front Matter Mastery

```yaml
---
title: "My Important Note"
tags: [work, urgent, client-xyz]
date: 2024-06-28
category: meeting
priority: high
status: draft
favorite: true
---
```

**What each field does:**

- `title`: Custom title (overrides filename)
- `tags`: For organization and filtering
- `date`: Track creation or due dates
- `category`: Group related notes
- `priority`: Mark importance
- `status`: Track progress (draft, review, final)
- `favorite`: Pin important notes

### Smart Paste Conversions

- **HTML lists** → Markdown bullet points
- **Tables** → Markdown table format
- **Code blocks** → Properly formatted code
- **Links** → Markdown link syntax
- **Bold/Italic** → Markdown formatting

### File Organization

```
~/Library/Application Support/DumbNote/
├── notes/
│   ├── your-notes.md
│   ├── meeting-notes.md
│   └── attachments/
│       ├── image1.png
│       ├── document.pdf
│       └── ...
```

**Best Practices:**

- Use descriptive filenames
- Keep attachments folder with notes for portability
- Regular exports for backup

## ⌨️ Complete Keyboard Shortcuts

### File Operations

| Action   | Shortcut |
| -------- | -------- |
| New Note | `⌘N`     |
| Save     | `⌘S`     |

### Navigation

| Action         | Shortcut |
| -------------- | -------- |
| Fold Section   | `⌘⇧[`    |
| Unfold Section | `⌘⇧]`    |

## 🌐 Offline Usage

### Fully Offline Capabilities

DumbNote works **completely offline** without any internet connection:

- ✅ **All core features** - Create, edit, save, and organize notes
- ✅ **Monaco Editor** - Full code editing with syntax highlighting
- ✅ **Markdown preview** - Real-time rendering using local libraries
- ✅ **File operations** - All file system operations are local
- ✅ **Attachments** - Drag & drop files, images, PDFs locally
- ✅ **Search** - Fast local search across all notes
- ✅ **Auto-save** - Automatic saving to local storage
- ✅ **Multi-window** - Open multiple notes simultaneously
- ✅ **Export** - PDF and ZIP exports work offline

### Optional Online Features

- 🌐 **GitHub Gist integration** - Publishing notes requires internet
- 🌐 **Authentication** - GitHub token setup requires internet initially

Your notes and all core functionality work perfectly without any internet connection!

## 🚨 Troubleshooting

### Common Issues & Solutions

**Notes not saving?**

- Check file permissions in `~/Library/Application Support/DumbNote/`
- Try creating a new note to test
- Restart the app if auto-save seems stuck

**Search not working?**

- Wait a few seconds after opening for search index to build
- Try typing more specific terms
- Check if you're in tag filter mode

**Gist export failing?**

- Check your internet connection
- Verify GitHub access (may need to re-authenticate)
- Try a shorter note first

### Getting Help

**Before reporting issues:**

1. Try restarting the app
2. Check you're using the latest version
3. Try reproducing with a simple test note

**Still need help?**

- Check the GitHub repository for known issues https://github.com/baibao577/dumbnote-page
- Include your OS version and app version when reporting

**Happy productive note-taking!** 📝✨

```

```
