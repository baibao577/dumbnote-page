# Markdown Guide

DumbNote supports the full CommonMark specification plus additional features. This guide covers all markdown syntax with examples.

## Basic Syntax

### Headings

Create headings with `#` symbols. More `#` symbols mean smaller headings.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

**Alternative syntax** (for H1 and H2):
```markdown
Heading 1
=========

Heading 2
---------
```

**Keyboard shortcuts**:
- `Cmd/Ctrl+1` through `Cmd/Ctrl+6` for quick heading creation

### Emphasis

```markdown
*italic text* or _italic text_
**bold text** or __bold text__
***bold italic*** or ___bold italic___
~~strikethrough~~
==highlighted text==
```

**Keyboard shortcuts**:
- `Cmd/Ctrl+I` - Italic
- `Cmd/Ctrl+B` - Bold  
- `Cmd/Ctrl+Shift+X` - Strikethrough
- `Cmd/Ctrl+Shift+H` - Highlight

### Lists

#### Unordered Lists

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
    - Deeply nested
- Third item

* Can also use asterisks
+ Or plus signs
```

#### Ordered Lists

```markdown
1. First item
2. Second item
   1. Nested item
   2. Another nested item
3. Third item

1. Numbers don't have to be sequential
1. They'll be rendered correctly
1. This is convenient for reordering
```

#### Task Lists

```markdown
- [ ] Uncompleted task
- [x] Completed task
- [ ] Another task
  - [ ] Subtask
  - [x] Completed subtask
```

Click checkboxes in preview mode to toggle!

### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title on hover")
<https://example.com>
<email@example.com>

[Reference link][1]
[Another reference][link-id]

[1]: https://example.com
[link-id]: https://example.com "Optional title"
```

### Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Optional title")
![Reference image][img-id]

[img-id]: image.jpg "Optional title"
```

**Drag and drop**: Just drag an image file into the editor!

### Code

#### Inline Code

```markdown
Use `backticks` for inline code
```

**Keyboard shortcut**: `Cmd/Ctrl+Shift+C`

#### Code Blocks

````markdown
```
Simple code block
```

```javascript
// Syntax highlighted code
function hello() {
  console.log("Hello, World!");
}
```

```python
# Python example
def hello():
    print("Hello, World!")
```
````

**Keyboard shortcut**: `Cmd/Ctrl+Shift+K`

**Supported languages**: 100+ including JavaScript, Python, Java, C++, Ruby, Go, Rust, Swift, and more.

## Extended Syntax

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Left aligned | Center aligned | Right aligned |
|:-------------|:--------------:|--------------:|
| Left         | Center         | Right         |
| Text         | Text           | Text          |
```

**Pro tip**: Right-click a table to auto-format it!

### Blockquotes

```markdown
> This is a blockquote
> It can span multiple lines

> Blockquotes can be nested
>> Like this
>>> And even deeper

> ## With other elements
> - Lists work too
> - Like this
```

### Horizontal Rules

Create with three or more dashes, asterisks, or underscores:

```markdown
---
***
___
```

### Line Breaks

End a line with two spaces for a line break:
```markdown
First line··
Second line
```

Or use a backslash:
```markdown
First line\
Second line
```

### Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote text.

Another example[^note].

[^note]: Footnotes can contain multiple paragraphs.

    Indent paragraphs to include them.
