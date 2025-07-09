# Organization

Learn how to organize your notes effectively using tags, folders, favorites, and DumbNote's unique link grouping feature.

## Tags System

### What Are Tags?

Tags are keywords that help categorize notes across folders. Unlike folders (one location), notes can have multiple tags.

### Adding Tags

Tags go in YAML frontmatter at the top of your note:

```markdown
---
tags: [project, important, deadline]
---

# My Note Content
```

**Multiple formats supported**:
```yaml
# Array format
tags: [tag1, tag2, tag3]

# List format
tags:
  - tag1
  - tag2
  - tag3

# Single tag
tags: important
```

### Tag Autocomplete

Type `[` in frontmatter to see existing tags:
1. Start typing tag name
2. Select from suggestions
3. Press Tab to complete

### Using Tags

**In sidebar**:
- Tags section below notes
- Click tag to filter notes
- Shows count per tag
- Collapsible section

**Tag filtering**:
- Click tag to show only tagged notes
- Click again to clear filter
- Multiple tags = OR filter

### Tag Best Practices

**Good tag examples**:
- `project-a`, `project-b` - Project tags
- `meeting`, `notes`, `ideas` - Type tags
- `urgent`, `pending`, `done` - Status tags
- `2024-q1`, `2024-q2` - Time tags

**Tag conventions**:
- Use lowercase
- Use hyphens for multi-word
- Be consistent
- Don't over-tag (3-5 per note)

## Favorites System

### Marking Favorites

**Star important notes**:
1. Right-click note → "Add to Favorites"
2. Or click star icon (when available)
3. Shows star indicator

### Managing Favorites

**Favorites section**:
- Quick access to starred notes
- Separate from main list
- Survives restarts

**Remove from favorites**:
- Right-click → "Remove from Favorites"
- Or click star again

### Favorite Use Cases

**Star these notes**:
- Daily journal entry
- Project overview
- Quick reference
- Templates
- Current tasks

## Link Grouping

### What is Link Grouping?

DumbNote's unique feature that visualizes note connections:
- Groups notes by wiki-links
- Identifies "hub" notes
- Shows orphan notes
- Visual organization

### How It Works

**Hub detection**:
- Notes with 3+ connections become hubs
- Adjustable threshold
- Auto-groups related notes

**Example structure**:
```
📍 Project Hub (5 connections)
  ├── Meeting Notes
  ├── Requirements
  ├── Design Doc
  ├── Tasks
  └── Resources

📍 Learning Hub (4 connections)
  ├── React Notes
  ├── TypeScript Guide
  ├── Tutorial Links
  └── Practice Projects
```

### Configuring Link Grouping

**Settings**:
```yaml
# In preferences
linkGrouping:
  enabled: true
  hubThreshold: 3    # Min connections for hub
  showOrphans: true  # Show unlinked notes
  preferredView: all # 'all' or 'hubs'
```

**Adjust threshold**:
- Lower (2) = More hubs, smaller groups
- Higher (5) = Fewer hubs, larger groups
- Default (3) = Balanced

### Using Link Groups

**Navigation**:
- Click hub to expand/collapse
- See connection count
- Navigate via links
- Drag to reorder

**Views**:
- **All** - Traditional file list
- **Hubs** - Grouped by connections
- **Orphans** - Unlinked notes

### Creating Effective Hubs

**Hub note pattern**:
```markdown
# Project Alpha Hub

## Overview
Main coordination point for Project Alpha

## Key Documents
- [[Project Alpha Requirements]]
- [[Project Alpha Design]]
- [[Project Alpha Timeline]]

## Meeting Notes
- [[2024-01-09 Alpha Kickoff]]
- [[2024-01-16 Alpha Review]]

## Resources
- [[Alpha Team Contacts]]
- [[Alpha Tools Setup]]
```

## Folder Structure

### Organizing with Folders

**Recommended structures**:

#### By Type
```
📁 Notes/
  📁 meetings/
  📁 projects/
  📁 ideas/
  📁 reference/
```

#### By Area
```
📁 Notes/
  📁 work/
  📁 personal/
  📁 learning/
  📁 archive/
```

#### By Time
```
📁 Notes/
  📁 2024/
    📁 Q1/
    📁 Q2/
  📁 2023/
```

#### Hybrid Approach
```
📁 Notes/
  📁 active/
    📁 projects/
    📁 daily/
  📁 reference/
    📁 guides/
    📁 templates/
  📁 archive/
    📁 2023/
    📁 2022/
```

### Folder Best Practices

