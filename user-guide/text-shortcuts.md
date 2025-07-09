# Text Shortcuts & Auto-completions

DumbNote includes powerful text expansion and auto-completion features to speed up your writing. Type these shortcuts and watch them expand automatically!

## Date & Time Expansions

### Quick Date/Time Insertion

Type these shortcuts anywhere in your note:

| Shortcut | Expands to | Example |
|----------|------------|---------|
| `@today` | Full date and time | `2024-01-09 14:30:45` |
| `@date` | Current date only | `2024-01-09` |
| `@time` | Current time only | `14:30:45` |

**Usage Examples:**
```markdown
Meeting notes - @date
Started work at @time
Task completed on @today
```

### Format Details
- **Date format**: YYYY-MM-DD (ISO 8601)
- **Time format**: HH:MM:SS (24-hour)
- **Timezone**: Your system's local time

## Symbol Replacements

### Arrows and Symbols

These replacements happen automatically as you type:

| Type | Becomes | Description |
|------|---------|-------------|
| `->` | `→` | Right arrow |
| `<-` | `←` | Left arrow |
| `=>` | `⇒` | Double right arrow |
| `<=` | `⇐` | Double left arrow |
| `<->` | `↔` | Bidirectional arrow |
| `<=>` | `⇔` | Double bidirectional |

### Typography Symbols

| Type | Becomes | Description |
|------|---------|-------------|
| `...` | `…` | Ellipsis |
| `--` | `–` | En dash |
| `---` | `—` | Em dash |
| `1/2` | `½` | Half fraction |
| `1/4` | `¼` | Quarter fraction |
| `3/4` | `¾` | Three quarters |

### Copyright and Trademark

| Type | Becomes | Description |
|------|---------|-------------|
| `(c)` | `©` | Copyright |
| `(r)` | `®` | Registered |
| `(tm)` | `™` | Trademark |
| `(p)` | `℗` | Sound recording copyright |

## Emoji Picker

### Using the Emoji Picker

1. Type `::` anywhere in your note
2. The emoji picker appears automatically
3. Start typing to search for emoji
4. Use arrow keys to navigate
5. Press Enter or click to insert

**Example:**
- Type `::smile` → Shows smiling emojis
- Type `::heart` → Shows heart emojis
- Type `::check` → Shows checkmark emojis

### Emoji Search Tips

- **Search by name**: `::fire` finds 🔥
- **Search by emotion**: `::happy` finds 😊 😃 😄
- **Search by category**: `::food` finds 🍕 🍔 🍟
- **Search by color**: `::red` finds ❤️ 🔴 🌹

### Popular Emoji Shortcuts

| Search | Common Results |
|--------|----------------|
| `::smile` | 😊 😃 😄 |
| `::heart` | ❤️ 💕 💖 |
| `::star` | ⭐ ✨ 🌟 |
| `::check` | ✅ ✔️ ☑️ |
| `::x` | ❌ ✖️ ❎ |
| `::thumb` | 👍 👎 👌 |
| `::fire` | 🔥 🎯 💯 |

## Wiki-Style Linking

### Note Linking with `[[`

Type `[[` to open the note picker:

1. **Basic link**: `[[Note Title]]`
   - Links to "Note Title.md"
   - Displays as: Note Title

2. **Custom text**: `[[Note Title|Display Text]]`
   - Links to "Note Title.md"
   - Displays as: Display Text

3. **Partial matching**: `[[proj`
   - Shows all notes containing "proj"
   - Select from dropdown

### Link Navigation
- **Click** to open linked note
- **Cmd/Ctrl+Click** to open in new window
- **Hover** to see full path

## Smart List Continuation

### Auto-continuing Lists

When you press Enter in a list, DumbNote automatically continues it:

```markdown
- First item [Enter]
- █ (cursor here, dash added automatically)
```

### Smart Indentation

Use Tab/Shift+Tab for quick indentation:

```markdown
- Parent item
  [Tab] - Child item
    [Tab] - Grandchild
  [Shift+Tab] - Back to child level
```

