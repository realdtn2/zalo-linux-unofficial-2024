#!/bin/bash

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if command_exists python ; then
    python ~/.local/share/Zalo/main.py
else
    python3 ~/.local/share/Zalo/main.py
fi