1. **Not too deep** - Max 3-4 levels
2. **Clear names** - Self-explanatory
3. **Consistent** - Same pattern throughout
4. **Flexible** - Easy to reorganize

## Organization Strategies

### PARA Method

**Projects** - Active projects with deadlines
**Areas** - Ongoing responsibilities
**Resources** - Reference materials
**Archive** - Inactive items

```
📁 1-Projects/
  📁 Website-Redesign/
  📁 Q1-Report/
📁 2-Areas/
  📁 Finance/
  📁 Marketing/
📁 3-Resources/
  📁 Templates/
  📁 Guides/
📁 4-Archive/
```

### Zettelkasten Style

**Flat structure with links**:
```
📁 Notes/
  📄 20240109143022 - Idea about X
  📄 20240109150133 - Extension of [[20240109143022]]
  📄 20240110093044 - Counter-argument to [[20240109150133]]
```

### GTD (Getting Things Done)

```
📁 Inbox/        # Capture
📁 Next-Actions/ # Actionable
📁 Projects/     # Multi-step
📁 Waiting/      # Delegated
📁 Someday/      # Future
📁 Reference/    # Non-actionable
```

### Daily Notes

```
📁 Daily/
  📁 2024/
    📁 01-January/
      📄 2024-01-09.md
      📄 2024-01-10.md
```

## Advanced Organization

### Metadata Organization

**Rich frontmatter**:
```yaml
---
title: Project Alpha Design
tags: [project-alpha, design, in-progress]
created: 2024-01-09
updated: 2024-01-10
status: draft
priority: high
assignee: John Doe
related:
  - [[Project Alpha Requirements]]
  - [[Design System Guide]]
---
```

### Smart Queries

**Search by metadata**:
- `tag:urgent` - All urgent items
- `status:draft` - All drafts
- `created:2024-01` - Created in January

### Templates

**Create templates folder**:
```
📁 templates/
  📄 meeting-template.md
  📄 project-template.md
  📄 daily-template.md
```

**Meeting template**:
```markdown
---
tags: [meeting]
date: @date
attendees: []
---

# Meeting - @date

## Agenda
1. 

## Notes
- 

## Action Items
- [ ] 

## Next Meeting
- Date: 
```

### Index Notes

**Create index/hub notes**:
```markdown
# 📚 Resource Index

## 📖 Guides
- [[Markdown Guide]]
- [[Git Basics]]
- [[React Patterns]]

## 🛠 Tools
- [[VS Code Setup]]
- [[Terminal Commands]]

## 📝 Templates
- [[Meeting Template]]
- [[Project Template]]
```

## Maintenance

### Regular Cleanup

**Weekly tasks**:
1. Archive completed projects
2. Update tags
3. Remove duplicate notes
4. Fix broken links

**Monthly tasks**:
1. Review folder structure
2. Consolidate similar notes
3. Update index pages
4. Backup everything

### Dealing with Growth

**When notes exceed 1000**:
1. Archive by year
2. Create more hubs
3. Use search more
4. Consider splitting

### Refactoring

**Signs you need to reorganize**:
- Can't find notes quickly
- Duplicate content
- Broken link chains
- Unclear structure

**Refactoring process**:
1. Export all (backup)
2. Plan new structure
3. Move in batches
4. Update links
5. Test navigation

## Tips and Tricks

### Quick Organization

1. **Date everything** - Use @date shortcut
2. **Tag immediately** - While context is fresh
3. **Link generously** - Connect related notes
4. **Review regularly** - Weekly cleanup

### Visual Organization

**Use emoji in titles**:
```
📅 Meeting Notes
🎯 Project Goals
💡 Ideas
✅ Completed Tasks
🔧 Configuration
```

### Automation Ideas

**Naming conventions**:
- `YYYY-MM-DD-topic` for chronological
- `project-component-detail` for hierarchical
- `question-answer-followup` for research

### Search as Organization

Sometimes the best organization is good search:
- Descriptive titles
- Comprehensive content
- Good tags
- Let search do the work

## Platform Tips

### Cloud Sync

**If using cloud storage**:
- Consistent paths across devices
- Avoid special characters
- Handle conflicts promptly
- Regular backups

### Git Integration

**Version control organization**:
```
.gitignore:
attachments/large-files/
*.tmp
.DS_Store
```

### Multi-device

**Considerations**:
- Case sensitivity differs
- Path separators vary
- Sync lag possible
- Test on all platforms

---

Next: Customize your experience with **[Themes & Customization](themes-customization.md)** →