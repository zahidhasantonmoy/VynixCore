import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import os

class ChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if not event.is_directory:
            self.handle_change(event.src_path)

    def on_created(self, event):
        if not event.is_directory:
            self.handle_change(event.src_path)

    def handle_change(self, file_path):
        # Ignore changes to the auto_commit.py file itself
        if os.path.basename(file_path) == "auto_commit.py":
            return
            
        print(f"Detected change in {file_path}")
        self.git_add_commit_push()

    def git_add_commit_push(self):
        try:
            # Add all changes
            subprocess.run(["git", "add", "."], check=True)
            
            # Commit with a timestamp message
            timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
            subprocess.run(["git", "commit", "-m", f"Auto commit at {timestamp}"], check=True)
            
            # Push to remote repository
            subprocess.run(["git", "push"], check=True)
            
            print("Successfully committed and pushed changes.")
        except subprocess.CalledProcessError as e:
            print(f"Error during Git operations: {e}")

if __name__ == "__main__":
    # Set the path to the directory you want to watch
    path = "."
    
    event_handler = ChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    
    print(f"Watching for changes in {os.path.abspath(path)}...")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        print("Stopping file watcher...")
        
    observer.join()