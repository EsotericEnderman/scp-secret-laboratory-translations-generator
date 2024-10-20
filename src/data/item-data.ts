export const itemData = {
    "Janitor Keycard": {
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": {
                "action": "Destroys the item"
            },
            "1:1": "Zone Manager Keycard",
            "Fine": "Scientist Keycard",
            "Very Fine": [
                {
                    "item": "Scientist Keycard",
                    "chance": 0.5
                },
                {
                    "item": "Research Supervisor Keycard",
                    "chance": 0.5
                }
            ]
        }
    },
    "Scientist Keycard": {
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "Janitor Keycard",
                    "chance": 0.5
                }
            ],
            "Coarse": "Janitor Keycard",
            "1:1": "Zone Manager Keycard",
            "Fine": "Research Supervisor Keycard",
            "Very Fine": [
                {
                    "item": "Scientist Keycard",
                    "chance": 0.333333343
                },
                {
                    "item": "Research Supervisor Keycard",
                    "chance": 0.333333343
                },
                {
                    "item": "Facility Manager Keycard",
                    "chance": 0.333333343
                }
            ]
        }
    },
    "Research Supervisor Keycard": {
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Janitor Keycard",
                    "chance": 0.5
                },
                {
                    "item": "Scientist Keycard",
                    "chance": 0.5
                }
            ],
            "Coarse": "Scientist Keycard",
            "1:1": "Guard Keycard",
            "Fine": "Facility Manager Keycard",
            "Very Fine": [
                {
                    "item": "Research Supervisor Keycard",
                    "chance": 0.5
                },
                {
                    "item": "Facility Manager Keycard",
                    "chance": 0.5
                }
            ]
        }
    },
    "Zone Manager Keycard": {
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Janitor Keycard",
                    "chance": 0.5
                },
                {
                    "item": "Scientist Keycard",
                    "chance": 0.5
                }
            ],
            "Coarse": "Scientist Keycard",
            "1:1": "Guard Keycard",
            "Fine": "Facility Manager Keycard",
            "Very Fine": [
                {
                    "item": "Facility Manager Keycard",
                    "chance": 0.4
                },
                {
                    "item": "Zone Manager Keycard",
                    "chance": 0.4
                },
                {
                    "item": "Chaos Insurgency Access Device",
                    "chance": 0.2
                }
            ]
        }
    },
    "Guard Keycard": {
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Janitor Keycard",
                    "chance": 0.5
                },
                {
                    "item": "Scientist Keycard",
                    "chance": 0.5
                }
            ],
            "Coarse": "Scientist Keycard",
            "1:1": "Research Supervisor Keycard",
            "Fine": "MTF Operative Keycard",
            "Very Fine": [
                {
                    "item": "Guard Keycard",
                    "chance": 0.333333343
                },
                {
                    "item": "MTF Operative Keycard",
                    "chance": 0.333333343
                },
                {
                    "item": "MTF Captain Keycard",
                    "chance": 0.333333343
                }
            ]
        }
    },
    "MTF Private Keycard": {
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Scientist Keycard",
                    "chance": 0.5
                },
                {
                    "item": "Research Supervisor Keycard",
                    "chance": 0.5
                }
            ],
            "Coarse": "Research Supervisor Keycard",
            "1:1": "Facility Manager Keycard",
            "Fine": "MTF Operative Keycard",
            "Very Fine": [
                {
                    "item": "MTF Operative Keycard",
                    "chance": 0.5
                },
                {
                    "item": "MTF Captain Keycard",
                    "chance": 0.5
                }
            ]
        }
    },
    "Containment Engineer Keycard": {
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Scientist Keycard",
                    "chance": 0.5
                },
                {
                    "item": "Research Supervisor Keycard",
                    "chance": 0.5
                }
            ],
            "Coarse": "Research Supervisor Keycard",
            "1:1": "Facility Manager Keycard",
            "Fine": [
                {
                    "item": "O5-level Keycard",
                    "chance": 0.5
                },
                {
                    "item": "MTF Captain Keycard",
                    "chance": 0.5
                }
            ],
            "Very Fine": [
                {
                    "item": "O5-level Keycard",
                    "chance": 0.6666667
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.333333343
                }
            ]
        }
    },
    "MTF Operative Keycard": {
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Guard Keycard",
                    "chance": 0.5
                },
                {
                    "item": "MTF Private Keycard",
                    "chance": 0.5
                }
            ],
            "Coarse": "MTF Private Keycard",
            "1:1": "Facility Manager Keycard",
            "Fine": "MTF Captain Keycard",
            "Very Fine": [
                {
                    "item": "MTF Captain Keycard",
                    "chance": 0.333333343
                },
                {
                    "item": "O5-level Keycard",
                    "chance": 0.333333343
                },
                {
                    "item": "MTF Operative Keycard",
                    "chance": 0.333333343
                }
            ]
        }
    },
    "MTF Captain Keycard": {
        "scp914Outputs": {
            "Rough": "Guard Keycard",
            "Coarse": "MTF Operative Keycard",
            "1:1": "Chaos Insurgency Access Device",
            "Fine": "O5-level Keycard",
            "Very Fine": [
                {
                    "item": "O5-level Keycard",
                    "chance": 0.75
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.25
                }
            ]
        }
    },
    "Facility Manager Keycard": {
        "scp914Outputs": {
            "Rough": "Zone Manager Keycard",
            "Coarse": "MTF Captain Keycard",
            "1:1": "Chaos Insurgency Access Device",
            "Fine": "O5-level Keycard",
            "Very Fine": [
                {
                    "item": "O5-level Keycard",
                    "chance": 0.75
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.25
                }
            ]
        }
    },
    "Chaos Insurgency Access Device": {
        "scp914Outputs": {
            "Rough": "Guard Keycard",
            "Coarse": "MTF Operative Keycard",
            "1:1": "MTF Captain Keycard",
            "Fine": "O5-level Keycard",
            "Very Fine": [
                {
                    "item": "O5-level Keycard",
                    "chance": 0.75
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.25
                }
            ]
        }
    },
    "O5-level Keycard": {
        "scp914Outputs": {
            "Rough": "Guard Keycard",
            "Coarse": [
                {
                    "item": "Facility Manager Keycard",
                    "chance": 0.5
                },
                {
                    "item": "MTF Captain Keycard",
                    "chance": 0.5
                }
            ],
            "1:1": "O5-level Keycard",
            "Fine": [
                {
                    "item": "O5-level Keycard",
                    "chance": 0.5
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                }
            ],
            "Very Fine": [
                {
                    "item": "O5-level Keycard",
                    "chance": 0.25
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.75
                }
            ]
        }
    },
    "Radio": {
        "itemDescriptionTextSize": {
            "en": 15
        },
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": {
                "action": "Destroys the item"
            },
            "1:1": "Radio",
            "Fine": "Radio",
            "Very Fine": [
                {
                    "item": "Flashlight",
                    "chance": 0.75
                },
                {
                    "item": "SCP-1576",
                    "chance": 0.25
                }
            ]
        }
    },
    "COM-15": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "chance": 0.5
                }
            ],
            "Coarse": [
                {
                    "item": "COM-15",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "chance": 0.5
                }
            ],
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "COM-18",
            "Very Fine": [
                {
                    "item": ".44 Revolver",
                    "chance": 0.295
                },
                {
                    "item": "FSP-9",
                    "chance": 0.555
                },
                {
                    "item": "COM-45",
                    "chance": 0.15
                }
            ]
        }
    },
    "First Aid Kit": {
        "itemDescriptionTextSize": {
            "en": 10
        },
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": "Painkillers",
            "1:1": "First Aid Kit",
            "Fine": "Adrenaline",
            "Very Fine": [
                {
                    "item": "First Aid Kit",
                    "chance": 0.333333343
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.333333343
                },
                {
                    "item": "SCP-500",
                    "chance": 0.333333343
                }
            ]
        }
    },
    "Flashlight": {
        "itemDescriptionTextSize": {
            "en": 10
        },
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": [
                {
                    "item": "Flashlight",
                    "chance": 0.5
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                }
            ],
            "1:1": "Flashlight",
            "Fine": "Radio",
            "Very Fine": [
                {
                    "item": "Flashbang Grenade",
                    "chance": 0.9
                },
                {
                    "item": "SCP-2176",
                    "chance": 0.1
                }
            ]
        }
    },
    "Micro H.I.D.": {
        "itemDescriptionTextSize": {
            "en": 10
        },
        "scp914Outputs": {
            "Rough": "MTF-E11-SR",
            "Coarse": {
                "action": "Recharges"
            },
            "1:1": {
                "action": "Recharges"
            },
            "Fine": {
                "action": "Recharges"
            },
            "Very Fine": [
                {
                    "item": "3-X Particle Disruptor",
                    "chance": 0.5
                },
                {
                    "item": "Jailbird",
                    "chance": 0.5
                }
            ]
        }
    },
    "SCP-500": {
        "itemDescriptionTextSize": {
            "en": 10
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Painkillers",
                    "chance": 0.5
                },
                {
                    "item": "First Aid Kit",
                    "chance": 0.5
                }
            ],
            "Coarse": "Adrenaline",
            "1:1": "SCP-500",
            "Fine": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "SCP-500",
                    "chance": 0.5
                }
            ],
            "Very Fine": {
                "action": "Destroys the item"
            }
        }
    },
    "SCP-207": {
        "scp914Outputs": {
            "Rough": "Painkillers",
            "Coarse": "Adrenaline",
            "1:1": "SCP-207?",
            "Fine": "SCP-1853",
            "Very Fine": {
                "action": "Destroys the item"
            }
        }
    },
    "12/7 Buckshot Ammo": {
        "scp914Outputs": {
            "Rough": "7.62x39mm Ammo",
            "Coarse": "7.62x39mm Ammo",
            "1:1": "9x19mm Ammo",
            "Fine": ".44mag Ammo",
            "Very Fine": ".44mag Ammo"
        }
    },
    "MTF-E11-SR": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "COM-15",
                    "chance": 0.5
                },
                {
                    "item": "5.56x45mm Ammo",
                    "count": 2,
                    "chance": 0.5
                }
            ],
            "Coarse": "Crossvec",
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "AK",
            "Very Fine": [
                {
                    "item": "Micro H.I.D.",
                    "chance": 0.05
                },
                {
                    "item": "Logicer",
                    "chance": 0.25
                },
                {
                    "item": "Shotgun",
                    "chance": 0.1
                },
                {
                    "item": "AK",
                    "chance": 0.3
                },
                {
                    "item": "Crossvec",
                    "chance": 0.3
                }
            ]
        }
    },
    "Crossvec": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "count": 4,
                    "chance": 0.5
                }
            ],
            "Coarse": "FSP-9",
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": [
                {
                    "item": "MTF-E11-SR",
                    "chance": 0.6
                },
                {
                    "item": "AK",
                    "chance": 0.4
                }
            ],
            "Very Fine": [
                {
                    "item": "Shotgun",
                    "chance": 0.3
                },
                {
                    "item": "MTF-E11-SR",
                    "chance": 0.7
                }
            ]
        }
    },
    "5.56x45mm Ammo": {
        "scp914Outputs": {
            "Rough": "9x19mm Ammo",
            "Coarse": "9x19mm Ammo",
            "1:1": "7.62x39mm Ammo",
            "Fine": "9x19mm Ammo",
            "Very Fine": "9x19mm Ammo"
        }
    },
    "FSP-9": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "count": 3,
                    "chance": 0.5
                }
            ],
            "Coarse": [
                {
                    "item": "COM-18",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "count": 2,
                    "chance": 0.5
                }
            ],
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "Crossvec",
            "Very Fine": [
                {
                    "item": "Crossvec",
                    "chance": 0.7
                },
                {
                    "item": "MTF-E11-SR",
                    "chance": 0.3
                }
            ]
        }
    },
    "Logicer": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "AK",
                    "chance": 0.5
                },
                {
                    "item": "7.62x39mm Ammo",
                    "count": 4,
                    "chance": 0.5
                }
            ],
            "Coarse": "FR-MG-0",
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "Shotgun",
            "Very Fine": [
                {
                    "item": "Micro H.I.D.",
                    "chance": 0.1
                },
                {
                    "outputs": [
                        "AK",
                        {
                            "item": "High-Explosive Grenade",
                            "count": 2
                        }
                    ],
                    "chance": 0.6
                },
                {
                    "outputs": [
                        ".44 Revolver",
                        "Shotgun"
                    ],
                    "chance": 0.3
                }
            ]
        }
    },
    "High-Explosive Grenade": {
        "itemDescriptionTextSize": {
            "en": 15
        },
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": "Flashbang Grenade",
            "1:1": "Flashbang Grenade",
            "Fine": "High-Explosive Grenade",
            "Very Fine": [
                {
                    "item": "High-Explosive Grenade",
                    "chance": 0.25
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "SCP-018",
                    "chance": 0.25
                }
            ]
        }
    },
    "Flashbang Grenade": {
        "itemDescriptionTextSize": {
            "en": 15
        },
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": "Flashlight",
            "1:1": "High-Explosive Grenade",
            "Fine": "High-Explosive Grenade",
            "Very Fine": [
                {
                    "action": "Destroys the item",
                    "chance": 0.75
                },
                {
                    "item": "SCP-207",
                    "chance": 0.25
                }
            ]
        }
    },
    ".44mag Ammo": {
        "scp914Outputs": {
            "Rough": "12/7 Buckshot Ammo",
            "Coarse": "12/7 Buckshot Ammo",
            "1:1": "9x19mm Ammo",
            "Fine": "7.62x39mm Ammo",
            "Very Fine": "7.62x39mm Ammo"
        }
    },
    "7.62x39mm Ammo": {
        "scp914Outputs": {
            "Rough": ".44mag Ammo",
            "Coarse": ".44mag Ammo",
            "1:1": "5.56x45mm Ammo",
            "Fine": "12/7 Buckshot Ammo",
            "Very Fine": "12/7 Buckshot Ammo"
        }
    },
    "9x19mm Ammo": {
        "scp914Outputs": {
            "Rough": "5.56x45mm Ammo",
            "Coarse": "5.56x45mm Ammo",
            "1:1": ".44mag Ammo",
            "Fine": "5.56x45mm Ammo",
            "Very Fine": "5.56x45mm Ammo"
        }
    },
    "COM-18": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "9x19mm Ammo",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "count": 2,
                    "chance": 0.5
                }
            ],
            "Coarse": "COM-15",
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "FSP-9",
            "Very Fine": [
                {
                    "item": ".44 Revolver",
                    "chance": 0.45
                },
                {
                    "item": "Crossvec",
                    "chance": 0.55
                }
            ]
        }
    },
    "SCP-018": {
        "scp914Outputs": {
            "Rough": "Flashbang Grenade",
            "Coarse": "Flashbang Grenade",
            "1:1": "SCP-018",
            "Fine": "High-Explosive Grenade",
            "Very Fine": "Coin"
        }
    },
    "SCP-268": {
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": "SCP-268",
            "1:1": "SCP-268",
            "Fine": "SCP-268",
            "Very Fine": "SCP-268"
        }
    },
    "Adrenaline": {
        "itemDescriptionTextSize": {
            "en": 10
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "Painkillers",
                    "chance": 0.5
                }
            ],
            "Coarse": [
                {
                    "item": "First Aid Kit",
                    "chance": 0.5
                },
                {
                    "item": "Painkillers",
                    "chance": 0.5
                }
            ],
            "1:1": "Painkillers",
            "Fine": "SCP-500",
            "Very Fine": [
                {
                    "item": "Painkillers",
                    "chance": 0.6666667
                },
                {
                    "item": "SCP-500",
                    "chance": 0.333333343
                }
            ]
        }
    },
    "Painkillers": {
        "itemDescriptionTextSize": {
            "en": 10
        },
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": [
                {
                    "item": "Painkillers",
                    "chance": 0.5
                },
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                }
            ],
            "1:1": [
                {
                    "item": "First Aid Kit",
                    "chance": 0.5
                },
                {
                    "item": "Painkillers",
                    "chance": 0.5
                }
            ],
            "Fine": "First Aid Kit",
            "Very Fine": [
                {
                    "item": "First Aid Kit",
                    "chance": 0.5
                },
                {
                    "item": "Adrenaline",
                    "chance": 0.5
                }
            ]
        }
    },
    "Coin": {
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": "Coin",
            "1:1": "Coin",
            "Fine": "Coin",
            "Very Fine": "Coin"
        }
    },
    "Light Armor": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "Radio",
                    "chance": 0.5
                }
            ],
            "Coarse": "Flashlight",
            "1:1": "Light Armor",
            "Fine": "Combat Armor",
            "Very Fine": [
                {
                    "item": "Combat Armor",
                    "chance": 0.5
                },
                {
                    "item": "Heavy Armor",
                    "chance": 0.5
                }
            ]
        }
    },
    "Combat Armor": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Light Armor",
                    "chance": 0.5
                },
                {
                    "item": "Flashlight",
                    "chance": 0.5
                }
            ],
            "Coarse": "Light Armor",
            "1:1": "Combat Armor",
            "Fine": "Heavy Armor",
            "Very Fine": "Heavy Armor"
        }
    },
    "Heavy Armor": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "Combat Armor",
                    "chance": 0.5
                },
                {
                    "item": "Light Armor",
                    "chance": 0.5
                }
            ],
            "Coarse": "Combat Armor",
            "1:1": "Heavy Armor",
            "Fine": "Coin",
            "Very Fine": "Coin"
        }
    },
    ".44 Revolver": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": ".44mag Ammo",
                    "count": 2,
                    "chance": 0.5
                }
            ],
            "Coarse": [
                {
                    "item": "COM-18",
                    "chance": 0.8
                },
                {
                    "item": "High-Explosive Grenade",
                    "chance": 0.2
                }
            ],
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "Crossvec",
            "Very Fine": [
                {
                    "item": "High-Explosive Grenade",
                    "count": 2,
                    "chance": 0.5
                },
                {
                    "outputs": [
                        "Zone Manager Keycard",
                        "COM-15",
                        "Painkillers",
                        "First Aid Kit"
                    ],
                    "chance": 0.5
                }
            ]
        }
    },
    "AK": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "COM-15",
                    "chance": 0.5
                },
                {
                    "item": "7.62x39mm Ammo",
                    "count": 3,
                    "chance": 0.5
                }
            ],
            "Coarse": [
                {
                    "item": "Crossvec",
                    "chance": 0.5
                },
                {
                    "item": "A7",
                    "chance": 0.5
                }
            ],
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "MTF-E11-SR",
            "Very Fine": [
                {
                    "item": "Micro H.I.D.",
                    "chance": 0.05
                },
                {
                    "item": "Logicer",
                    "chance": 0.25
                },
                {
                    "item": "Shotgun",
                    "chance": 0.1
                },
                {
                    "item": "MTF-E11-SR",
                    "chance": 0.3
                },
                {
                    "item": "Crossvec",
                    "chance": 0.3
                }
            ]
        }
    },
    "Shotgun": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "COM-15",
                    "chance": 0.5
                },
                {
                    "item": "12/7 Buckshot Ammo",
                    "count": 2,
                    "chance": 0.5
                }
            ],
            "Coarse": "AK",
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "Logicer",
            "Very Fine": [
                {
                    "item": "Micro H.I.D.",
                    "chance": 0.05
                },
                {
                    "item": "Logicer",
                    "chance": 0.25
                },
                {
                    "item": "AK",
                    "chance": 0.4
                },
                {
                    "item": "Crossvec",
                    "chance": 0.3
                }
            ]
        }
    },
    "SCP-2176": {
        "scp914Outputs": {
            "Rough": {
                "action": "Shatters"
            },
            "Coarse": "Flashbang Grenade",
            "1:1": {
                "item": "Coin",
                "count": 12
            },
            "Fine": "COM-18",
            "Very Fine": [
                {
                    "item": "Flashlight",
                    "chance": 0.8
                },
                "MTF-E11-SR"
            ]
        }
    },
    "SCP-244-A": {
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": "Coin",
            "1:1": "SCP-244-B",
            "Fine": "SCP-244-A",
            "Very Fine": "SCP-244-A"
        }
    },
    "SCP-244-B": {
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": "Coin",
            "1:1": "SCP-244-A",
            "Fine": "SCP-244-B",
            "Very Fine": "SCP-244-B"
        }
    },
    "SCP-1853": {
        "itemDescriptionTextSize": {
            "en": 15
        },
        "scp914Outputs": {
            "Rough": "Painkillers",
            "Coarse": "Adrenaline",
            "1:1": "SCP-1853",
            "Fine": "SCP-207",
            "Very Fine": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "SCP-500",
                    "chance": 0.5
                }
            ]
        }
    },
    "3-X Particle Disruptor": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": "Flashlight",
            "Coarse": "MTF-E11-SR",
            "1:1": "Jailbird",
            "Fine": {
                "action": "Reloads"
            },
            "Very Fine": "Micro H.I.D."
        }
    },
    "COM-45": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "chance": 0.5
                }
            ],
            "Coarse": [
                {
                    "item": "COM-15",
                    "chance": 0.5
                },
                {
                    "item": "9x19mm Ammo",
                    "chance": 0.5
                }
            ],
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "Crossvec",
            "Very Fine": ".44 Revolver"
        }
    },
    "SCP-1576": {
        "scp914Outputs": {
            "Rough": "Radio",
            "Coarse": "SCP-2176",
            "1:1": "SCP-1576",
            "Fine": {
                "action": "Destroys the item"
            },
            "Very Fine": {
                "action": "Destroys the item"
            }
        }
    },
    "Jailbird": {
        "scp914Outputs": {
            "Rough": "Flashlight",
            "Coarse": "Jailbird",
            "1:1": "3-X Particle Disruptor",
            "Fine": "Jailbird",
            "Very Fine": "Micro H.I.D."
        }
    },
    "SCP-207?": {
        "scp914Outputs": {
            "Rough": "Painkillers",
            "Coarse": "Adrenaline",
            "1:1": "SCP-207",
            "Fine": "SCP-1853",
            "Very Fine": {
                "action": "Destroys the item"
            }
        }
    },
    "FR-MG-0": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "MTF-E11-SR",
                    "chance": 0.5
                },
                {
                    "item": "5.56x45mm Ammo",
                    "count": 4,
                    "chance": 0.5
                }
            ],
            "Coarse": "MTF-E11-SR",
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "Logicer",
            "Very Fine": [
                {
                    "item": "Micro H.I.D.",
                    "chance": 0.05
                },
                {
                    "outputs": [
                        "Crossvec",
                        "COM-18"
                    ],
                    "chance": 0.95
                }
            ]
        }
    },
    "A7": {
        "itemDescriptionTextSize": {
            "en": 5
        },
        "scp914Outputs": {
            "Rough": [
                {
                    "item": "COM-15",
                    "chance": 0.5
                },
                {
                    "item": "7.62x39mm Ammo",
                    "count": 3,
                    "chance": 0.5
                }
            ],
            "Coarse": "COM-18",
            "1:1": {
                "action": "Randomizes attachments"
            },
            "Fine": "AK",
            "Very Fine": [
                ".44 Revolver",
                "Flashbang Grenade"
            ]
        }
    },
    "Lantern": {
        "itemDescriptionTextSize": {
            "en": 10
        },
        "scp914Outputs": {
            "Rough": {
                "action": "Destroys the item"
            },
            "Coarse": [
                {
                    "action": "Destroys the item",
                    "chance": 0.5
                },
                {
                    "item": "Lantern",
                    "chance": 0.5
                }
            ],
            "1:1": "Flashlight",
            "Fine": "Radio",
            "Very Fine": [
                {
                    "item": "Flashbang Grenade",
                    "chance": 0.9
                },
                {
                    "item": "SCP-2176",
                    "chance": 0.1
                }
            ]
        }
    }
}
