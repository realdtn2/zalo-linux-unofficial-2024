#!/bin/bash
export PATH=/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin:/usr/local/sbin
rm -rf /tmp/zalo-update
mkdir /tmp/zalo-update
git clone https://github.com/realdtn2/zalo-linux-unofficial /tmp/zalo-update
cd /tmp/zalo-update

LANGUAGE=$(cat $HOME/.local/share/Zalo/lang.txt 2>/dev/null)
if [ "$LANGUAGE" != "EN" ] && [ "$LANGUAGE" != "VI" ]; then
    LANGUAGE="EN"
fi

check_version() {
    local current_version
    local latest_version
    current_version=$(cat $HOME/.local/share/Zalo/version.txt 2>/dev/null)
    latest_version=$(curl -s https://raw.githubusercontent.com/realdtn2/zalo-linux-unofficial/main/version.txt)

    if [ "$current_version" == "$latest_version" ]; then
        if [ "$LANGUAGE" == "EN" ]; then
            read -p "You already have the latest version ($current_version). Do you want to continue updating? (y/n): " response
        else
            read -p "Bạn đã có phiên bản mới nhất ($current_version). Bạn có muốn tiếp tục cập nhật không? (y/n): " response
        fi

        if [ "$response" != "y" ]; then
            if [ "$LANGUAGE" == "EN" ]; then
                echo "Update aborted."
            else
                echo "Đã hủy cập nhật."
            fi
            exit 1
        fi
    fi
}

update_menu() {
    while true; do
        if [ "$LANGUAGE" == "EN" ]; then
            echo "Select the version of Zalo to update:"
            echo "1) Zalo"
            echo "2) Zalo-ZaDark"
            read -p "Enter your choice (1 or 2): " choice
        else
            echo "Chọn phiên bản Zalo để cập nhật:"
            echo "1) Zalo"
            echo "2) Zalo-ZaDark"
            read -p "Nhập lựa chọn của bạn (1 hoặc 2): " choice
        fi

        case $choice in
            1)
                update_zalo
                ;;
            2)
                update_zalozadark
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

update_zalo() {
    rm -rf /tmp/zalo-updater
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updating Zalo..."
    else
        echo "Đang cập nhật Zalo..."
    fi
    mkdir -p $HOME/.local/share/
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updating Electron v22.3.27..."
    else
        echo "Đang cập nhật Electron v22.3.27..."
    fi
    rm -rf ~/.local/share/Zalo
    rm -rf $HOME/.local/share/applications/Zalo.desktop
    rm -rf $HOME/Desktop/Zalo.desktop
    mkdir -p /tmp/zalo-updater
    cp -r ./en /tmp/zalo-updater
    cp -r ./vn /tmp/zalo-updater
    cp -r ./prepare /tmp/zalo-updater
    cp -r ./Zalo /tmp/zalo-updater
    cp -r ./version.txt /tmp/zalo-updater
    cp -r ./update.sh /tmp/zalo-updater
    wget https://github.com/electron/electron/releases/download/v22.3.27/electron-v22.3.27-linux-x64.zip -P /tmp/zalo-updater/Zalo
    unzip /tmp/zalo-updater/Zalo/electron-v22.3.27-linux-x64.zip -d /tmp/zalo-updater/Zalo/electron-v22.3.27-linux-x64
    rm /tmp/zalo-updater/Zalo/electron-v22.3.27-linux-x64.zip
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updated Electron v22.3.27!"
    else
        echo "Đã cập nhật Electron v22.3.27!"
    fi
    if [ "$LANGUAGE" == "EN" ]; then
        cp /tmp/zalo-updater/en/main.py /tmp/zalo-updater/Zalo
    else
        cp /tmp/zalo-updater/vn/main.py /tmp/zalo-updater/Zalo
    fi
    cp -r /tmp/zalo-updater/Zalo $HOME/.local/share/
    sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-updater/prepare/Zalo.desktop"
    if [ "$LANGUAGE" == "EN" ]; then
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-updater/prepare/Update Zalo.desktop"
        cp -r "/tmp/zalo-updater/prepare/Update Zalo.desktop" $HOME/.local/share/applications
    else
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-updater/prepare/Cập Nhật Zalo.desktop"
        cp -r "/tmp/zalo-updater/prepare/Cập Nhật Zalo.desktop" $HOME/.local/share/applications
    fi
    cp -r /tmp/zalo-updater/prepare/Zalo.desktop $HOME/.local/share/applications
    cp -r /tmp/zalo-updater/prepare/Zalo.desktop $HOME/Desktop
    cp -r /tmp/zalo-updater/version.txt $HOME/.local/share/Zalo
    cp -r /tmp/zalo-updater/update.sh $HOME/.local/share/Zalo
    cp /tmp/zalo-updater/version.txt $HOME/.local/share/Zalo/version.txt
    rm -rf /tmp/zalo-updater
    echo $LANGUAGE > $HOME/.local/share/Zalo/lang.txt
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updated Zalo!"
    else
        echo "Đã cập nhật Zalo!"
    fi
    sleep 1
    exit 1
}

