# Spellcheck

DumbNote includes built-in spellcheck functionality powered by Typo.js. This guide covers enabling spellcheck, using suggestions, and managing your custom dictionary.

## Overview

### Spellcheck Features

- **Real-time checking** - Underlines misspellings as you type
- **US English dictionary** - Comprehensive word list
- **Custom dictionary** - Add your own words
- **Context menu suggestions** - Right-click corrections
- **Performance optimized** - Viewport-based checking

### How It Works

1. **Typo.js engine** - JavaScript spellchecker
2. **Viewport checking** - Only checks visible text
3. **Background processing** - Non-blocking
4. **Suggestion caching** - Fast repeated lookups

## Enabling Spellcheck

### Toggle Spellcheck

**Three ways to enable**:

1. **Menu**: Edit → Check Spelling
2. **Settings**: Preferences → Spellcheck
3. **Context menu**: Right-click → Enable Spellcheck

**Visual indicator**:
- ✓ Checkmark in menu when enabled
- Red underlines appear for misspellings

### Default State

- **Off by default** - For performance
- **Persistent** - Setting saved
- **Per-window** - Independent control

## Using Spellcheck

### Identifying Misspellings

**Red underline indicators**:
- Wavy red line under misspelled words
- Updates as you type
- Ignores code blocks
- Skips URLs and emails

**What's checked**:
- Regular text
- Headings
- List items
- Blockquotes

**What's ignored**:
- Code blocks ` ``` `
- Inline code `` ` ``
- URLs
- HTML tags
- Frontmatter

### Getting Suggestions

**Right-click misspelling**:
1. Right-click red underlined word
2. See top 5 suggestions
3. Click suggestion to replace
4. Or add to dictionary

**Suggestion menu**:
```
┌─────────────────────┐
│ Suggestions:        │
│ • correct          │
│ • correction       │
│ • corrected        │
│ ─────────────────  │
│ Add to Dictionary  │
│ Ignore             │
└─────────────────────┘
```

### Quick Corrections

**Keyboard workflow**:
1. Arrow keys to misspelling
2. Right-click or context key
3. Arrow to select suggestion
4. Enter to apply

## Custom Dictionary

### Adding Words

**Add custom words**:
1. Right-click misspelled word
2. Select "Add to Dictionary"
3. Word no longer marked
4. Saved permanently

**Common additions**:
- Technical terms
- Project names
- People names
- Acronyms
- Brand names

### Managing Dictionary

**View custom words**:
- Stored in settings
- Syncs across windows
- Survives updates

**Remove words**:
1. Settings → Custom Dictionary
2. Find word in list
3. Click remove
4. Word rechecked

### Dictionary Examples

**Technical writing**:
```
API, SDK, npm, webpack,
React, Vue, MongoDB
```

**Project specific**:
```
DumbNote, Typo.js,
isomorphic-git, Monaco
```

**Domain terms**:
```
middleware, webhook,
microservices, JWT
```

## Performance

### Viewport Optimization

**How it works**:
1. Only checks visible text
2. Checks in 100-line chunks
3. Background processing
4. Caches results

**Benefits**:
- Fast on large documents
- No UI freezing
- Smooth scrolling
- Low memory usage

### Performance Tips

**For best performance**:
- Enable only when needed
- Clear cache periodically
- Limit custom dictionary size
- Disable for code-heavy files

### Large Documents

**With 10,000+ lines**:
- Initial check may take seconds
- Subsequent checks instant
- Scroll performance unaffected
- Memory usage stable

## Language Support

### Current Support

**US English only**:
- American spellings
- Common variants included
- Technical terms basic

**Examples**:
- ✅ color (US)
- ❌ colour (UK)
- ✅ organize
- ❌ organise

### Future Languages

**Planned support**:
- UK English
- Canadian English
- Australian English
- Other languages

**Switching languages**:
- Will be in settings
- Per-note possible
- Auto-detection planned

## Advanced Features

### Ignore Patterns

**Auto-ignored**:
- CamelCase words
- snake_case
- UPPERCASE
- Mixed_Case_123

