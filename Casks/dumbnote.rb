cask "dumbnote" do
  version "1.6.0"
  
  on_arm do
    sha256 "6c5b35a73eee6b89dedf277216fca91d8e2f87436d3e606b8a97a266b8f16ee8"
    url "https://github.com/baibao577/dumbnote-page/releases/download/v.1.6.0/DumbNote-mac-arm64.dmg"
  end
  
  on_intel do
    sha256 "ab82f7457683b632be89426e3ab43553b01e50bd711bc6ee4bd49eb4571a40b8"
    url "https://github.com/baibao577/dumbnote-page/releases/download/v.1.6.0/DumbNote-mac-x64.dmg"
  end

  name "DumbNote"
  desc "Powerful desktop markdown note-taking application"
  homepage "https://github.com/baibao577/dumbnote-page"

  auto_updates true
  depends_on macos: ">= :big_sur"

  app "DumbNote.app"

  # Remove quarantine attribute to avoid Gatekeeper issues
  postflight do
    system_command "/usr/bin/xattr",
                   args: ["-rd", "com.apple.quarantine", "#{appdir}/DumbNote.app"],
                   sudo: false
  end

  zap trash: [
    "~/Library/Application Support/DumbNote",
    "~/Library/Application Support/dumbnote-app",
    "~/Library/Caches/dumbnote-app",
    "~/Library/Preferences/com.dumbnote.plist",
    "~/Library/Saved Application State/com.dumbnote.savedState",
    "~/Library/Logs/DumbNote",
  ]
end
