# My KDE Plasma dotfiles

My personal KDE Plasma dotfiles. In case my arch installs get corrupted or something. I use these configs on Arch Linux but they're pretty generic and should work on most distros.

NOTE: This exists mostly so I can easily restore my configs on a fresh Arch Linux installation. I won't provide support if you try to use these dotfiles on your own system. Some things might not apply and stuff may break. Use at your own risk.

The color schemes are based off of these: [Nord Light](https://store.kde.org/p/1833603) and [Nord Dark](https://store.kde.org/p/1833604). I just edited them to have bolder accent colors and different colors for inactive window title bars.

The Konsole theme is the official [Nord Konsole](https://github.com/nordtheme/konsole) color theme.

i am planning to automate installation via a script but until I figure that out here's manual installation instructions:

## Installation/Usage

1. Download or git clone this repo anywhere. Download link: [here](https://github.com/EJSnow/dotfiles/archive/refs/heads/main.zip)

2. Install dependencies (desktop effects/cursor theme/font/etc) (A functional KDE Plasma installation is assumed):

```
yay -S --needed bibata-cursor-theme blesh-git btop fastfetch klassy-bin kwin-effects-geometry-change starship ttf-hack-nerd
```

3. Copy everything inside the `home` folder to your home folder (`~`). If asked, merge/overwrite existing folders/files. NOTE: This folder might appear to be empty, that's because all the files in it are hidden. Press Ctrl+H in your file manager to show hidden files or on the command line, `ls -a` will show hidden files.

4. Log out and log back in to fully apply the settings.

That's it!
