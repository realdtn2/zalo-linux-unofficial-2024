#!/bin/bash
export PATH=/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin:/usr/local/sbin

choose_language() {
    echo "Select language / Chọn ngôn ngữ:"
    echo "1) English"
    echo "2) Tiếng Việt"
    read -p "Enter your choice / Nhập lựa chọn của bạn (1 or 2): " lang_choice

    case $lang_choice in
        1)
            LANGUAGE="EN"
            ;;
        2)
            LANGUAGE="VI"
            ;;
        *)
            echo "Invalid choice. Please select 1 or 2."
            echo "Lựa chọn không hợp lệ. Vui lòng chọn 1 hoặc 2."
            choose_language
            ;;
    esac
}
choose_language

install_menu() {
    while true; do
        if [ "$LANGUAGE" == "EN" ]; then
            echo "Select the version of Zalo to install:"
            echo "1) Zalo"
            echo "2) Zalo-ZaDark"
            read -p "Enter your choice (1 or 2): " choice
        else
            echo "Chọn phiên bản Zalo để cài đặt:"
            echo "1) Zalo"
            echo "2) Zalo-ZaDark"
            read -p "Nhập lựa chọn của bạn (1 hoặc 2): " choice
        fi

        case $choice in
            1)
                install_zalo
                ;;
            2)
                install_zalozadark
                ;;
            *)
                if [ "$LANGUAGE" == "EN" ]; then
                    echo "Invalid choice. Please select 1 or 2."
                else
                    echo "Lựa chọn không hợp lệ. Vui lòng chọn 1 hoặc 2."
                fi
                ;;
        esac
    done
}

install_zalo() {
    rm -rf /tmp/zalo-installer
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installing Zalo..."
    else
        echo "Đang cài đặt Zalo..."
    fi
    mkdir -p $HOME/.local/share/
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installing Electron v22.3.27..."
    else
        echo "Đang cài đặt Electron v22.3.27..."
    fi
    rm -rf ~/.local/share/Zalo
    rm -rf $HOME/.local/share/applications/Zalo.desktop
    rm -rf $HOME/Desktop/Zalo.desktop
    mkdir -p /tmp/zalo-installer
    cp -r ./en /tmp/zalo-installer
    cp -r ./vn /tmp/zalo-installer
    cp -r ./prepare /tmp/zalo-installer
    cp -r ./Zalo /tmp/zalo-installer
    cp -r ./version.txt /tmp/zalo-installer
    cp -r ./update.sh /tmp/zalo-installer
    wget https://github.com/electron/electron/releases/download/v22.3.27/electron-v22.3.27-linux-x64.zip -P /tmp/zalo-installer/Zalo
    unzip /tmp/zalo-installer/Zalo/electron-v22.3.27-linux-x64.zip -d /tmp/zalo-installer/Zalo/electron-v22.3.27-linux-x64
    rm /tmp/zalo-installer/Zalo/electron-v22.3.27-linux-x64.zip
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installed Electron v22.3.27!"
    else
        echo "Đã cài đặt Electron v22.3.27!"
    fi
    if [ "$LANGUAGE" == "EN" ]; then
        cp /tmp/zalo-installer/en/main.py /tmp/zalo-installer/Zalo
    else
        cp /tmp/zalo-installer/vn/main.py /tmp/zalo-installer/Zalo
    fi
    cp -r /tmp/zalo-installer/Zalo $HOME/.local/share/
    sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-installer/prepare/Zalo.desktop"
    if [ "$LANGUAGE" == "EN" ]; then
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-installer/prepare/Update Zalo.desktop"
        cp -r "/tmp/zalo-installer/prepare/Update Zalo.desktop" $HOME/.local/share/applications
    else
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-installer/prepare/Cập Nhật Zalo.desktop"
        cp -r "/tmp/zalo-installer/prepare/Cập Nhật Zalo.desktop" $HOME/.local/share/applications
    fi
    cp -r /tmp/zalo-installer/prepare/Zalo.desktop $HOME/.local/share/applications
    cp -r /tmp/zalo-installer/prepare/Zalo.desktop $HOME/Desktop
    cp -r /tmp/zalo-installer/update.sh $HOME/.local/share/Zalo
    cp /tmp/zalo-installer/version.txt $HOME/.local/share/Zalo/version.txt
    rm -rf /tmp/zalo-installer
    echo $LANGUAGE > $HOME/.local/share/Zalo/lang.txt
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installed Zalo!"
    else
        echo "Đã cài đặt Zalo!"
    fi
    sleep 1
    exit 1
}

