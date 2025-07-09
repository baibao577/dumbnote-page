# GitHub Sync

DumbNote includes built-in GitHub synchronization to backup your notes to a private repository. This guide covers setup, usage, and troubleshooting.

## Overview

### What is GitHub Sync?

GitHub Sync allows you to:
- **Backup** all notes to GitHub
- **Version control** your writing
- **Access** notes from anywhere
- **Collaborate** with others (via Git)
- **Recover** from data loss

### How It Works

1. **Private repository** - Your notes stay private
2. **Manual sync** - You control when to sync
3. **GitHub wins conflicts** - Server version takes precedence
4. **Full history** - Git tracks all changes
5. **Isomorphic-git** - Pure JavaScript implementation

### Requirements

- GitHub account (free)
- Personal access token
- Internet connection
- Notes under 100MB per file

## Initial Setup

### Step 1: Create GitHub Token

1. Go to [GitHub Settings](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name: "DumbNote Sync"
4. Select scopes:
   - ✅ **repo** (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (won't show again!)

### Step 2: Configure DumbNote

1. Open DumbNote
2. Go to **Sync → Setup GitHub Sync**
3. Paste your token
4. Click "Authenticate"
5. Confirm scopes shown

### Step 3: Enable Sync

After authentication:
1. Sync enables automatically
2. Creates repository: `dumbnote-sync`
3. Initial sync begins
4. Progress shown in status

## Using GitHub Sync

### Manual Sync

**Sync your notes**:
- **Keyboard**: `Cmd/Ctrl+Shift+S`
- **Menu**: Sync → Sync to GitHub
- **Status bar**: Click sync icon

**What happens**:
1. Commits local changes
2. Pulls remote changes
3. Pushes local commits
4. Shows success/error

### Sync Status

**Status indicators**:
- ✅ **Synced** - Up to date
- 🔄 **Syncing** - In progress
- ⚠️ **Changes** - Local changes pending
- ❌ **Error** - Sync failed

### What Gets Synced

**Included**:
- All `.md` files
- Attachments folder
- Folder structure
- File timestamps

**Excluded**:
- Application settings
- Cache files
- Temporary files
- `.git` folder

## Sync Behavior

### Conflict Resolution

**GitHub always wins**:
1. Remote changes pulled first
2. Local changes committed
3. If conflict, remote version kept
4. Your changes saved in Git history

**Why this approach**:
- Prevents data loss
- Simple resolution
- Can recover via Git
- No merge conflicts

### Sync Process

```
1. Check connection
2. Pull remote changes
3. Stage local changes
4. Commit with message
5. Push to GitHub
6. Update sync status
```

### Commit Messages

**Automatic format**:
```
Sync from DumbNote - 2024-01-09 14:30:45

Files changed: 3
- Updated: meeting-notes.md
- Added: new-idea.md
- Deleted: old-draft.md
```

## Advanced Usage

### Accessing Repository

**View on GitHub**:
1. Go to `github.com/[username]/dumbnote-sync`
2. Private by default
3. Browse all files
4. View history

**Clone locally**:
```bash
git clone https://github.com/[username]/dumbnote-sync.git
cd dumbnote-sync
```

### Working with Git

**View history**:
```bash
git log --oneline
git show HEAD
```

**Recover deleted file**:
```bash
git log -- deleted-note.md
git checkout [commit-hash] -- deleted-note.md
```

**Compare versions**:
```bash
git diff HEAD~1 note.md
```

### Multi-Device Setup

**Share between devices**:
1. Install DumbNote on device 2
2. Use same GitHub token
3. Enable sync
4. Notes download automatically

**Important**:
- Only one device should edit at a time
- Always sync before and after editing
- Conflicts favor last sync

### Collaboration

**Share with others**:
1. Add collaborators on GitHub
2. They clone repository
3. Edit with any editor
4. Push changes
5. You sync to receive

## Troubleshooting

### Authentication Issues

**"Invalid token" error**:
1. Check token copied correctly
2. Verify token has `repo` scope
3. Token may be expired
4. Generate new token

**"401 Unauthorized"**:
- Token revoked
- Wrong GitHub account
- Network firewall
- Try re-authenticating

### Sync Failures

**"Network error"**:
1. Check internet connection
2. Try again later
3. Check GitHub status
4. Firewall blocking?

**"Repository not found"**:
1. Repo may be deleted
2. Check GitHub directly
3. Try purge and re-setup
4. Permissions changed?

**"Push rejected"**:
1. Pull latest first
2. Another device synced
3. Resolve and retry
4. Check repo permissions

### Large File Issues

**"File too large"**:
- GitHub limit: 100MB per file
- Reduce image sizes
- Split large notes
- Exclude from sync

**Repository size warning**:
- Free limit: 1GB
- Check attachment sizes
- Clean up old files
- Consider Git LFS

## Managing Sync

### Disable Sync

**Temporarily disable**:
1. Sync → Disable Sync
2. Local editing only
3. Re-enable anytime
4. History preserved

### Purge Sync

**Complete reset**:
1. **Sync → Purge Git Sync**
2. Choose option:
   - Keep GitHub, reset local
   - Delete everything
3. Confirm action
4. Re-setup if needed

**When to purge**:
- Corrupted repository
- Want fresh start
- Changing accounts
- Major reorganization

### Backup Before Purge

**Safety first**:
1. Export all notes
2. Download from GitHub
3. Verify backup works
4. Then purge

## Security & Privacy

### Token Security

**Best practices**:
- Don't share token
- Use minimum scopes
- Rotate periodically
- Revoke if compromised

**Token storage**:
- Encrypted locally
- Not in repository
- App settings only
- Keychain integration

### Repository Privacy

**Default private**:
- Only you can see
- Not searchable
- No public access
- Requires authentication

**Making public** (not recommended):
1. GitHub repo settings
2. Change to public
3. Consider privacy
4. Remove sensitive data

### Data Safety

**Multiple backups**:
1. Local files (primary)
2. GitHub (backup)
3. Export regularly
4. Cloud drive (extra)

## Best Practices

### Sync Frequency

**Recommended**:
- Start of session
- End of session
- After major changes
- Before device switch

**Avoid**:
- Mid-sentence syncing
- Rapid sync cycles
- Syncing conflicts
- Offline syncing

### Organization for Sync

**Good structure**:
```
/
├── daily/
│   └── 2024-01-09.md
├── projects/
│   ├── project-a/
│   └── project-b/
├── resources/
└── attachments/
```

**Avoid**:
- Huge single files
- Deep nesting (>5 levels)
- Special characters
- Symbolic links

### Workflow Tips

1. **Morning routine**:
   - Open DumbNote
   - Sync immediately
   - Start writing

2. **Evening routine**:
   - Final sync
   - Check status
   - Close app

3. **Device switching**:
   - Sync device 1
   - Wait for completion
   - Sync device 2
   - Start editing

## Advanced Configuration

### Custom Repository

**Use existing repo** (advanced):
1. Manual Git setup
2. Configure remote
3. Handle conflicts
4. Not officially supported

### Git Hooks

**Automation possibilities**:
- Pre-commit formatting
- Post-receive notifications
- Backup triggers
- CI/CD integration

### API Integration

**GitHub API usage**:
- View sync history
- Automate backups
- Generate reports
- Monitor changes

## Limitations

### Current Limitations

1. **No auto-sync** - Manual only
2. **No merge UI** - GitHub wins
3. **Basic Git** - No branches
4. **Single repo** - One per account

### Planned Features

- Selective sync
- Conflict preview
- Auto-sync option
- Multiple repositories

## Tips and Tricks

### Quick Recovery

**Lost note?**:
1. Check GitHub history
2. Find commit with file
3. Download raw version
4. Copy back to DumbNote

### Version Comparison

**See what changed**:
1. GitHub commit history
2. Click commit
3. View diff
4. Green = added, Red = removed

### Sync Status Check

**Verify sync worked**:
1. Check status indicator
2. View on GitHub
3. Check commit time
4. Confirm file count

---

Next: Enable **[Spellcheck](spellcheck.md)** for error-free writing →