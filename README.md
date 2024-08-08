# Zalo for Linux (Unofficial Port)

## Information

**THIS IS NOT USING THE ZALO WEBSITE,IT IS PORTED DIRECTLY FROM THE ZALO MAC DESKTOP CLIENT**
YOU CAN'T CALL

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

Working on Nobara 39 KDE Plasma,Ubuntu 22.04 XFCE4

![Screenshot_20240809_053634](https://github.com/user-attachments/assets/cad8e69c-a5ea-47a5-bfba-7f75bba9ca4f)
![Screenshot_20240809_054034](https://github.com/user-attachments/assets/f145e10a-10f9-4bd2-a91e-24f06f0f9bf3)

![Screenshot_20240809_053806](https://github.com/user-attachments/assets/cb7674e3-a856-42a9-9b78-c4ca93fd6f3b)
![Screenshot_20240809_053944](https://github.com/user-attachments/assets/781ddbd0-9404-4666-ab77-eeb8f8596a7a)



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

## Fixes

If you encounter "Python3: Namespace AppIndicator3 not available" on ubuntu/debian

Run "sudo apt install gir1.2-appindicator3-0.1"

## Bugs

There will be some bugs, as I don't have an understanding of how electron work, I won't be able to fix any bugs.
