var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
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
                },
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
                            "title": "CPU & RAM"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "136,192,208",
                            "memory/physical/used": "180,142,173"
                        },
                        "/SensorLabels": {
                            "cpu/all/averageFrequency": "CPU Frequency",
                            "cpu/all/averageTemperature": "CPU Temperature",
                            "cpu/all/coreCount": "Threads",
                            "cpu/all/usage": "CPU Usage",
                            "memory/physical/total": "Total RAM",
                            "memory/physical/used": "RAM Usage"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\",\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/averageFrequency\",\"cpu/all/averageTemperature\",\"cpu/all/coreCount\",\"memory/physical/total\"]"
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
                            "title": "GPU - RX 6600"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "gpu/gpu0/usage": "191,97,106",
                            "gpu/gpu0/usedVram": "180,142,173"
                        },
                        "/SensorLabels": {
                            "gpu/gpu0/coreFrequency": "Core Frequency",
                            "gpu/gpu0/fan1": "Fan Speed",
                            "gpu/gpu0/power1": "Power Draw",
                            "gpu/gpu0/temperature": "Core Temperature",
                            "gpu/gpu0/usage": "GPU Usage",
                            "gpu/gpu0/usedVram": "VRAM Usage"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"gpu/gpu0/usage\",\"gpu/gpu0/usedVram\"]",
                            "lowPrioritySensorIds": "[\"gpu/gpu0/coreFrequency\",\"gpu/gpu0/temperature\",\"gpu/gpu0/fan1\",\"gpu/gpu0/power1\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "System Monitor Sensor"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1097x686": "Applet-150:0,0,240,240,0;Applet-26:0,448,240,160,0;Applet-111:608,384,224,224,0;Applet-112:832,384,224,224,0;",
                    "ItemGeometries-1280x720": "",
                    "ItemGeometries-1280x800": "Applet-150:0,0,240,240,0;Applet-26:0,544,240,160,0;Applet-112:832,480,224,224,0;Applet-111:1056,480,224,224,0;",
                    "ItemGeometries-1536x864": "Applet-150:0,0,240,240,0;Applet-164:0,608,272,176,0;Applet-166:1088,544,224,240,0;Applet-165:1312,544,224,240,0;",
                    "ItemGeometries-1920x1080": "Applet-150:0,0,240,240,0;Applet-164:0,816,272,176,0;Applet-166:1472,752,224,240,0;Applet-165:1696,752,224,240,0;",
                    "ItemGeometries-1920x1200": "",
                    "ItemGeometries-427x320": "Applet-150:0,0,240,240,0;Applet-26:0,448,240,160,0;Applet-111:608,384,224,224,0;Applet-112:832,384,224,224,0;",
                    "ItemGeometries-640x480": "Applet-150:0,0,240,240,0;Applet-26:0,256,240,144,0;Applet-111:416,160,224,224,0;Applet-112:416,0,224,160,0;",
                    "ItemGeometriesHorizontal": "Applet-150:0,0,240,240,0;Applet-164:0,608,272,176,0;Applet-166:1088,544,224,240,0;Applet-165:1312,544,224,240,0;",
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
                            "title": "CPU & RAM"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "136,192,208",
                            "memory/physical/used": "180,142,173"
                        },
                        "/SensorLabels": {
                            "cpu/all/averageFrequency": "CPU Frequency",
                            "cpu/all/averageTemperature": "CPU Temperature",
                            "cpu/all/coreCount": "Threads",
                            "cpu/all/usage": "CPU Usage",
                            "memory/physical/total": "Total RAM",
                            "memory/physical/used": "RAM Usage"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\",\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/averageFrequency\",\"cpu/all/averageTemperature\",\"cpu/all/coreCount\",\"memory/physical/total\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "CPU & RAM"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "title": "GPU - RX 6600"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "gpu/gpu0/usage": "191,97,106",
                            "gpu/gpu0/usedVram": "180,142,173"
                        },
                        "/SensorLabels": {
                            "gpu/gpu0/coreFrequency": "Core Frequency",
                            "gpu/gpu0/fan1": "Fan Speed",
                            "gpu/gpu0/in0": "Core Voltage",
                            "gpu/gpu0/power1": "Power Draw",
                            "gpu/gpu0/temperature": "Core Temperature",
                            "gpu/gpu0/usage": "GPU Usage",
                            "gpu/gpu0/usedVram": "VRAM Usage"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"gpu/gpu0/usage\",\"gpu/gpu0/usedVram\"]",
                            "lowPrioritySensorIds": "[\"gpu/gpu0/coreFrequency\",\"gpu/gpu0/temperature\",\"gpu/gpu0/fan1\",\"gpu/gpu0/power1\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor",
                    "title": "GPU - RX 6600"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1097x686": "",
                    "ItemGeometries-1280x800": "",
                    "ItemGeometries-1680x1050": "",
                    "ItemGeometries-1920x1080": "Applet-160:0,880,240,160,0;Applet-162:1408,800,224,240,0;Applet-161:1632,800,224,240,0;",
                    "ItemGeometries-427x320": "Applet-160:0,128,240,160,0;Applet-162:1408,800,224,240,0;Applet-161:1632,800,224,240,0;",
                    "ItemGeometries-512x384": "Applet-26:0,192,240,160,0;Applet-111:240,128,208,224,0;Applet-112:1168,784,224,224,0;",
                    "ItemGeometries-640x480": "Applet-26:0,288,240,160,0;Applet-25:240,288,240,160,0;",
                    "ItemGeometriesHorizontal": "Applet-160:0,880,240,160,0;Applet-162:1408,800,224,240,0;Applet-161:1632,800,224,240,0;",
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
                    "Image": "file:///usr/share/wallpapers/ScarletTree/",
                    "PreviewImage": "/usr/share/wallpapers/Next/",
                    "SlidePaths": "/usr/share/wallpapers/"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///home/ejsnow/Pictures/gaming/Screenshot_20260508_220446.png",
                    "SlideInterval": "300",
                    "SlidePaths": "/home/ejsnow/Pictures/gaming/",
                    "SlideshowMode": "1"
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
                            "popupHeight": "519",
                            "popupWidth": "674"
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
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
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
                            "launchers": "applications:org.kde.konsole.desktop,preferred://filemanager,applications:firefox.desktop,applications:spotify.desktop,applications:org.strawberrymusicplayer.strawberry.desktop,applications:discord.desktop,applications:steam.desktop,applications:com.obsproject.Studio.desktop,file:///usr/share/applications/libreoffice-calc.desktop",
                            "middleClickAction": "Close",
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
            "height": 3,
            "hiding": "dodgewindows",
            "lengthMode": "custom",
            "location": "right",
            "maximumLength": 58.44444444444444,
            "minimumLength": 58.44444444444444,
            "offset": 0,
            "opacity": "translucent"
        },
        {
            "alignment": "center",
            "applets": [
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
                            "customDateFormat": "M/d/yyyy",
                            "dateFormat": "custom",
                            "selectedTimeZones": "US/Central,Local"
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
                        "/": {
                            "popupHeight": "751",
                            "popupWidth": "800"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "activeLocation": "{\"name\":\"Home (Waxhaw, NC)\",\"lat\":34.9251,\"lon\":-80.7278,\"altitude\":201,\"timezone\":\"America/New_York\",\"countryCode\":\"US\"}",
                            "alertNotificationState": "{\"required weekly test|foss public alert server|2026-08-03T11:01:00-04:00|2026-08-03T12:01:00-04:00\":{\"dismissed\":false,\"nextDueMs\":1785771487084,\"expiresMs\":1785772860000,\"shownOnce\":true,\"awarenessType\":0}}",
                            "alertNotificationsRepeatEnabled": "false",
                            "altitude": "201",
                            "countryCode": "US",
                            "latitude": "34.9251",
                            "locationName": "Home (Waxhaw, NC)",
                            "longitude": "-80.7278",
                            "notificationRainEnabled": "false",
                            "notificationSentKeys": "{\"today:2026-08-07\":1786111717154,\"tomorrow:2026-08-08\":1786147222298,\"today:2026-08-08\":1786226690418,\"tomorrow:2026-08-09\":1786237401185,\"today:2026-08-09\":1786283507891,\"tomorrow:2026-08-10\":1786323439726}",
                            "notificationSnowEnabled": "false",
                            "notificationSpaceWeatherEnabled": "false",
                            "notificationSpaceWeatherLastDate": "2026-07-30",
                            "notificationSpaceWeatherLastKp": "4",
                            "notificationUvEnabled": "false",
                            "notificationUvLastDate": "2026-07-30",
                            "notificationUvLastValue": "8.05",
                            "panelSimpleIconStyle": "colorful",
                            "panelSimpleTempShadowEnabled": "false",
                            "precipitationUnit": "in",
                            "pressureUnit": "inHg",
                            "radarZoom": "8",
                            "savedLocations": "[{\"name\":\"Home (Waxhaw, NC)\",\"lat\":34.9251,\"lon\":-80.7278,\"altitude\":201,\"timezone\":\"America/New_York\",\"countryCode\":\"US\",\"starred\":true},{\"name\":\"Grandma Sue & Aunt Courtney (Melbourne, FL)\",\"lat\":28.08363,\"lon\":-80.60811,\"altitude\":6,\"timezone\":\"America/New_York\",\"countryCode\":\"US\"},{\"name\":\"The Speeces (Columbia, SC)\",\"lat\":34.00071,\"lon\":-81.03481,\"altitude\":89,\"timezone\":\"America/New_York\",\"countryCode\":\"US\"},{\"name\":\"LeTourneau (Longview, TX)\",\"lat\":32.5007,\"lon\":-94.74049,\"altitude\":113,\"timezone\":\"America/Chicago\",\"countryCode\":\"US\"}]",
                            "simpleFontAutoSz": "13",
                            "simpleIconAutoSz": "28",
                            "simplePanelDim": "28",
                            "simpleShowForecastCompass": "false",
                            "temperatureUnit": "F",
                            "timezone": "America/New_York",
                            "widgetIconTheme": "flat-color",
                            "windSpeedUnit": "mph"
                        }
                    },
                    "plugin": "org.kde.plasma.advanced-weather-widget"
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
            "lengthMode": "fill",
            "location": "top",
            "maximumLength": 90.38888888888889,
            "minimumLength": 90.38888888888889,
            "offset": 0,
            "opacity": "translucent"
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
                            "launchers": "applications:org.kde.konsole.desktop,preferred://filemanager,preferred://browser,applications:discord.desktop,applications:spotify.desktop,applications:org.kde.elisa.desktop,applications:com.obsproject.Studio.desktop,file:///usr/share/applications/libreoffice-calc.desktop"
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
                        "/Appearance": {
                            "widgetElements": "windowIcon,windowTitle,windowMinimizeButton,windowMaximizeButton,windowCloseButton",
                            "widgetElementsDisabledMode": "Hide",
                            "windowTitleFontBold": "false",
                            "windowTitleFontSize": "10",
                            "windowTitleHideEmpty": "true",
                            "windowTitleMarginsLeft": "5",
                            "windowTitleMarginsRight": "5",
                            "windowTitleMaximumWidth": "320"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "com.github.antroids.application-title-bar"
                },
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
