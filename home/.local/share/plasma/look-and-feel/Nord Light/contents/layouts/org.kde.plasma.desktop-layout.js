var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1680x1050": "",
                    "ItemGeometries-512x384": "Applet-26:0,192,240,160,0;Applet-111:240,128,208,224,0;Applet-112:1168,784,224,224,0;",
                    "ItemGeometries-640x480": "Applet-26:0,288,240,160,0;Applet-25:240,288,240,160,0;",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "arrangement": "1",
                    "changedPositions": "{}",
                    "iconSize": "2",
                    "labelWidth": "0",
                    "lastResolution": "1680x1050",
                    "positions": "{\"1097x686\":[\"1\",\"7\",\"desktop:/Video Projects\",\"10\",\"0\",\"desktop:/Minecraft instances\",\"0\",\"0\",\"desktop:/Steam Gaming Mode-2.desktop\",\"0\",\"3\",\"desktop:/ActivityWatch.desktop\",\"1\",\"0\"],\"1152x864\":[\"21\",\"8\",\"desktop:/Video Projects\",\"15\",\"0\",\"desktop:/Minecraft instances\",\"16\",\"0\",\"desktop:/Steam Gaming Mode-2.desktop\",\"0\",\"0\",\"desktop:/ActivityWatch.desktop\",\"1\",\"0\"],\"1280x1024\":[\"13\",\"10\",\"desktop:/Video Projects\",\"15\",\"0\",\"desktop:/Minecraft instances\",\"16\",\"0\",\"desktop:/Steam Gaming Mode-2.desktop\",\"0\",\"0\",\"desktop:/ActivityWatch.desktop\",\"1\",\"0\"],\"1280x800\":[\"19\",\"8\",\"desktop:/Video Projects\",\"15\",\"0\",\"desktop:/Minecraft instances\",\"16\",\"0\",\"desktop:/Steam Gaming Mode-2.desktop\",\"0\",\"0\",\"desktop:/ActivityWatch.desktop\",\"1\",\"0\"],\"1600x900\":[\"18\",\"9\",\"desktop:/Video Projects\",\"15\",\"0\",\"desktop:/Minecraft instances\",\"16\",\"0\",\"desktop:/Steam Gaming Mode-2.desktop\",\"0\",\"0\",\"desktop:/ActivityWatch.desktop\",\"1\",\"0\"],\"1680x1050\":[\"1\",\"10\"],\"512x384\":[\"2\",\"2\",\"desktop:/Steam Gaming Mode-2.desktop\",\"1\",\"1\",\"desktop:/ActivityWatch.desktop\",\"0\",\"1\",\"desktop:/Ezra Snow\",\"0\",\"0\",\"desktop:/Minecraft instances\",\"1\",\"0\"]}",
                    "sortMode": "-1",
                    "toolTips": "true"
                },
                "/Wallpaper/com.github.catsout.wallpaperEngineKde/General": {
                    "DisplayMode": "1",
                    "PauseMode": "2"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/usr/share/wallpapers/Next/",
                    "PreviewImage": "/usr/share/wallpapers/Next/",
                    "SlidePaths": "/usr/share/wallpapers/"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/ejsnow/Pictures/gaming/Screenshot_20250827_161243.png",
                    "SlideInterval": "300",
                    "SlidePaths": "/home/ejsnow/Pictures/gaming/",
                    "SlideshowMode": "1"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "showTitle": "false",
                            "title": "Network Speed",
                            "updateRateLimit": "0"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "network/all/download": "61,174,233",
                            "network/all/downloadBits": "136,192,208",
                            "network/all/upload": "255,255,255",
                            "network/all/uploadBits": "216,222,233"
                        },
                        "/SensorLabels": {
                            "network/all/downloadBits": "Download rate",
                            "network/all/uploadBits": "Upload rate"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"network/all/downloadBits\",\"network/all/uploadBits\"]"
                        },
                        "/org.kde.ksysguard.linechart/General": {
                            "showYAxisLabels": "false"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.net",
                    "title": "Network Speed"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "showTitle": "true",
                            "title": "CPU (Core i7-4790) & RAM"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "136,192,208",
                            "memory/physical/used": "180,142,173"
                        },
                        "/SensorLabels": {
                            "cpu/all/averageFrequency": "CPU Frequency",
                            "cpu/all/averageTemperature": "CPU Temperature",
                            "cpu/all/coreCount": "CPU Threads",
                            "cpu/all/usage": "CPU Usage",
                            "memory/physical/total": "Total Usable RAM",
                            "memory/physical/used": "RAM Usage"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\",\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/averageFrequency\",\"cpu/all/averageTemperature\",\"memory/physical/total\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "System Monitor Sensor"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "title": "GPU (RX 6400)"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "gpu/gpu1/usage": "241,0,59",
                            "gpu/gpu1/usedVram": "180,142,173",
                            "gpu/gpu2/usage": "241,0,59",
                            "gpu/gpu2/usedVram": "180,142,173"
                        },
                        "/SensorLabels": {
                            "gpu/gpu1/coreFrequency": "GPU Frequency",
                            "gpu/gpu1/fan1": "Fan speed",
                            "gpu/gpu1/temperature": "GPU Temperature",
                            "gpu/gpu1/usage": "GPU Usage",
                            "gpu/gpu1/usedVram": "VRAM Usage",
                            "gpu/gpu2/coreFrequency": "Core Frequency",
                            "gpu/gpu2/fan1": "Fan speed",
                            "gpu/gpu2/memoryFrequency": "Memory Frequency",
                            "gpu/gpu2/power": "GPU Power",
                            "gpu/gpu2/temperature": "GPU Temperature",
                            "gpu/gpu2/usage": "GPU Usage",
                            "gpu/gpu2/usedVram": "VRAM Usage"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"gpu/gpu2/usage\",\"gpu/gpu2/usedVram\"]",
                            "lowPrioritySensorIds": "[\"gpu/gpu2/coreFrequency\",\"gpu/gpu2/temperature\",\"gpu/gpu2/fan1\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "System Monitor Sensor"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.analogclock",
                    "title": "Analog Clock"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1097x686": "Applet-150:0,0,240,240,0;Applet-26:0,448,240,160,0;Applet-111:608,384,224,224,0;Applet-112:832,384,224,224,0;",
                    "ItemGeometries-1280x720": "",
                    "ItemGeometries-1280x800": "Applet-150:0,0,240,240,0;Applet-26:0,544,240,160,0;Applet-112:832,480,224,224,0;Applet-111:1056,480,224,224,0;",
                    "ItemGeometries-1536x864": "",
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometries-1920x1200": "",
                    "ItemGeometries-427x320": "",
                    "ItemGeometriesHorizontal": "Applet-150:0,0,240,240,0;Applet-26:0,448,240,160,0;Applet-111:608,384,224,224,0;Applet-112:832,384,224,224,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "630",
                    "DialogWidth": "810"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img8.jpg",
                    "SlidePaths": "/usr/share/wallpapers/"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img13.jpg",
                    "SlideInterval": "300",
                    "SlidePaths": "/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/",
                    "UncheckedSlides": "/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img0.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img1.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img14.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img15.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img16.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img17.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img18.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img19.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img2.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img20.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img21.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img22.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img23.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img24.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img26.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img25.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img27.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img28.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img3.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img29.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img30.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img4.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img5.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/img6.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/Logon.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/Embedded/Logon-Embedded.jpg,/home/ejsnow/Pictures/Windows wallpapers/8 - Windows 7/Starter/img0.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "547",
                            "popupWidth": "648"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "alphaSort": "true",
                            "favoritesDisplay": "1",
                            "favoritesPortedToKAstats": "true",
                            "icon": "/usr/share/pixmaps/archlinux-logo.png",
                            "paneSwap": "true",
                            "primaryActions": "3",
                            "showActionButtonCaptions": "false",
                            "systemFavorites": "lock-screen\\,logout\\,save-session\\,switch-user\\,suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "highlightWindows": "true",
                            "iconSpacing": "0",
                            "interactiveMute": "false",
                            "launchers": "applications:org.kde.konsole.desktop,preferred://filemanager,applications:org.mozilla.firefox.desktop,applications:spotify.desktop,applications:org.kde.elisa.desktop,applications:steam.desktop,applications:com.obsproject.Studio.desktop,file:///usr/share/applications/libreoffice-calc.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3,
            "hiding": "dodgewindows",
            "location": "right",
            "maximumLength": 56.77777777777778,
            "minimumLength": 56.77777777777778,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "396"
                        },
                        "/Appearance": {
                            "customDateFormat": "dd-MM-yyyy",
                            "dateFormat": "isoDate"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.5555555555555556,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 90.38888888888889,
            "minimumLength": 90.38888888888889,
            "offset": 0
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "508",
                            "popupWidth": "648"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "alphaSort": "true",
                            "favoritesDisplay": "1",
                            "favoritesPortedToKAstats": "true",
                            "icon": "/usr/share/pixmaps/archlinux-logo.png",
                            "primaryActions": "3",
                            "showActionButtonCaptions": "false",
                            "showRecentApps": "false",
                            "showRecentDocs": "false",
                            "systemFavorites": "lock-screen\\,logout\\,save-session\\,switch-user\\,suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "interactiveMute": "false",
                            "launchers": "applications:org.kde.konsole.desktop,preferred://filemanager,preferred://browser,file:///var/lib/flatpak/exports/share/applications/com.discordapp.Discord.desktop,applications:com.obsproject.Studio.desktop,applications:spotify.desktop,applications:org.kde.elisa.desktop,file:///usr/share/applications/libreoffice-calc.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "customDateFormat": "dd-MM-yyyy",
                            "dateFormat": "custom"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 4,
            "location": "top"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