**Examples**:
```markdown
className ✓ (ignored)
myVariable ✓ (ignored)
API_KEY ✓ (ignored)
user@email.com ✓ (ignored)
https://example.com ✓ (ignored)
```

### Code Block Handling

**Smart detection**:
````markdown
Regular text is checked for speling errors.

```javascript
// Code blocks are not checked
const mispeled = "no red lines here";
```

But text after code blocks is cheked again.
````

### Performance Metrics

**Typical performance**:
- Initial scan: <100ms per 1000 words
- Suggestion lookup: <10ms
- Memory usage: ~5MB
- Cache size: 500 entries max

## Integration

### With Other Features

**Works with**:
- Preview mode (no underlines in preview)
- Search (finds misspellings)
- Export (underlines not exported)
- Themes (red color adapts)

**Independent of**:
- GitHub sync
- File operations
- Editor settings

### Copy/Paste Behavior

**When copying**:
- Underlines not copied
- Text only preserved
- Suggestions not included

**When pasting**:
- New text checked
- Delays for performance
- Large pastes chunked

## Troubleshooting

### Spellcheck Not Working

**No red underlines?**
1. Check if enabled in menu
2. Wait a moment for processing
3. Try toggling off/on
4. Restart DumbNote

**Everything underlined?**
1. Check language setting
2. Clear custom dictionary
3. Reset spellcheck cache
4. File may be corrupted

### Performance Issues

**Slow checking?**
1. Disable for current session
2. Clear suggestion cache
3. Reduce file size
4. Check CPU usage

**UI freezing?**
1. Disable spellcheck
2. Split large file
3. Remove complex content
4. Report issue

### Dictionary Issues

**Words not saving?**
1. Check write permissions
2. Settings file access
3. Disk space available
4. Try remove/re-add

**Too many false positives?**
1. Add to custom dictionary
2. Check if technical document
3. Consider disabling
4. Report common words

## Best Practices

### When to Enable

**Enable for**:
- Blog posts
- Documentation
- Emails/letters
- Final drafts

**Disable for**:
- Code snippets
- Technical logs
- Data files
- Quick notes

### Dictionary Management

**Keep dictionary clean**:
1. Only add real words
2. Avoid typos in dictionary
3. Review periodically
4. Export for backup

**Organize by project**:
- Consider project dictionaries
- Share team dictionaries
- Document terms

### Workflow Tips

1. **Draft first** - Disable while drafting
2. **Edit later** - Enable for editing
3. **Final check** - Review all suggestions
4. **Learn patterns** - Note common typos

## Tips and Tricks

### Quick Spellcheck

**Temporary check**:
1. Enable spellcheck
2. Scroll through document
3. Fix errors
4. Disable again

### Batch Corrections

**Fix all of one type**:
1. Search for misspelling
2. Find/replace all
3. Verify corrections
4. Update dictionary

### Language Mixing

**For multilingual docs**:
```markdown
The English text is checked.

> "Bonjour" will be marked as error
> Add foreign words to dictionary

Technical terms like "über" need
dictionary entries.
```

### Report Generation

**Check before sharing**:
1. Enable spellcheck
2. Review entire document
3. Fix all legitimate errors
4. Generate PDF/export

## Limitations

### Current Limitations

1. **English only** - No other languages yet
2. **No grammar** - Spelling only
3. **Basic suggestions** - Not context-aware
4. **No auto-correct** - Manual only

### Known Issues

- Some technical terms missing
- Contractions sometimes flagged
- Hyphenated words tricky
- Numbers in words problematic

### Workarounds

**For missing words**:
- Add to custom dictionary
- Report common omissions
- Use inline code for technical

**For false positives**:
- Ignore when appropriate
- Structure text differently
- Disable for technical docs

## Future Enhancements

### Planned Features

- Multiple language support
- Grammar checking
- Auto-correction option
- Contextual suggestions
- Personal writing style

### Community Dictionary

- Shared dictionaries
- Domain-specific lists
- Crowd-sourced improvements
- Easy import/export

---

Next: Explore **[Advanced Features](advanced-features.md)** for power users →