```

## DumbNote Special Features

### Wiki-Style Links

Link between your notes easily:

```markdown
[[Another Note]]
[[Note Title|Display Text]]
```

Type `[[` to open the note picker!

### YAML Frontmatter

Add metadata to your notes:

```markdown
---
title: My Note
tags: [important, work, project]
date: 2024-01-09
author: Your Name
---

# Note content starts here
```

### Smart Date/Time

Type these shortcuts and they'll expand:
- `@today` → `2024-01-09 14:30:45`
- `@date` → `2024-01-09`
- `@time` → `14:30:45`

### Emoji Support

Type `::` to open the emoji picker, or use standard emoji:
- 😀 🎉 ❤️ ✅ ⭐

### HTML Support

DumbNote renders safe HTML:

```markdown
<mark>Highlighted text</mark>
<kbd>Ctrl</kbd> + <kbd>C</kbd>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
```

## Advanced Formatting

### Nested Lists with Mixed Types

```markdown
1. First ordered item
   - Unordered sub-item
   - Another sub-item
     1. Ordered sub-sub-item
     2. Another one
2. Second ordered item
   - [ ] Task in a list
   - [x] Completed task
```

### Definition Lists

```markdown
Term 1
: Definition 1
: Alternative definition

Term 2
: Definition with *emphasis*
: Another definition with **strong** text
```

### Escaping Characters

Use backslash to escape special characters:

```markdown
\*Not italic\*
\# Not a heading
\[Not a link\](text)
\`Not code\`
```

### Math Support (LaTeX)

Inline math: `$E = mc^2$`

Block math:
```markdown
$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$
```

## Best Practices

### Document Structure

1. **One H1 per document** - Use for the main title
2. **Logical hierarchy** - Don't skip heading levels
3. **Consistent formatting** - Pick a style and stick to it

### Lists

1. **Consistent markers** - Use `-` or `*` throughout
2. **Proper indentation** - 2 or 4 spaces for nesting
3. **Blank lines** - Between list items with paragraphs

### Code Blocks

1. **Always specify language** - For syntax highlighting
2. **Use fences** - Triple backticks, not indentation
3. **Proper escaping** - Use four backticks to show triple backticks

### Links and Images

1. **Descriptive text** - Not "click here"
2. **Relative paths** - For local files
3. **Alt text** - Always provide for images

## Markdown Previewing

### Toggle Preview

- **Keyboard**: `Cmd/Ctrl+Shift+V`
- **Button**: Preview icon in toolbar
- **Split view**: See edit and preview together

### Preview Themes

DumbNote includes 5 preview themes:
- Default
- Minimal
- Magazine
- Academic
- Developer

Change in theme settings!

### Interactive Elements

In preview mode:
- **Click checkboxes** - Toggle tasks
- **Click links** - Navigate
- **Click headings** - Copy anchor link

## Common Patterns

### README Template

```markdown
# Project Name

Brief description of the project.

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

\```bash
npm install project-name
\```

## Usage

\```javascript
const project = require('project-name');
\```

## License

MIT
```

### Meeting Notes

```markdown
# Meeting Notes - 2024-01-09

**Attendees**: Alice, Bob, Carol

## Agenda

1. Project status
2. Budget review
3. Next steps

## Discussion

### Project Status
- [x] Phase 1 complete
- [ ] Phase 2 in progress
- [ ] Phase 3 planned

## Action Items
- [ ] @alice: Send report by Friday
- [ ] @bob: Schedule follow-up
- [ ] @carol: Update documentation
```

### Daily Journal

```markdown
---
date: @date
mood: 😊
tags: [journal, personal]
---

# @date

## Today's Goals
- [ ] Morning workout
- [ ] Finish project proposal
- [ ] Call mom

## Reflections

Today was productive...

## Gratitude
1. Good weather
2. Helpful colleague
3. Delicious lunch
```

## Tips and Tricks

### Quick Formatting

1. **Bold important text** in lists
2. Use `inline code` for technical terms
3. ==Highlight== key information

### Readable Tables

```markdown
| Short | Readable | Headers |
|-------|----------|---------|
| 1     | 2        | 3       |
| 4     | 5        | 6       |
```

### Organize Long Documents

1. Use folding to collapse sections
2. Create a table of contents:

```markdown
## Table of Contents
- [Introduction](#introduction)
- [Main Content](#main-content)
- [Conclusion](#conclusion)
```

### Convert HTML

Paste HTML and press `Cmd/Ctrl+Shift+M` to convert to markdown!

---

Next: Master **[Keyboard Shortcuts](keyboard-shortcuts.md)** for faster writing →