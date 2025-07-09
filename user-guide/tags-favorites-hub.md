# Tags, Favorites & Hub View

Organize your notes efficiently with tags, mark important notes as favorites, and visualize connections between notes using Hub View.

## Tags System

### What Are Tags?

Tags are keywords that help you find related notes quickly. Unlike folders (one location per note), you can add multiple tags to any note.

### Adding Tags to Notes

Add tags in the YAML frontmatter at the top of your note:

```yaml
---
tags: [project, important, todo]
---
# My Note Content
```

### Tag Features

**In the sidebar**:

- Tags appear below your notes list
- Click any tag to filter notes
- Number shows how many notes have that tag
- Click the section header to collapse/expand

**Quick filtering**:

1. Click a tag to show only notes with that tag
2. Click the same tag again to clear the filter
3. Search works within filtered results

### Tag Best Practices

**Useful tag patterns**:

- **Project tags**: `project-alpha`, `project-beta`
- **Status tags**: `todo`, `in-progress`, `done`
- **Type tags**: `meeting`, `idea`, `reference`
- **Time tags**: `2024-q1`, `weekly`, `archive`

**Tips**:

- Use lowercase for consistency
- Use hyphens for multi-word tags: `book-notes`
- Keep it simple - 3-5 tags per note is plenty
- Be consistent with naming

## Favorites System

### Marking Important Notes

Quickly access your most-used notes by marking them as favorites.

**To favorite a note**:

1. Open the note
2. Click the star button in the toolbar
3. Or right-click in sidebar → "Add to Favorites"

**To unfavorite**:

- Click the filled star button again
- Or right-click → "Remove from Favorites"

### Using Favorites

**Perfect for**:

- Your daily journal
- Project overview documents
- Frequently used templates
- Quick reference guides
- Current working documents

Favorites appear at the top of your sidebar for instant access.

## Hub View - Visualize Note Connections

### What is Hub View?

Hub View automatically detects and displays how your notes connect to each other through wiki-style links (`[[Note Name]]`). Notes that link to many others become "hubs" - like a table of contents for related topics.

### How Linking Works

**Create links between notes**:

```markdown
# Project Overview

Check our [[Project Timeline]] for deadlines.
The [[Design Document]] has all the details.
See [[Meeting Notes 2024-01-09]] for decisions.
```

**What happens**:

- DumbNote detects these links
- Creates visual groups in the sidebar
- The "Project Overview" becomes a hub
- Linked notes appear under it

### Hub View in Practice

**Example 1: Project Management**

Create a central project note:

```markdown
# Project Alpha

## Key Documents

- [[Project Alpha - Requirements]]
- [[Project Alpha - Technical Design]]
- [[Project Alpha - Timeline]]

## Team

- [[Team Contacts]]
- [[Team Meeting Notes]]

## Resources

- [[Development Setup Guide]]
- [[API Documentation]]
```

Result in Hub View:

```
📍 Project Alpha (7 links)
  ├── Project Alpha - Requirements
  ├── Project Alpha - Technical Design
  ├── Project Alpha - Timeline
  ├── Team Contacts
  ├── Team Meeting Notes
  ├── Development Setup Guide
  └── API Documentation
```

**Example 2: Learning Notes**

Create a topic overview:

```markdown
# Python Learning Path

## Basics

- [[Python Syntax Notes]]
- [[Python Data Types]]
- [[Python Functions Guide]]

## Advanced Topics

- [[Python Classes and OOP]]
- [[Python Decorators]]
- [[Python Async Programming]]

## Projects

- [[Todo App Project]]
- [[Web Scraper Project]]
```

### Linking Strategies

**Hub-and-Spoke Pattern** (Recommended):

- Create one central "hub" note per topic
- Link all related notes TO the hub
- Hub links back to all related notes
- Best for: Projects, learning topics, research

```
     Hub Note
    /    |    \
Child  Child  Child
```

**Web Pattern**:

- Notes link to each other as needed
- No central hub required
- Natural connections emerge
- Best for: Daily notes, meeting notes

```
Note A --- Note B
  |   \  /   |
  |    X     |
  |   / \    |
Note C --- Note D
```

**Parent-Child Pattern**:

- Hierarchical structure
- Parent note links to all children
- Children link back to parent
- Best for: Documentation, guides

```
    Parent
   /   |   \
Child Child Child
```

### Practical Hub Examples

**1. Daily Notes Hub**:

```markdown
# 2024 Daily Notes

## January

- [[2024-01-01 Monday]]
- [[2024-01-02 Tuesday]]
- [[2024-01-03 Wednesday]]
  ...
```

**2. Meeting Notes Hub**:

```markdown
# Team Meetings

## Weekly Standups

- [[2024-W01 Standup]]
- [[2024-W02 Standup]]

## Project Reviews

- [[Project Alpha Review]]
- [[Project Beta Kickoff]]
```

**3. Knowledge Base Hub**:

```markdown
# Development Wiki

## Languages

- [[JavaScript Guide]]
- [[Python Guide]]
- [[Go Guide]]

## Tools

- [[Git Workflow]]
- [[Docker Setup]]
- [[VS Code Tips]]
```

### Hub View Settings

**Toggle Hub View**:

- Click view toggle in sidebar
- Choose between:
  - **All Notes** - Traditional file list
  - **Hub View** - Grouped by connections
  - **Orphans** - Notes without links

**Customize behavior**:

- Minimum links to become a hub (default: 3)
- Show/hide orphaned notes
- Expand/collapse groups

### Tips for Effective Linking

**Do**:

- Create hub notes for major topics
- Link generously - connections are valuable
- Use descriptive link text
- Keep hub notes updated
- Link both ways (hub→note and note→hub)

**Don't**:

- Force connections that don't exist
- Create too many levels of hierarchy
- Worry about perfect organization
- Forget to update links when renaming

### Common Hub Patterns

**Project Hub**:

- Overview/README as hub
- All project docs link to it
- Easy navigation
- Clear structure

**Time-based Hub**:

- Monthly/weekly overview
- Daily notes link to it
- Good for journals
- Natural archives

**Topic Hub**:

- Subject overview page
- All related notes connect
- Great for learning
- Builds knowledge graph

## Search Feature

### Quick Search

Find any note instantly:

1. **Keyboard**: Press `Cmd/Ctrl+F`
2. **Sidebar**: Use search box at top
3. **Type to search**: Results appear instantly

### Search Tips

**What's searched**:

- Note titles
- Full content
- Tags
- YAML frontmatter

**Search syntax**:

- `project` - Find "project" anywhere
- `"exact phrase"` - Find exact match
- `tag:important` - Find by tag
- `title:meeting` - Search titles only

### Advanced Search

**Operators**:

- `AND` - Both terms: `python AND tutorial`
- `OR` - Either term: `bug OR issue`
- `NOT` - Exclude: `meeting NOT cancelled`
- `*` - Wildcard: `meet*` finds meeting, meets

## Organization Tips

### Quick Wins

1. **Tag new notes immediately** - It's harder later
2. **Create topic hubs early** - Start with 3-5 main topics
3. **Use favorites sparingly** - Only truly frequent notes
4. **Link as you write** - Build connections naturally

### Weekly Review

Take 10 minutes weekly to:

- Tag any untagged notes
- Update hub pages with new links
- Archive completed projects
- Review and clean up tags

### Naming Conventions

**For better organization**:

- Daily notes: `2024-01-09 Daily Note`
- Meetings: `2024-01-09 Team Standup`
- Projects: `Project Name - Document Type`
- Resources: `Tool Name - Guide`

---

Next: Backup your notes with **[GitHub Sync](github-sync.md)** →
