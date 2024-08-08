# Zalo for Linux (Unofficial Port)

## Information

This project is an unofficial port of the MacOS version of Zalo to Linux. The porting process involved extracting the `.dmg` file from the MacOS version and locating the `app.asar` file in the directory, which is typically found in `/Applications/YourAppName.app/Contents/Resources`. The following steps were taken:

1. Extracted `app.asar` with the command:
    ```bash
    asar extract app.asar app
    ```
2. Navigated to the extracted directory and ran Zalo using Electron version 22.3.27. Note that using newer versions of Electron result in errors. The command to run Zalo is:
    ```bash
    electron .
    ```

Additionally, `install.sh` is used to add a tray icon using Python.

## Installation

Python is required to run the tray icon script.

To install Zalo for Linux, follow these steps:

```bash
git clone https://github.com/realdtn2/zalo-linux-unofficial
cd zalo-linux-unofficial
chmod +x install.sh
./install.sh
```
This will install Zalo to ~/.local/share/Zalo.

## Bugs

There will be some bugs, as I don't have an understanding of how electron work, I won't be able to fix any bugs.