install_zalozadark() {
    rm -rf /tmp/zalo-installer
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installing ZaloZaDark..."
    else
        echo "Đang cài đặt ZaloZaDark..."
    fi
    mkdir -p $HOME/.local/share/
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installing Electron v22.3.27..."
    else
        echo "Đang cài đặt Electron v22.3.27..."
    fi
    rm -rf ~/.local/share/Zalo
    rm -rf $HOME/.local/share/applications/Zalo.desktop
    rm -rf "$HOME/.local/share/applications/Cập Nhật Zalo.desktop"
    rm -rf "$HOME/.local/share/applications/Update Zalo.desktop"
    rm -rf $HOME/Desktop/Zalo.desktop
    mkdir -p /tmp/zalo-installer
    cp -r ./en /tmp/zalo-installer
    cp -r ./vn /tmp/zalo-installer
    cp -r ./prepare /tmp/zalo-installer
    cp -r ./ZaloZaDark /tmp/zalo-installer
    cp -r ./version.txt /tmp/zalo-installer
    cp -r ./update.sh /tmp/zalo-installer
    wget https://github.com/electron/electron/releases/download/v22.3.27/electron-v22.3.27-linux-x64.zip -P /tmp/zalo-installer/ZaloZaDark
    unzip /tmp/zalo-installer/ZaloZaDark/electron-v22.3.27-linux-x64.zip -d /tmp/zalo-installer/ZaloZaDark/electron-v22.3.27-linux-x64
    rm /tmp/zalo-installer/ZaloZaDark/electron-v22.3.27-linux-x64.zip
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installed Electron v22.3.27!"
    else
        echo "Đã cài đặt Electron v22.3.27!"
    fi
    if [ "$LANGUAGE" == "EN" ]; then
        cp /tmp/zalo-installer/en/main.py /tmp/zalo-installer/ZaloZaDark
    else
        cp /tmp/zalo-installer/vn/main.py /tmp/zalo-installer/ZaloZaDark
    fi
    cp -r /tmp/zalo-installer/ZaloZaDark $HOME/.local/share/Zalo
    sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-installer/prepare/Zalo.desktop"
    if [ "$LANGUAGE" == "EN" ]; then
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-installer/prepare/Update Zalo.desktop"
        cp -r "/tmp/zalo-installer/prepare/Update Zalo.desktop" $HOME/.local/share/applications
    else
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-installer/prepare/Cập Nhật Zalo.desktop"
        cp -r "/tmp/zalo-installer/prepare/Cập Nhật Zalo.desktop" $HOME/.local/share/applications
    fi
    cp -r /tmp/zalo-installer/prepare/Zalo.desktop $HOME/.local/share/applications
    cp -r /tmp/zalo-installer/prepare/Zalo.desktop $HOME/Desktop
    cp /tmp/zalo-installer/version.txt $HOME/.local/share/Zalo/version.txt
    cp -r /tmp/zalo-installer/update.sh $HOME/.local/share/Zalo
    rm -rf /tmp/zalo-installer
    echo $LANGUAGE > $HOME/.local/share/Zalo/lang.txt
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Installed ZaloZaDark!"
    else
        echo "Đã cài đặt ZaloZaDark!"
    fi
    sleep 1
    exit 1

}

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

install_dependencies() {
    if [ "$LANGUAGE" == "EN" ]; then
        echo 'Installing dependencies...'
    else
        echo 'Đang cài đặt các phụ thuộc...'
    fi
    if command_exists pip ; then
        pip install pystray pillow --break-system-packages
    else
        pip3 install pystray pillow --break-system-packages
    fi
    if [ "$LANGUAGE" == "EN" ]; then
        echo 'Installed dependencies!'
    else
        echo 'Đã cài đặt các phụ thuộc!'
    fi
}

if ! command_exists python && ! command_exists python3; then
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Python is not installed. Do you want to install now? (y/n):"
    else
        echo "Python chưa được cài đặt. Bạn có muốn cài đặt bây giờ không? (y/n):"
    fi
    read -r response

    if [ "$response" = "y" ]; then
        if [ "$LANGUAGE" == "EN" ]; then
            echo "Proceeding with the installation..."
        else
            echo "Đang tiếp tục cài đặt..."
        fi
    else
        if [ "$LANGUAGE" == "EN" ]; then
            echo "Installation aborted."
        else
            echo "Đã hủy cài đặt."
        fi
        exit 1
    fi
else
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Python is installed."
    else
        echo "Python đã được cài đặt."
    fi
    install_dependencies
    install_menu
fi


install_python_debian_ubuntu() {
    if [ "$LANGUAGE" == "EN" ]; then
        echo '*** Installing Python on Debian/Ubuntu...'
    else
        echo '*** Đang cài đặt Python trên Debian/Ubuntu...'
    fi
    sudo apt-get update -y
    sudo apt-get install -y python3 python3-pip git
}

install_python_fedora() {
    if [ "$LANGUAGE" == "EN" ]; then
        echo '*** Installing Python on Fedora...'
    else
        echo '*** Đang cài đặt Python trên Fedora...'
    fi
    sudo dnf install -y python3 python3-pip git
}

install_python_centos() {
    if [ "$LANGUAGE" == "EN" ]; then
        echo '*** Installing Python on CentOS/RHEL/RedHat-based...'
    else
        echo '*** Đang cài đặt Python trên CentOS/RHEL/RedHat-based...'
    fi
    sudo yum install -y python3 python3-pip git
}

if [ ! -f /etc/os-release ]; then
    if [ "$LANGUAGE" == "EN" ]; then
        echo '*** Cannot detect Linux distribution! Aborting.'
    else
        echo '*** Không thể phát hiện bản phân phối Linux! Hủy bỏ.'
    fi
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
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Unsupported distribution $ID"
    else
        echo "Bản phân phối không được hỗ trợ $ID"
    fi
    exit 1
fi

if [ "$LANGUAGE" == "EN" ]; then
    echo
    echo '*** Python installation complete!'
else
    echo
    echo '*** Cài đặt Python hoàn tất!'
fi

install_dependencies
install_menu
