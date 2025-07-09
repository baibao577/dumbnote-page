# Troubleshooting

This guide helps you resolve common issues with DumbNote. Find your problem below and follow the steps to fix it.

## Quick Fixes

### Try These First

1. **Restart DumbNote** - Solves 50% of issues
2. **Clear Cache** - File → Clear Cache
3. **Check for Updates** - File → Check for Updates
4. **Reload Window** - Cmd/Ctrl+R

## Startup Issues

### DumbNote Won't Start

**Black/white screen**:
1. Wait 10-15 seconds (initial load)
2. Force quit and restart
3. Delete cache folder:
   - macOS: `~/Library/Application Support/DumbNote`
   - Windows: `%APPDATA%/DumbNote`
   - Linux: `~/.config/DumbNote`
4. Reinstall if needed

**Crashes immediately**:
1. Check system requirements
2. Update graphics drivers
3. Run in safe mode:
   ```bash
   dumbnote --safe-mode
   ```
4. Check error logs

### Slow Startup

**Takes over 30 seconds**:
1. Large note collection (>5000 files)
2. Network drive for notes
3. Antivirus scanning
4. Corrupted search index

**Fix**:
1. Clear cache to rebuild index
2. Move notes to local drive
3. Add DumbNote to antivirus exceptions
4. Archive old notes

## Editor Issues

### Cursor Problems

**Cursor invisible/jumping**:
1. Click in editor to focus
2. Press Escape to reset
3. Toggle preview mode and back
4. Check for stuck modifier keys

**Multi-cursor stuck**:
1. Press Escape
2. Click anywhere
3. Restart if persists

### Syntax Highlighting

**Not working**:
1. Check file has .md extension
2. Verify code block language tag
3. Close unclosed code blocks
4. Clear editor cache

**Wrong colors**:
1. Check theme settings
2. Try different theme
3. Reset to default theme
4. Clear theme cache

### Performance Problems

**Laggy typing**:
1. Check document size (>10MB)
2. Disable spellcheck temporarily
3. Close other applications
4. Reduce image count

**Freezing/hanging**:
1. Wait 30 seconds
2. Check CPU usage
3. Force reload (Cmd/Ctrl+Shift+R)
4. Disable extensions

## File Issues

### Files Not Appearing

**In sidebar**:
1. Check correct folder
2. Verify .md extension
3. Refresh with F5
4. Check file permissions

**After creating**:
1. Check save location
2. Look in recent files
3. Search by content
4. Check auto-rename

### Can't Save Files

**Permission denied**:
1. Check folder permissions
2. Ensure not read-only
3. Check disk space
4. Try different location

**File in use**:
1. Close in other apps
2. Check cloud sync
3. Restart DumbNote
4. Copy content to new file

### Lost Files

**Can't find note**:
1. Use search (Cmd/Ctrl+F)
2. Check all folders
3. Look in trash/recycle bin
4. Check recent documents

**Accidentally deleted**:
1. Check system trash
2. Use Git history (if synced)
3. Check backups
4. Use file recovery tools

## Search Problems

### Search Not Working

**No results**:
1. Check spelling
2. Try partial terms
3. Clear and rebuild index
4. Verify files exist

**Wrong results**:
1. Update search index
2. Check search syntax
3. Clear cache
4. Report bug

### Index Issues

**Rebuilding index**:
1. File → Clear Cache
2. Wait for reindex
3. Check progress in status
4. Restart after complete

**Corrupted index**:
1. Delete `.dumbnote` folder
2. Restart DumbNote
3. Let it rebuild
4. Be patient

## Sync Issues

### GitHub Sync Failures

**Authentication error**:
1. Check token validity
2. Verify repo scope
3. Generate new token
4. Re-authenticate

**Network errors**:
1. Check internet connection
2. Try manual sync later
3. Check GitHub status
4. Verify firewall settings

**Conflicts**:
1. Pull before push
2. GitHub version wins
3. Check commit history
4. Manual resolution needed

### Sync Not Working

**Nothing happens**:
1. Check sync enabled
2. Verify authentication
3. Look for error messages
4. Check repository exists

**Partial sync**:
1. Check file sizes (<100MB)
2. Verify file types
3. Check .gitignore
4. Manual git commands

## Display Issues

### Theme Problems

**Theme not applying**:
1. Restart DumbNote
2. Check theme mode
3. Clear theme cache
4. Reset to default

