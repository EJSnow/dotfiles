# My KDE Plasma dotfiles

My personal KDE Plasma rice. In case my arch installs get corrupted or something. I use these configs on Arch Linux but you can get the KWin extensions and cursor theme anywhere.

NOTE: This exists mostly so I can easily restore my rice on a fresh Arch Linux installation. I won't provide support if you try to use these dotfiles on your own system. Some things might not apply and stuff may break. Use at your own risk.

The color schemes are based off of these: [Nord Light](https://store.kde.org/p/1833603) and [Nord Dark](https://store.kde.org/p/1833604). I just edited them to have bolder accent colors and different colors for inactive window title bars.

The Konsole theme is the official [Nord Konsole](https://github.com/nordtheme/konsole) color theme.

i am planning to automate installation of the rice but until I figure that out here's manual installation instructions:

## Installation/Usage

1. Download or git clone this repo anywhere. Download link: [here](https://github.com/EJSnow/dotfiles/archive/refs/heads/main.zip)

2. Install dependencies (KWin scripts/desktop effects/cursor theme) (A functional KDE Plasma installation is assumed):

```
yay -S --needed bibata-cursor-theme blesh-git btop fastfetch kwin-effects-forceblur kwin-scripts-krohnkite kwin-effects-geometry-change starship ttf-hack-nerd
```

Note: kwin-effects-forceblur is currently unmaintained, but still works on Plasma. However, the AUR package was deleted, so the easiest way to get it is to use the [chaotic-aur](https://aur.chaotic.cx/) as it still has the effect packaged. See [https://aur.chaotic.cx/docs](https://aur.chaotic.cx/docs) to add the chaotic-aur to your system.

3. Copy everything inside the `home` folder to your home folder (`~`). If asked, merge/overwrite existing folders/files. NOTE: This folder might appear to be empty, that's because all the files in it are hidden. Press Ctrl+H in your file manager to show hidden files or on the command line, `ls -a` will show hidden files.

4. Copy everything inside the `root` folder to the system root (`/`). If asked, merge/overwrite existing folders/files. Obviously root privileges are needed.

5. Reboot to fully apply settings (you could also do `systemctl soft-reboot` which is faster than a full restart). After restarting, go to `Colors and Themes/Colors` in System Settings and select `Nord Dark` and apply. Then go to `Colors and Themes/Login Screen (SDDM)` and click `Apply Plasma Settings...` then `Apply`. (This is because for various reasons, the color scheme can't be automatically applied.)

That's it! Enjoy your rice, and remember to check the [Krohnkite docs](https://codeberg.org/anametologin/Krohnkite#settings). (Very helpful!)
