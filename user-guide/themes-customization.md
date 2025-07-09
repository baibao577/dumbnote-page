# Themes & Customization

DumbNote offers extensive customization options to match your preferences. From built-in themes to a powerful custom theme editor, you can create your perfect writing environment.

## Theme System Overview

### What Can Be Themed?

DumbNote themes control:
- **Editor colors** - Syntax highlighting, background
- **UI colors** - Sidebar, buttons, selections
- **Preview styles** - Markdown rendering appearance
- **Accent colors** - Links, selections, buttons

### Theme Types

1. **Built-in themes** - Professional, tested themes
2. **Custom themes** - Create your own
3. **Preview themes** - Markdown preview styles

## Built-in Themes

### Dark Themes

#### Dark Default
- Balanced contrast
- Easy on eyes
- Purple accents
- Great for long sessions

#### Monokai
- Classic color scheme
- Vibrant syntax colors
- Popular with developers
- High contrast

#### One Dark Pro
- Atom-inspired
- Soft background
- Colorful syntax
- Modern feel

#### Nord
- Arctic color palette
- Muted, calming colors
- Blue-gray tones
- Minimal eye strain

#### Tokyo Night
- Japanese-inspired
- Deep backgrounds
- Neon accents
- Cyberpunk aesthetic

#### Gruvbox Dark
- Retro warm colors
- Earthy tones
- Comfortable contrast
- Vintage feel

### Light Themes

#### Light Default
- Clean and bright
- Black on white
- Blue accents
- Classic look

#### Clean Bright
- Minimal design
- Soft shadows
- Gray accents
- Modern aesthetic

#### Paper
- Paper-like background
- Warm white
- Comfortable reading
- Print-inspired

#### Material Light
- Google Material Design
- Subtle shadows
- Teal accents
- Contemporary

#### Solarized Light
- Scientific color choices
- Reduced eye strain
- Warm background
- Precision colors

## Selecting Themes

### Quick Selection

**Theme selector** (top-right):
1. Click theme dropdown
2. Preview themes live
3. Select your choice
4. Instantly applied

### Theme Modes

**Three modes available**:
- **Dark** - Always dark theme
- **Light** - Always light theme  
- **System** - Follow OS setting

**Setting theme mode**:
1. Open theme selector
2. Choose mode at top
3. Auto-switches based on OS

## Custom Theme Editor

### Opening Theme Editor

1. Click theme selector
2. Select "Customize Themes..."
3. Theme editor dialog opens

### Editor Interface

**Three sections**:
1. **Theme list** - All available themes
2. **Color editor** - Customize colors
3. **Live preview** - See changes instantly

### Creating Custom Themes

#### Starting from Scratch

1. Click **"Create New Theme"**
2. Name your theme
3. Choose base (light/dark)
4. Start customizing

#### Duplicating Existing

1. Select any theme
2. Click **"Duplicate"**
3. Rename the copy
4. Modify as needed

### Customizing Colors

#### UI Colors

**Accent Color**:
- Primary brand color
- Used for selections, links
- Hover/active states auto-generated

#### Text Colors

Customize each element:
- **Body text** - Main content
- **Headings** - All levels or individual
- **Links** - Hyperlink color
- **Quotes** - Blockquote text
- **Code** - Inline code
- **Bold** - Strong emphasis
- **Italic** - Emphasis

#### Syntax Colors

For code blocks:
- Keywords
- Strings  
- Comments
- Functions
- Variables
- Numbers

### Preview Themes

**Five preview styles**:

1. **Default** - Balanced typography
2. **Minimal** - Clean, distraction-free
3. **Magazine** - Editorial style
4. **Academic** - Paper-like, citations
5. **Developer** - Code-focused

**Customizing preview**:
- Font family selection
- Size adjustments
- Line height
- Color overrides

### Saving Custom Themes

**Auto-save**:
- Changes save automatically
- Maximum 5 custom themes
- Stored in settings

**Manual save**:
1. Make your changes
2. Click "Save"
3. Theme added to list

### Managing Custom Themes

**Edit existing**:
1. Select custom theme
2. Click "Edit"
3. Modify colors
4. Auto-saves

**Delete theme**:
1. Select custom theme
2. Click "Delete"
3. Confirm deletion
4. Cannot delete built-in

**Export/Import**:
1. Click "Share"
2. Copy theme JSON
3. Share with others
4. Import via paste

## Editor Customization

### Font Settings

**Font Size**:
- Range: 8px to 48px
- Default: 14px
- Keyboard: `Cmd/Ctrl+Plus/Minus`
- Reset: `Cmd/Ctrl+0`

**Line Height**:
- Range: 1.0 to 4.5
- Default: 1.6
- Affects readability
- Higher = more space

### Editor Features

