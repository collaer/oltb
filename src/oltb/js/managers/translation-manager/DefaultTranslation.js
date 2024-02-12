export const DefaultTranslation = Object.freeze({
    lang: {
        text: 'English',
        code: 'en-us',
        info: 'This is the default translation instance and not the loaded en-us.json file'
    },
    commons: {
        titles: {
            edit: 'Edit',
            delete: 'Delete',
            dragToSort: 'Drag To Sort',
            download: 'Download',
            copyText: 'Copy Text',
            copyCoordinates: 'Copy Coordinates',
            showLayer: 'Show Layer',
            rename: 'Rename',
            toggleSection: 'Toggle Section',
            toggleVisibility: 'Toggle Visibility',
            zoomToCoordinates: 'Zoom To Coordinates'
        }
    },
    managers: {
        settingsManager: {
            settings: {
                mouseWheelZoom: 'Zoom Map Using Mousewheel Only',
                altShiftDragRotate: 'Rotate Map Using Shift + Alt + Drag',
                dragPan: 'Drag Map Using Mouse Only',
                keyboardZoom: 'Zoom Map Using Keyboard',
                keyboardPan: 'Pan Map Using Keyboard',
                selectVectorMapShapes: 'Select Shapes In Vector Map Layers',
                snapInteraction: 'Use Snap Interaction',
                snapHelpLines: 'Use Snap Help Lines',
                alwaysNewLayers: 'Create New Layer When Selecting Tool'
            }
        },
        errorManager: {
            toasts: {
                errors: {
                    uncaughtException: {
                        title: 'Error',
                        message: 'An unexpected error occurred'
                    }
                }
            }
        },
        infoWindowManager: {
            toasts: {
                infos: {
                    copyMarkerCoordinates: {
                        title: 'Copied',
                        message: 'Marker coordinates copied to clipboard'
                    },
                    copyMarkerInfo: {
                        title: 'Copied',
                        message: 'Marker info copied to clipboard'
                    },
                },
                errors: {
                    copyMarkerInfo: {
                        title: 'Error',
                        message: 'Failed to copy Marker info'
                    },
                    copyMarkerCoordinates: {
                        title: 'Error',
                        message: 'Failed to copy Marker coordinates'
                    },
                }
            },
            dialogs: {
                confirms: {
                    deleteMarker: {
                        title: 'Delete Marker',
                        message: 'Do you want to delete this Marker?',
                        confirmText: 'Delete',
                        cancelText: 'Cancel'
                    }
                }
            }
        }
    },
    modalExtensions: {
        coordinateModal: {
            title: 'Coordinates',
            form: {
                latitude: 'Latitude',
                longitude: 'Longitude',
                navigateTo: 'Navigate To',
                cancel: 'Cancel',
                description: 'Coordinates are given in WGS84/EPSG:4326'
            }
        },
        debugInfoModal: {
            title: 'Debug Information',
            noMapFound: 'No Map reference found',
            form: {
                doAction: 'Do Action',
                defaultItem: {
                    title: 'Select Action'
                },
                miscGroup: {
                    title: 'Misc',
                    items: {
                        logToBrowser: 'Log Map To Browser Console',
                        generateUUID: 'Generate UUID',
                        clearStyleManager: 'Clear Style Manager'
                    }
                },
                eventLogGroup: {
                    title: 'Event Log',
                    items: {
                        copyEventLog: 'Copy Event Log',
                        clearEventLog: 'Clear Event Log',
                    }
                }
            },
            sections: {
                appData: 'App Data',
                mapData: 'Map Data',
                browserData: 'Browser Data',
                localStorage: 'Local Storage',
                sessionStorage: 'Session Storage',
                cookies: 'Cookies',
                eventLog: 'Eventlog'
            },
            toasts: {
                infos: {
                    logMapObject: {
                        title: 'Logged',
                        message: 'Map object logged to console'
                    },
                    copyEventLog: {
                        title: 'Copied',
                        message: 'Event log copied to clipboard'
                    },
                    clearEventLog: {
                        title: 'Cleared',
                        message: 'Event log was cleared of all entries'
                    },
                    clearStyleManager: {
                        title: 'Cleared',
                        message: 'Style Manager was cleared of all entries'
                    }
                },
                errors: {
                    copyEventLog: {
                        title: 'Error',
                        message: 'Failed to copy Event log to clipboard'
                    }
                }
            }
        },
        downloadLayerModal: {
            title: 'Download Layer',
            form: {
                layerFormat: 'Layer format',
                download: 'Download Layer',
                cancel: 'Cancel'
            }
        },
        geometryDataModal: {
            title: 'Geometry Data',
            data: {
                id: 'Id',
                measurement: 'Measurement',
                oltbProperties: 'OLTB Properties',
                vertices: 'Vertices',
                coordinates: 'Coordinates'
            }
        },
        iconMarkerModal: {
            title: 'Marker Configuration',
            form: {
                title: 'Title',
                description: 'Description',
                latitude: 'Latitude',
                longitude: 'Longitude',
                markerFill: 'Marker Fill',
                markerStroke: 'Marker Stroke',
                icon: 'Icon',
                iconFill: 'Icon Fill',
                iconStroke: 'Icon Stroke',
                label: 'Label',
                labelFill: 'Label Fill',
                labelStroke: 'Label Stroke',
                labelStrokeWidth: 'Label Stroke Width',
                saveChanges: 'Save Changes',
                createMarker: 'Create Marker',
                cancel: 'Cancel'
            }
        },
        importLayerModal: {
            title: 'Import Layer',
            form: {
                featureProjection: 'Feature Projection',
                dataProjection: 'Data Projection',
                import: 'Import Layer',
                cancel: 'Cancel'
            }
        },
        layerModal: {
            title: 'Create Map Layer',
            form: {
                name: 'Name',
                layer: 'Layer',
                source: 'Source',
                projection: 'Projection',
                url: 'URL',
                parameters: 'Parameters (JSON)',
                wrapX: 'WrapX',
                cors: 'CORS',
                attributions: 'Attributions',
                createLayer: 'Create Layer',
                cancel: 'Cancel'
            }
        },
        settingsModal: {
            title: 'Settings',
            form: {
                save: 'Save Settings',
                cancel: 'Cancel'
            }
        }
    },
    tools: {
        hiddenAboutTool: {
            contextItems: {
                about: 'About OLTB'
            },
            modals: {
                about: {
                    title: 'About OLTB',
                    version: 'Version',
                    developedBy: 'Developed by Qulle',
                    usingOpenLayers: 'Using OpenLayers'
                }
            }
        },
        hiddenMapNavigationTool: {
            contextItems: {
                copyCoordinates: 'Copy Coordinates',
                navigateToCoordinates: 'Navigate To',
                centerMap: 'Center Here',
                focusMap: 'Focus Here'
            },
            toasts: {
                infos: {
                    coordinatesCopied: {
                        title: 'Copied',
                        message: 'Coordinates copied to clipboard'
                    }
                },
                errors: {
                    coordinatesCopy: {
                        title: 'Error',
                        message: 'Failed to copy coordinates'
                    },
                    parseUrlMarker: {
                        title: 'Error',
                        message: 'Failed to parse URL Marker'
                    },
                    missingProjection: {
                        title: 'Error',
                        message: 'Missing projection definition'
                    }
                }
            }
        },
        hiddenMarkerTool: {
            contextItems: {
                createMarker: 'Create Marker'
            }
        },
        bookmarkTool: {
            title: 'Bookmarks',
            toolbox: {
                titles: {
                    bookmarks: 'Bookmarks'
                },
                groups: {
                    addBookmark: {
                        placeholder: 'Name',
                        add: 'Add Bookmark'
                    }
                }
            },
            contextItems: {
                addBookmark: 'Add Bookmark',
                clearBookmarks: 'Clear Bookmarks'
            },
            layers: {
                bookmarks: 'Bookmarks'
            },
            toasts: {
                infos: {
                    clearBookmarks: {
                        title: 'Cleared',
                        message: 'All stored bookmarks was cleared'
                    },
                    createBookmark: {
                        title: 'New Bookmark',
                        message: 'A new Bookmark created'
                    },
                    copyCoordinates: {
                        title: 'Copied',
                        message: 'Coordinates copied to clipboard'
                    }
                },
                errors: {
                    copyCoordinates: {
                        title: 'Error',
                        message: 'Failed to copy coordinates'
                    }
                }
            },
            dialogs: {
                confirms: {
                    clearBookmarks: {
                        title: 'Clear Bookmarks',
                        message: 'Do you want to clear all Bookmarks?',
                        confirmText: 'Clear',
                        cancelText: 'Cancel'
                    },
                    deleteBookmark: {
                        title: 'Delete Bookmark',
                        message: 'Do you want to delete bookmark',
                        confirmText: 'Delete',
                        cancelText: 'Cancel'
                    }
                },
                prompts: {
                    editBookmark: {
                        title: 'Edit Name',
                        message: 'You are editing bookmark',
                        confirmText: 'Rename',
                        cancelText: 'Cancel'
                    }
                }
            }
        },
        coordinatesTool: {
            title: 'Show Coordinates',
            toolbox: {
                titles: {
                    coordinates: 'Coordinates'
                },
                groups: {
                    formats: {
                        title: 'Format',
                        dd: 'Decimal Degrees',
                        dms: 'Degrees, Minutes, Seconds'
                    },
                    coordinates: {
                        title: 'Coordinates'
                    }
                }
            },
            settings: {
                copyOnClick: 'Copy Coordinates On Click',
                updateToolboxOnHover: 'Update Toolbox Coordinates When Hover'
            },
            toasts: {
                infos: {
                    copyCoordinates: {
                        title: 'Copied',
                        message: 'Coordinates copied to clipboard'
                    },
                },
                errors: {
                    copyCoordinates: {
                        title: 'Error',
                        message: 'Failed to copy coordinates'
                    }
                }
            }
        },
        debugInfoTool: {
            title: 'Debug Info'
        },
        directionTool: {
            title: 'Toggle Direction'
        },
        drawTool: {
            title: 'Draw',
            toolbox: {
                titles: {
                    draw: 'Draw'
                },
                groups: {
                    shapes: {
                        title: 'Shape',
                        circle: 'Circle',
                        square: 'Square',
                        rectangle: 'Rectangle',
                        lineString: 'Line',
                        point: 'Point',
                        polygon: 'Polygon'
                    },
                    intersectable: {
                        title: 'Intersection',
                        true: 'Yes',
                        false: 'No'
                    },
                    strokeWidth: {
                        title: 'Stroke Width'
                    },
                    strokeColor: {
                        title: 'Stroke Color'
                    },
                    fillColor: {
                        title: 'Fill Color'
                    }
                }
            },
            layers: {
                defaultName: 'Drawing layer'
            },
            toasts: {
                infos: {
                    drawInHiddenLayer: {
                        title: 'Tip',
                        message: 'You are drawing in a hidden layer'
                    },
                    missingIntersections: {
                        title: 'Oops',
                        message: 'No intersecting object found'
                    }
                }
            }
        },
        editTool: {
            title: 'Edit',
            toolbox: {
                titles: {
                    edit: 'Edit'
                },
                groups: {
                    misc: {
                        title: 'Misc',
                        delete: 'Delete',
                        rotate: 'Rotate',
                        geometryData: 'Geometry Data'
                    },
                    shapes: {
                        title: 'Shapes',
                        union: 'Union',
                        intersect: 'Intersect',
                        exclude: 'Exclude',
                        difference: 'Difference'
                    },
                    strokeColor: {
                        title: 'Stroke Color'
                    },
                    fillColor: {
                        title: 'Fill Color'
                    }
                }
            },
            settings: {
                mouseOnlyToEditVectorShapes: 'Mouse Only To Edit Vector Shapes',
            },
            toasts: {
                infos: {
                    missingFeatures: {
                        title: 'Oops',
                        message: 'No objects are selected'
                    },
                    strictOneFeature: {
                        title: 'Oops',
                        message: 'Strict one object can be selected'
                    },
                    strictTwoFeatures: {
                        title: 'Oops',
                        message: 'Strict two overlapping objects must be selected'
                    }
                },
                errors: {
                    operationFailed: {
                        title: 'Error',
                        message: 'Failed to perform shape operation'
                    },
                    invalidValue: {
                        title: 'Error',
                        message: 'Only digits are allowed as input'
                    }
                }
            },
            dialogs: {
                confirms: {
                    deleteFeatures: {
                        title: 'Delete Features',
                        message: 'Delete selected feature',
                        confirmText: 'Delete',
                        cancelText: 'Cancel'
                    }
                },
                prompts: {
                    rotateFeatures: {
                        title: 'Rotate Features',
                        message: 'Rotate Features by N-degrees',
                        confirmText: 'Rotate Features',
                        cancelText: 'Cancel'
                    }
                }
            }
        },
        exportPngTool: {
            title: 'Export PNG',
            toasts: {
                errors: {
                    renderCanvas: {
                        title: 'Error',
                        message: 'Failed to export Canvas'
                    }
                }
            }
        },
        fullscreenTool: {
            title: 'Toggle Fullscreen',
            toasts: {
                errors: {
                    missingFullScreenSupport: {
                        title: 'Error',
                        message: 'Fullscreen is not supported by this browser'
                    }
                }
            }
        },
        graticuleTool: {
            title: 'Show Graticule'
        },
        helpTool: {
            title: 'Help',
            dialogs: {
                confirms: {
                    openHelp: {
                        title: 'Help Pages',
                        message: 'Browsers block automatic opening new windows, here is a button for you to press',
                        confirmText: 'Open Help',
                        cancelText: 'Cancel'
                    }
                }
            },
            toasts: {
                errors: {
                    blockedByBrowser: {
                        title: 'Error',
                        message: 'Action was restricted by browser settings'
                    }
                }
            }
        },
        homeTool: {
            title: 'Zoom Home',
            contextItems: {
                setHome: 'Set Home'
            },
            toasts: {
                infos: {
                    setHomeLocation: {
                        title: 'New Home',
                        message: 'New location was set as Home'
                    }
                }
            }
        },
        importVectorLayerTool: {
            title: 'Import Vector Layer',
            toasts: {
                errors: {
                    unsupportedFormat: {
                        title: 'Error',
                        message: 'The layer format is not supported'
                    },
                    importFailed: {
                        title: 'Error',
                        message: 'Failed to import vector layer'
                    }
                }
            }
        },
        infoTool: {
            title: 'Info'
        },
        layerTool: {
            title: 'Layers',
            toolbox: {
                titles: {
                    mapLayers: 'Map Layers',
                    featureLayers: 'Feature Layers'
                },
                groups: {
                    createMapLayer: {
                        create: 'Create Map Layer'
                    },
                    createFeatureLayer: {
                        placeholder: 'Name', 
                        create: 'Create Feature Layer'
                    }
                }
            },
            contextItems: {
                addMapLayer: 'Add Map Layer',
                addFeatureLayer: 'Add Feature Layer'
            },
            toasts: {
                infos: {
                    addFeatureLayer: {
                        title: 'New Layer',
                        message: 'A new Feature layer created'
                    }
                },
                errors: {
                    addFeatureLayer: {
                        title: 'Error',
                        message: 'Failed to create new layer'
                    },
                    missingProjection: {
                        title: 'Error',
                        message: 'Missing projection definition'
                    },
                    unsupportedFormat: {
                        title: 'Error',
                        message: 'The layer format is not supported'
                    }
                }
            },
            dialogs: {
                prompts: {
                    renameLayer: {
                        title: 'Edit Name',
                        message: 'Edit name for layer',
                        confirmText: 'Rename',
                        cancelText: 'Cancel'
                    }
                },
                confirms: {
                    deleteLayer: {
                        title: 'Delete Layer',
                        message: 'Do you want to delete layer',
                        confirmText: 'Delete',
                        cancelText: 'Cancel'
                    }
                }
            }
        },
        magnifyTool: {
            title: 'Magnify',
            toasts: {
                errors: {
                    renderCanvas: {
                        title: 'Error',
                        message: 'Unexpected error using magnifier',
                    }
                }
            }
        },
        measureTool: {
            title: 'Measure',
            toolbox: {
                titles: {
                    measure: 'Measure'
                },
                groups: {
                    type: {
                        title: 'Type',
                        lineString: 'Length',
                        polygon: 'Area'
                    },
                    strokeColor: {
                        title: 'Stroke Color'
                    },
                    fillColor: {
                        title: 'Fill Color'
                    }
                }
            },
            layers: {
                defaultName: 'Measurements layer'
            },
            toasts: {
                infos: {
                    drawInHiddenLayer: {
                        title: 'Tip',
                        message: 'You are measuring in a hidden layer'
                    }
                }
            }
        },
        myLocationTool: {
            title: 'My Location',
            dialogs: {
                confirms: {
                    exitFullscreen: {
                        title: 'Exit Fullscreen',
                        message: 'To use geolocation you must exit fullscreen',
                        confirmText: 'Exit Fullscreen',
                        cancelText: 'Cancel'
                    }
                }
            },
            toasts: {
                infos: {
                    fetchLocation: {
                        title: 'Searching',
                        message: 'Trying to find your location...'
                    }
                },
                errors: {
                    exitFullscreen: {
                        title: 'Error',
                        message: 'Failed to exit fullscreen'
                    },
                    locationNotFound: {
                        title: 'Error',
                        message: 'Failed to find location'
                    }
                }
            }
        },
        overviewTool: {
            title: 'Map Overview',
            toolbox: {
                titles: {
                    overview: 'Map Overview'
                }
            }
        },
        refreshTool: {
            title: 'Refresh Page'
        },
        resetNorthTool: {
            title: 'Reset North',
            contextItems: {
                rotate: 'Rotate Map'
            },
            dialogs: {
                prompts: {
                    rotateMap: {
                        title: 'Rotate Map',
                        message: 'Set Map rotation by degrees',
                        confirmText: 'Rotate Map',
                        cancelText: 'Cancel'
                    }
                }
            },
            toasts: {
                errors: {
                    invalidValue: {
                        title: 'Error',
                        message: 'Only digits are allowed as input'
                    }
                }
            }
        },
        scaleLineTool: {
            title: 'Scale Line'
        },
        scissorsTool: {
            title: 'Polygon Scissors',
            toasts: {
                infos: {
                    missingIntersections: {
                        title: 'Oops',
                        message: 'No intersecting object found'
                    }
                }
            }
        },
        settingsTool: {
            title: 'Settings',
            contextItems: {
                clearBrowserState: 'Clear Browser State'
            },
            toasts: {
                infos: {
                    clearBrowserState: {
                        title: 'Cleared',
                        message: 'All stored items was reset to default'
                    }
                },
                successes: {
                    savedSettings: {
                        title: 'Saved',
                        message: 'All settings saved in browser storage'
                    }
                }
            },
            dialogs: {
                confirms: {
                    clearBrowserState: {
                        title: 'Clear Browser State',
                        message: 'Do you want to reset all items to default state for the Toolbar?',
                        confirmText: 'Clear',
                        cancelText: 'Cancel'
                    }
                }
            }
        },
        splitViewTool: {
            title: 'Split View',
            toolbox: {
                titles: {
                    splitView: 'Split View'
                },
                groups: {
                    leftSide: {
                        title: 'Left Side'
                    },
                    rightSide: {
                        title: 'Right Side'
                    },
                    swapSides: {
                        swap: 'Swap Sides'
                    }
                },
                toasts: {
                    infos: {
                        strictOneLayer: {
                            title: 'Tip',
                            message: 'You must have more than one layer'
                        }
                    },
                    errors: {
                        layerFailedToLoad: {
                            title: 'Error',
                            message: 'Layer(s) could not be loaded'
                        }
                    }
                }
            }
        },
        themeTool: {
            title: 'Toggle Theme'
        },
        toolboxTool: {
            title: 'Toggle Toolbox'
        },
        translationTool: {
            title: 'Translate',
            dialogs: {
                selects: {
                    changeLanguage: {
                        title: 'Language',
                        message: 'Current language is',
                        confirmText: 'Switch Language',
                        cancelText: 'Cancel',
                    }
                }
            }
        },
        zoomboxTool: {
            title: 'Zoombox',
            tooltips: {
                dragToZoom: 'Drag To Zoom'
            }
        },
        zoomInTool: {
            title: 'Zoom In'
        },
        zoomOutTool: {
            title: 'Zoom Out'
        }
    }
});