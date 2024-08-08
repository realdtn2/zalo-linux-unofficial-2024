#!/bin/bash

export PATH=/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin:/usr/local/sbin

install_zalo() {
    echo "Installing Zalo..."
    mkdir -p $HOME/.local/share/
    cp -r ./Zalo $HOME/.local/share/
    sed -i "s|\$HOME|$HOME|g" "./prepare/Zalo.desktop"
    cp -r ./prepare/Zalo.desktop $HOME/.local/share/applications
    cp -r ./prepare/Zalo.desktop $HOME/Desktop
    echo "Installed Zalo!"
    exit 1
}

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

install_dependencies() {
    echo 'Installing dependencies...'
    if command_exists pip ; then
        pip install pystray pillow
    else
        pip3 install pystray pillow
    fi
    wget https://github.com/electron/electron/releases/download/v22.3.27/electron-v22.3.27-linux-x64.zip -P Zalo
    unzip Zalo/electron-v22.3.27-linux-x64.zip -d Zalo/electron-v22.3.27-linux-x64
    rm Zalo/electron-v22.3.27-linux-x64.zip
    echo 'Installed dependencies!'
}

if ! command_exists python && ! command_exists python3; then
    echo "Python is not installed. Do you want to install now? (y/n):"
    read -r response

    if [ "$response" = "y" ]; then
        echo "Proceeding with the installation..."
    else
        echo "Installation aborted."
        exit 1
    fi
else
    echo "Python is installed."
    install_dependencies
    install_zalo
fi


install_python_debian_ubuntu() {
    echo '*** Installing Python on Debian/Ubuntu...'
    sudo apt-get update -y
    sudo apt-get install -y python3 python3-pip
}

install_python_fedora() {
    echo '*** Installing Python on Fedora...'
    sudo dnf install -y python3 python3-pip
}

install_python_centos() {
    echo '*** Installing Python on CentOS/RHEL/RedHat-based...'
    sudo yum install -y python3 python3-pip
}

if [ ! -f /etc/os-release ]; then
    echo '*** Cannot detect Linux distribution! Aborting.'
    exit 1
fi

source /etc/os-release


if [ "$ID" == "debian" ] || [ "$ID" == "ubuntu" ]; then
    install_python_debian_ubuntu
elif [ "$ID" == "fedora" ]; then
    install_python_fedora
elif [ "$ID" == "centos" ] || [ "$ID" == "rhel" ] || [ "$ID" == "rocky" ] || [ "$ID" == "almalinux" ] || [ "$ID" == "nobara" ]; then
    install_python_centos
else
    echo "Unsupported distribution $ID"
    exit 1
fi

echo
echo '*** Python installation complete!'
install_dependencies
install_zalo