### Breaking Out of Lists

- **Empty item + Enter**: Exits the list
- **Shift+Enter**: Line break within item
- **Backspace on empty item**: Remove and exit

## Task Creation

### Quick Task Lists

Transform any list into a task list:

1. Type `- [ ]` for unchecked task
2. Type `- [x]` for checked task
3. Click checkbox in preview to toggle

**Shortcuts:**
```markdown
- [ ] @task Buy groceries
- [ ] @task Call client by @time
- [x] @task Meeting at @date
```

## Advanced Text Expansions

### Custom Patterns

While DumbNote doesn't support custom text expansions, you can combine shortcuts:

```markdown
Daily standup - @date
======================
Started: @time

## Yesterday
- Completed task -> delivered

## Today  
- Working on feature => in progress

## Blockers
- None
```

### Quick Templates

Create reusable templates with shortcuts:

**Meeting Template:**
```markdown
# Meeting Notes - @date

**Time**: @time  
**Attendees**: 

## Agenda
1. 

## Discussion
- 

## Action Items
- [ ] @task 

## Next Meeting
- Date: 
- Time: 
```

**Daily Journal:**
```markdown
# Journal Entry - @today

## Mood: ::mood

## Highlights
- 

## Gratitude
1. 
2. 
3. 

## Tomorrow's Goals
- [ ] 
```

## Tips for Efficient Writing

### Speed Tips

1. **Combine shortcuts**: Use multiple expansions in one line
2. **Emoji search**: Type first few letters for quick access
3. **Arrow chains**: Create diagrams with arrow shortcuts
4. **Quick dating**: Use @date for consistent formatting

### Workflow Examples

#### Project Planning
```markdown
## Sprint Planning - @date

### User Stories
1. Feature A -> Development -> Testing -> Done
2. Feature B => In Progress

### Timeline
- Start: @date
- End: (two weeks later)
- Review: Every day at @time
```

#### Note Organization
```markdown
---
created: @today
tags: [meeting, project-x, ::important]
---

# Project X Update

Status: In Progress -> Review => Complete
```

#### Quick Documentation
```markdown
## API Endpoint

**Added**: @date  
**Author**: (your name)

`GET /api/users` -> Returns user list

Response:
```json
{
  "users": [...],
  "timestamp": "@today"
}
```
```

## Customization Options

### Disabling Expansions

If you need to type literal shortcuts without expansion:

1. **Escape character**: Use backslash
   - `\@date` → `@date` (literal)
   - `\->` → `->` (literal)

2. **Code blocks**: No expansion in code
   ```
   @date remains @date
   -> remains ->
   ```

3. **Inline code**: Use backticks
   - `` `@date` `` → `@date`

## Troubleshooting

### Expansions Not Working?

1. **Check cursor position**: Must be after the shortcut
2. **Check context**: Some expansions don't work in code blocks
3. **Timing**: Type continuously (no long pauses)

### Emoji Picker Issues

1. **Not appearing?**: Make sure you typed `::`
2. **Can't find emoji?**: Try different search terms
3. **Picker stuck?**: Press Escape to close

### Link Picker Problems

1. **No notes showing?**: Check if notes exist in sidebar
2. **Wrong note selected?**: Type more characters to filter
3. **Link not working?**: Ensure target note still exists

## Platform Differences

### Windows/Linux
- All shortcuts work identically
- Emoji rendering depends on system fonts

### macOS
- Full emoji support with system picker fallback
- Press `Cmd+Ctrl+Space` for system emoji picker

## Best Practices

1. **Consistent Dating**: Always use `@date` for searchable dates
2. **Quick Notes**: Start with `@today` for timestamped entries
3. **Visual Flow**: Use arrows for process documentation
4. **Emoji Headers**: Use emoji to categorize sections visually
5. **Link Freely**: Connect related notes with `[[links]]`

---

Next: Working with **[Attachments](attachments.md)** in DumbNote →