**Line Numbers**:
- Toggle on/off
- Right-click gutter
- Helpful for long docs

**Minimap**:
- Always visible
- Shows document overview
- Click to navigate

**Word Wrap**:
- Always enabled
- Soft wrap at window edge
- No horizontal scroll

### Typewriter Mode

**What it does**:
- Keeps cursor centered
- Reduces eye movement
- Focus on current line

**Enable**:
- Edit → Typewriter Mode
- Or `Cmd/Ctrl+Shift+T`

**Adjust position**:
- Edit → Typewriter Center Position
- Range: 20% to 80%
- Default: 50%

## UI Customization

### Sidebar

**Toggle visibility**:
- `Cmd/Ctrl+B` or `Cmd/Ctrl+\`
- More writing space
- Focus mode

**Sidebar width**:
- Drag divider to resize
- Remembers size
- Min/max limits

### Window Appearance

**Zoom level**:
- Affects entire UI
- `Cmd/Ctrl+Plus/Minus`
- Independent per window

**Fullscreen**:
- F11 or View → Fullscreen
- Hides all chrome
- Ultimate focus

## Advanced Customization

### CSS Variables

DumbNote uses CSS custom properties:

```css
:root {
  --editor-font-size: 14px;
  --editor-line-height: 1.6;
  --theme-accent: #FFB823;
  --theme-background: #1e1e1e;
}
```

### Theme JSON Structure

```json
{
  "id": "my-custom-theme",
  "name": "My Custom Theme",
  "type": "dark",
  "colors": {
    "accent": "#FFB823",
    "background": "#1e1e1e",
    "surface": "#252526",
    "text": "#cccccc",
    "syntax": {
      "heading": "#4EC9B0",
      "bold": "#FFB823",
      "italic": "#C586C0",
      "code": "#569CD6",
      "link": "#4EC9B0",
      "quote": "#808080"
    }
  },
  "monaco": {
    "base": "vs-dark",
    "inherit": true,
    "rules": [...],
    "colors": {...}
  }
}
```

### Multi-Window Theming

**Each window can have**:
- Different theme
- Different font size
- Different preview mode
- Shared custom themes

**Use cases**:
- Dark for writing
- Light for reading
- Large font for presentations

## Theme Best Practices

### Choosing Themes

**For long writing sessions**:
- Lower contrast
- Warmer colors
- Larger font

**For code/technical**:
- Higher contrast
- Distinct syntax colors
- Monospace preview

**For reading/review**:
- Light themes
- Serif fonts
- Magazine preview

### Creating Themes

**Start with built-in**:
1. Find closest match
2. Duplicate it
3. Tweak gradually
4. Test extensively

**Color harmony**:
- Use color wheel
- Complementary colors
- Consistent saturation
- Test all elements

**Accessibility**:
- Sufficient contrast
- Readable combinations
- Test with content
- Consider colorblind users

## Sharing Themes

### Export Theme

1. Open theme editor
2. Select custom theme
3. Click "Share"
4. Copy JSON code
5. Share anywhere

### Import Theme

1. Get theme JSON
2. Open theme editor
3. Click "Import"
4. Paste JSON
5. Theme added

### Theme Gallery

Share themes on:
- GitHub Gists
- Reddit r/DumbNote
- Discord community
- Personal blogs

## Troubleshooting

### Theme Not Applying

1. **Check theme mode** - System/dark/light
2. **Restart app** - Some changes need restart
3. **Clear cache** - File → Clear Cache
4. **Check custom theme** - May be corrupted

### Colors Look Wrong

1. **Monitor calibration** - Check display
2. **Night mode** - OS may alter colors
3. **Graphics drivers** - Update if old
4. **Color profile** - sRGB recommended

### Custom Theme Lost

1. **Check settings** - May be in different profile
2. **Backup exists** - Check settings file
3. **Re-import** - If you exported it
4. **Recreate** - Use screenshots

### Performance Issues

1. **Complex themes** - Simplify colors
2. **Too many custom** - Delete unused
3. **Preview themes** - Disable if slow
4. **Reset to default** - Test performance

## Tips and Tricks

### Quick Theme Switch

- Use keyboard shortcuts
- Set up day/night themes
- Use system auto-switch
- Keep favorites ready

### Theme for Tasks

**Writing theme**:
- Dark background
- Muted colors
- Large font
- Minimal preview

**Editing theme**:
- High contrast
- Distinct colors
- Show line numbers
- Technical preview

**Reading theme**:
- Light background
- Serif fonts
- Magazine preview
- Comfortable spacing

### Seasonal Themes

Create themes for:
- Seasons (warm/cool)
- Holidays (festive colors)
- Projects (brand colors)
- Moods (calm/energetic)

---

Next: Learn about **[Export & Sharing](export-sharing.md)** options →