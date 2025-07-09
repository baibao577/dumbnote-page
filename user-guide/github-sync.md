# GitHub Sync

Keep your notes backed up and accessible from anywhere with GitHub Sync. DumbNote automatically creates a private repository to store all your notes securely in the cloud.

## What is GitHub Sync?

GitHub Sync is a backup feature that:
- **Saves everything** to a private GitHub repository called `dumbnote-storage`
- **Works manually** - you control when to sync
- **Preserves your work** - local files always take priority
- **Free to use** - GitHub offers free private repositories

## Quick Setup (2 minutes)

### Step 1: Open Sync Menu
Go to **Sync → Sync to GitHub** in the menu bar.

### Step 2: Get Your Token
1. A dialog appears with a button: **"🐙 Open GitHub Token Page"**
2. Click it - your browser opens with everything pre-filled
3. **Scroll down** and click the green **"Generate token"** button
4. GitHub shows your new token (starts with `ghp_`)
5. **Copy the entire token** - you'll only see it once!

### Step 3: Connect DumbNote
1. Return to DumbNote
2. **Paste your token** in the text field
3. Click **"Connect"**
4. That's it! DumbNote creates your private backup repository

## Using GitHub Sync

### Manual Sync
After setup, sync anytime with:
- **Keyboard**: `Cmd/Ctrl+Shift+S`
- **Menu**: Sync → Sync to GitHub
- **Status bar**: Click the sync icon

### What Happens During Sync
1. DumbNote saves any unsaved changes
2. Uploads all your notes to GitHub
3. Downloads any changes from other devices
4. Shows progress in the status bar

### Sync Status Icons
- ✅ **Green check** - Everything synced
- 🔄 **Spinning arrows** - Sync in progress
- ⚠️ **Yellow warning** - Local changes not synced
- ❌ **Red X** - Sync error (check your connection)

## Important Things to Know

### Your Repository
- **Name**: Always `dumbnote-storage` (cannot be changed)
- **Privacy**: Private by default (only you can see it)
- **Location**: `github.com/[your-username]/dumbnote-storage`
- **Storage**: Free up to 1GB

### How Conflicts Work
DumbNote keeps things simple:
- **Your local files always win**
- If the same note was edited on two devices, the most recent sync overwrites
- Previous versions are saved in GitHub's history

### What Gets Synced
✅ **Included**:
- All `.md` files
- Note content and structure
- Folder organization

❌ **Not included**:
- Attachments/images (too large)
- Application settings
- Themes and preferences

## Fixing Sync Problems

### When Things Go Wrong
If sync stops working, use **Purge**:

1. Go to **Sync → Purge Git Sync**
2. Click **"Purge and Re-sync"**
3. What happens:
   - Removes broken sync configuration
   - Immediately re-syncs with your token
   - Uploads all local notes to GitHub
   - Your notes are never deleted

### Common Issues

**"Authentication failed"**
- Your token expired or was revoked
- Solution: Create a new token and reconnect

**"Network error"**
- Check your internet connection
- Try again in a few moments
- GitHub might be temporarily down

**"Repository not found"**
- The repository was deleted on GitHub
- Solution: Use Purge to create a fresh one

**"Cannot push to remote"**
- Someone else synced first
- Solution: Just sync again - your version will overwrite

## Tips for Success

### Before You Start
- Make sure you have a GitHub account (free)
- Have a stable internet connection
- Close DumbNote on other devices before syncing

### Best Practices
1. **Sync regularly** - After each work session
2. **One device at a time** - Avoid editing on multiple devices
3. **Check status** - Green check means you're safe
4. **Use Purge** - When sync acts weird, purge fixes it

### Mobile Access
While DumbNote is desktop-only, you can:
1. Install the GitHub mobile app
2. Browse to your `dumbnote-storage` repository  
3. View and edit notes on your phone
4. Changes sync back next time you open DumbNote

## Privacy & Security

### Your Data is Safe
- Token stored locally only
- Repository is private
- Uses HTTPS encryption
- You control when to sync

### Token Permissions
The token only needs "repo" access to:
- Create your private repository
- Read and write your notes
- Nothing else

### Revoking Access
To stop using sync:
1. GitHub.com → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Delete the DumbNote token
4. Sync stops immediately

## Advanced Information

### Manual Git Access
Your notes are in a standard Git repository. Advanced users can:
```bash
git clone https://github.com/[username]/dumbnote-storage
cd dumbnote-storage
# Make changes
git add .
git commit -m "Manual edit"
git push
```

### Backup Strategy
GitHub Sync is one part of a good backup strategy:
1. **Local**: Your notes on your computer
2. **Cloud**: GitHub repository
3. **Archive**: Regular exports (File → Export All)

### Storage Limits
- GitHub free: 1GB per repository
- Most users never reach this
- 10,000+ notes typically under 100MB

---

Questions? Check our **[Troubleshooting](troubleshooting.md)** guide or **[FAQ](faq.md)** →