update_zalozadark() {
    rm -rf /tmp/zalo-updater
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updating ZaloZaDark..."
    else
        echo "Đang cập nhật ZaloZaDark..."
    fi
    mkdir -p $HOME/.local/share/
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updating Electron v22.3.27..."
    else
        echo "Đang cập nhật Electron v22.3.27..."
    fi
    rm -rf ~/.local/share/Zalo
    rm -rf $HOME/.local/share/applications/Zalo.desktop
    rm -rf "$HOME/.local/share/applications/Cập Nhật Zalo.desktop"
    rm -rf "$HOME/.local/share/applications/Update Zalo.desktop"
    rm -rf $HOME/Desktop/Zalo.desktop
    mkdir -p /tmp/zalo-updater
    cp -r ./en /tmp/zalo-updater
    cp -r ./vn /tmp/zalo-updater
    cp -r ./prepare /tmp/zalo-updater
    cp -r ./ZaloZaDark /tmp/zalo-updater
    cp -r ./version.txt /tmp/zalo-updater
    cp -r ./update.sh /tmp/zalo-updater
    wget https://github.com/electron/electron/releases/download/v22.3.27/electron-v22.3.27-linux-x64.zip -P /tmp/zalo-updater/ZaloZaDark
    unzip /tmp/zalo-updater/ZaloZaDark/electron-v22.3.27-linux-x64.zip -d /tmp/zalo-updater/ZaloZaDark/electron-v22.3.27-linux-x64
    rm /tmp/zalo-updater/ZaloZaDark/electron-v22.3.27-linux-x64.zip
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updated Electron v22.3.27!"
    else
        echo "Đã cập nhật Electron v22.3.27!"
    fi
    if [ "$LANGUAGE" == "EN" ]; then
        cp /tmp/zalo-updater/en/main.py /tmp/zalo-updater/ZaloZaDark
    else
        cp /tmp/zalo-updater/vn/main.py /tmp/zalo-updater/ZaloZaDark
    fi
    cp -r /tmp/zalo-updater/ZaloZaDark $HOME/.local/share/Zalo
    sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-updater/prepare/Zalo.desktop"
    if [ "$LANGUAGE" == "EN" ]; then
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-updater/prepare/Update Zalo.desktop"
        cp -r "/tmp/zalo-updater/prepare/Update Zalo.desktop" $HOME/.local/share/applications
    else
        sed -i "s|\$HOME|$HOME|g" "/tmp/zalo-updater/prepare/Cập Nhật Zalo.desktop"
        cp -r "/tmp/zalo-updater/prepare/Cập Nhật Zalo.desktop" $HOME/.local/share/applications
    fi
    cp -r /tmp/zalo-updater/prepare/Zalo.desktop $HOME/.local/share/applications
    cp -r /tmp/zalo-updater/prepare/Zalo.desktop $HOME/Desktop
    cp -r /tmp/zalo-updater/version.txt $HOME/.local/share/Zalo
    cp -r /tmp/zalo-updater/update.sh $HOME/.local/share/Zalo
    cp /tmp/zalo-updater/version.txt $HOME/.local/share/Zalo/version.txt
    rm -rf /tmp/zalo-updater
    echo $LANGUAGE > $HOME/.local/share/Zalo/lang.txt
    if [ "$LANGUAGE" == "EN" ]; then
        echo "Updated ZaloZaDark!"
    else
        echo "Đã cập nhật ZaloZaDark!"
    fi
    sleep 1
    exit 1
}

check_version
update_menu
