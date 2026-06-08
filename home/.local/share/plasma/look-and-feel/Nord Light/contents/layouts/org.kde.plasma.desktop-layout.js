var plasma = getApiVersion(1);

var layout = {
    "desktops": [
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
                            "title": "Network Speed"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "network/all/download": "136,192,208",
                            "network/all/downloadBits": "136,192,208",
                            "network/all/upload": "208,152,136",
                            "network/all/uploadBits": "236,239,244"
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
                            "title": "CPU: Core i7-1065G7"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "136,199,208",
                            "memory/physical/used": "180,142,173"
                        },
                        "/SensorLabels": {
                            "cpu/all/averageFrequency": "CPU Frequency",
                            "cpu/all/averageTemperature": "CPU Temperature",
                            "cpu/all/usage": "CPU Usage",
                            "memory/physical/total": "Total RAM",
                            "memory/physical/used": "RAM Usage"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\",\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/averageFrequency\",\"cpu/all/averageTemperature\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "CPU: Core i7-1065G7"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "title": "Battery Status"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "power/2229/chargePercentage": "136,192,208"
                        },
                        "/SensorLabels": {
                            "power/2229/capacity": "Current Capacity",
                            "power/2229/chargePercentage": "Battery Level",
                            "power/2229/chargeRate": "Charge/Discharge Rate",
                            "power/2229/design": "Design Capacity",
                            "power/2229/health": "Battery Health"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"power/2229/chargePercentage\"]",
                            "lowPrioritySensorIds": "[\"power/2229/chargeRate\",\"power/2229/health\",\"power/2229/design\",\"power/2229/capacity\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "Battery Status"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1536x864": "Applet-31:0,672,256,160,0;Applet-33:1056,640,208,192,0;Applet-34:1264,640,208,192,0;",
                    "ItemGeometries-1920x1080": "Applet-31:-0.0512,879.846,256,160,0;Applet-33:1440,848,208,192,0;Applet-34:1648,848,208,192,0;",
                    "ItemGeometriesHorizontal": "Applet-31:0,672,256,160,0;Applet-33:1056,640,208,192,0;Applet-34:1264,640,208,192,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "630",
                    "DialogWidth": "810"
                },
                "/General": {
                    "iconSize": "2"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/ejsnow/Pictures/theme/Screenshot_20250802_142506.png",
                    "SlideInterval": "600",
                    "SlidePaths": "/home/ejsnow/Pictures/theme/"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
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
                            "popupWidth": "653"
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
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "highlightWindows": "true",
                            "iconSpacing": "0",
                            "interactiveMute": "false",
                            "launchers": "applications:org.kde.konsole.desktop,preferred://filemanager,applications:firefox.desktop,applications:spotify.desktop,applications:org.kde.elisa.desktop,applications:discord.desktop,applications:steam.desktop,file:///usr/share/applications/libreoffice-writer.desktop",
                            "showOnlyCurrentDesktop": "false",
                            "showOnlyCurrentScreen": "true",
                            "wheelEnabled": "TaskOnly"
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
            "height": 2.888888888888889,
            "hiding": "dodgewindows",
            "location": "right",
            "maximumLength": 46.333333333333336,
            "minimumLength": 46.333333333333336,
            "offset": 0
        },
        {
            "alignment": "center",
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
                            "popupWidth": "810"
                        },
                        "/Appearance": {
                            "dateFormat": "isoDate",
                            "displayTimezoneFormat": "UTCOffset",
                            "fontWeight": "400",
                            "selectedTimeZones": "US/Central,Local"
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
            "height": 1.6666666666666667,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 85.33333333333333,
            "minimumLength": 85.33333333333333,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
