@echo off
taskkill /f /im python.exe /fi "windowtitle eq Auto Commit*"
echo Auto-commit watcher stopped.