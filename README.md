# My KDE Plasma dotfiles

My personal KDE Plasma rice. In case my arch installs get corrupted or something. I use these configs on Arch Linux but you can get the KWin extensions and cursor theme anywhere.

NOTE: This exists mostly so I can easily restore my rice on a fresh Arch Linux installation. I won't provide support if you try to use these dotfiles on your own system. Some things might not apply and stuff may break. Use at your own risk.

The color schemes are based off of these: [Nord Light](https://store.kde.org/p/1833603) and [Nord Dark](https://store.kde.org/p/1833604). I just edited them to have bolder accent colors and different colors for inactive window title bars.

The Konsole theme is the official [Nord Konsole](https://github.com/nordtheme/konsole) color theme.

i am planning to automate installation of the rice but until I figure that out here's manual installation instructions:

# Installation/Usage

Download or git clone this repo anywhere. Download link: [here](https://github.com/EJSnow/dotfiles/archive/refs/heads/main.zip)

Install dependencies (KWin scripts/desktop effects/cursor theme) (A functional KDE Plasma installation is assumed):

```
yay -S --needed kwin-effects-forceblur kwin-scripts-krohnkite kwin-effects-geometry-change bibata-cursor-theme btop fastfetch starship blesh-git
```

Copy everything inside the `home` folder to your home folder (`~`). If asked, merge/overwrite existing folders/files.

Copy everything inside the `root` folder to the system root (`/`). If asked, merge/overwrite existing folders/files. Obviously root privileges are needed.

Open System Settings, go to `Colors & Themes/Login Screen (SDDM)` and click `Apply Plasma Settings...`. Then click `Apply` and enter your password.

Go to `Window Management/Desktop Effects` in System Settings, make sure `Better Blur` and `Geometry Change` are enabled and the default `Blur` effect is disabled.

Go to `Window Management/KWin Scripts` in System Settings, and make sure `Krohnkite` is enabled.

Reboot to fully apply settings (you could also do `systemctl soft-reboot` which is faster than a full restart).

That's it!