**Custom theme lost**:
1. Check settings file
2. Look for backup
3. Re-import if exported
4. Recreate theme

### Preview Issues

**Not rendering**:
1. Check markdown syntax
2. Toggle preview off/on
3. Clear preview cache
4. Check for errors

**Wrong styling**:
1. Check preview theme
2. Reset preview settings
3. Clear cache
4. Update DumbNote

### Window Problems

**Can't resize**:
1. Check window controls
2. Reset window position
3. Check display settings
4. Restart app

**Multi-monitor issues**:
1. Check display arrangement
2. Reset window positions
3. Update graphics drivers
4. Use single monitor

## Attachment Issues

### Images Not Showing

**Broken images**:
1. Check file exists
2. Verify path correct
3. Check file permissions
4. Re-add image

**Wrong location**:
1. Check attachments folder
2. Fix relative paths
3. Use forward slashes
4. Move to correct location

### Large Files

**Can't attach**:
1. Check 1GB limit
2. Compress first
3. Link instead
4. Use external storage

**Slow performance**:
1. Optimize images
2. Reduce resolution
3. Use thumbnails
4. Archive old attachments

## Platform-Specific

### macOS Issues

**"Can't be opened"**:
1. Right-click → Open
2. System Preferences → Security
3. Allow DumbNote
4. Disable Gatekeeper temporarily

**Permissions**:
1. Grant file access
2. Check Privacy settings
3. Reset permissions
4. Reinstall if needed

### Windows Issues

**Defender blocking**:
1. Add exception
2. Whitelist DumbNote
3. Check quarantine
4. Disable temporarily

**Missing DLLs**:
1. Install Visual C++
2. Update Windows
3. Reinstall DumbNote
4. Check system files

### Linux Issues

**Dependencies missing**:
```bash
# Ubuntu/Debian
sudo apt install libgtk-3-0 libnotify4 libxss1

# Fedora
sudo dnf install gtk3 libnotify libXScrnSaver
```

**AppImage not running**:
```bash
chmod +x DumbNote.AppImage
./DumbNote.AppImage --no-sandbox
```

## Data Recovery

### Backup Restoration

**From export**:
1. Locate backup ZIP
2. Extract to new folder
3. Import notes
4. Verify attachments

**From cloud**:
1. Check cloud provider
2. Restore previous version
3. Download to local
4. Open in DumbNote

### Emergency Recovery

**Corrupted files**:
1. Open in text editor
2. Copy content
3. Create new note
4. Paste content

**Database errors**:
1. Export what you can
2. Clear all cache
3. Reinstall DumbNote
4. Import backup

## Error Messages

### Common Errors

**"File not found"**:
- File moved/deleted
- Permission issue
- Path too long
- Special characters

**"Access denied"**:
- Permission problem
- File locked
- Antivirus blocking
- Disk full

**"Out of memory"**:
- Too many large files
- Memory leak
- Close other apps
- Restart DumbNote

### Reporting Bugs

**Information to include**:
1. DumbNote version
2. Operating system
3. Steps to reproduce
4. Error messages
5. Screenshots

**Where to report**:
- GitHub Issues
- Email support
- Community forum
- Discord channel

## Maintenance

### Regular Maintenance

**Weekly**:
1. Clear cache if slow
2. Archive old notes
3. Backup important files
4. Check for updates

**Monthly**:
1. Clean attachments
2. Optimize database
3. Review error logs
4. Update system

### Performance Optimization

**Speed up DumbNote**:
1. Limit note count
2. Optimize images
3. Disable unused features
4. Upgrade hardware

**Reduce memory**:
1. Close unused windows
2. Clear cache regularly
3. Archive large files
4. Restart periodically

## Getting Help

### Self-Help Resources

1. **User Guide** - This documentation
2. **GitHub Wiki** - Technical details
3. **YouTube** - Video tutorials
4. **Blog** - Tips and updates

### Community Support

1. **Discord** - Real-time chat
2. **Reddit** - r/DumbNote
3. **GitHub** - Issues/discussions
4. **Twitter** - @DumbNoteApp

### Direct Support

1. **Email** - support@dumbnote.app
2. **GitHub Issues** - Bug reports
3. **Feature Requests** - GitHub
4. **Security Issues** - security@dumbnote.app

---

Still having issues? Check our **[FAQ](faq.md)** or contact support →