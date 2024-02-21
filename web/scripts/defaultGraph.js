export const defaultGraph = {
	"last_node_id": 14,
	"last_link_id": 11,
	"nodes": [
	  {
		"id": 7,
		"type": "CLIPTextEncode",
		"pos": [
		  440,
		  360
		],
		"size": {
		  "0": 370,
		  "1": 160
		},
		"flags": {},
		"order": 5,
		"mode": 0,
		"inputs": [
		  {
			"name": "clip",
			"type": "CLIP",
			"link": 5
		  }
		],
		"outputs": [
		  {
			"name": "CONDITIONING",
			"type": "CONDITIONING",
			"links": [
			  6
			],
			"slot_index": 0
		  }
		],
		"title": "CLIP Text Encode (Negative)",
		"properties": {
		  "Node name for S&R": "CLIPTextEncode"
		},
		"widgets_values": [
		  "blurry, illustration, toy, clay, low quality, flag, nasa, mission patch"
		],
		"color": "#322",
		"bgcolor": "#533"
	  },
	  {
		"id": 6,
		"type": "CLIPTextEncode",
		"pos": [
		  440,
		  140
		],
		"size": {
		  "0": 370,
		  "1": 160
		},
		"flags": {},
		"order": 4,
		"mode": 0,
		"inputs": [
		  {
			"name": "clip",
			"type": "CLIP",
			"link": 3
		  }
		],
		"outputs": [
		  {
			"name": "CONDITIONING",
			"type": "CONDITIONING",
			"links": [
			  4
			],
			"slot_index": 0
		  }
		],
		"title": "CLIP Text Encode (Positive)",
		"properties": {
		  "Node name for S&R": "CLIPTextEncode"
		},
		"widgets_values": [
		  "a photo of an anthropomorphic fox wearing a spacesuit inside a sci-fi spaceship\n\ncinematic, dramatic lighting, high resolution, detailed, 4k"
		],
		"color": "#232",
		"bgcolor": "#353"
	  },
	  {
		"id": 8,
		"type": "VAEDecode",
		"pos": [
		  1240,
		  280
		],
		"size": {
		  "0": 140,
		  "1": 60
		},
		"flags": {},
		"order": 7,
		"mode": 0,
		"inputs": [
		  {
			"name": "samples",
			"type": "LATENT",
			"link": 7
		  },
		  {
			"name": "vae",
			"type": "VAE",
			"link": 11
		  }
		],
		"outputs": [
		  {
			"name": "IMAGE",
			"type": "IMAGE",
			"links": [
			  9
			],
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "VAEDecode"
		}
	  },
	  {
		"id": 9,
		"type": "SaveImage",
		"pos": [
		  1430,
		  280
		],
		"size": {
		  "0": 410,
		  "1": 460
		},
		"flags": {},
		"order": 8,
		"mode": 0,
		"inputs": [
		  {
			"name": "images",
			"type": "IMAGE",
			"link": 9
		  }
		],
		"properties": {},
		"widgets_values": [
		  "Result"
		]
	  },
	  {
		"id": 5,
		"type": "EmptyLatentImage",
		"pos": [
		  590,
		  580
		],
		"size": {
		  "0": 220,
		  "1": 106
		},
		"flags": {},
		"order": 0,
		"mode": 0,
		"outputs": [
		  {
			"name": "LATENT",
			"type": "LATENT",
			"links": [
			  2
			],
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "EmptyLatentImage"
		},
		"widgets_values": [
		  512,
		  512,
		  1
		]
	  },
	  {
		"id": 3,
		"type": "KSampler",
		"pos": [
		  890,
		  280
		],
		"size": {
		  "0": 300,
		  "1": 262
		},
		"flags": {},
		"order": 6,
		"mode": 0,
		"inputs": [
		  {
			"name": "model",
			"type": "MODEL",
			"link": 1
		  },
		  {
			"name": "positive",
			"type": "CONDITIONING",
			"link": 4
		  },
		  {
			"name": "negative",
			"type": "CONDITIONING",
			"link": 6
		  },
		  {
			"name": "latent_image",
			"type": "LATENT",
			"link": 2
		  }
		],
		"outputs": [
		  {
			"name": "LATENT",
			"type": "LATENT",
			"links": [
			  7
			],
			"slot_index": 0
		  }
		],
		"properties": {
		  "Node name for S&R": "KSampler"
		},
		"widgets_values": [
		  8,
		  "fixed",
		  25,
		  6.5,
		  "dpmpp_2m",
		  "karras",
		  1
		]
	  },
	  {
		"id": 11,
		"type": "Note",
		"pos": [
		  20,
		  50
		],
		"size": {
		  "0": 260,
		  "1": 140
		},
		"flags": {},
		"order": 1,
		"mode": 0,
		"properties": {
		  "text": ""
		},
		"widgets_values": [
		  "Basic 1.x/2.x workflow\n======================\n\nUse this workflow only if you are sure the base checkpoint embeds a good quality VAE, otherwise check the \"ext_vae\" workflow."
		],
		"color": "#432",
		"bgcolor": "#653"
	  },
	  {
		"id": 12,
		"type": "Note",
		"pos": [
		  900,
		  -20
		],
		"size": {
		  "0": 270,
		  "1": 250
		},
		"flags": {},
		"order": 2,
		"mode": 0,
		"properties": {
		  "text": ""
		},
		"widgets_values": [
		  "KSampler\n========\n\nDPMPP_2M / KARRAS is generally a good overall performer and a safe bet but experiment with others!\n\nLess \"predictable\" samplers are those ending with _SDE and _ANCESTRAL.\n\nIf results are underwhelming increase the number of steps (+5 at a time).\n\nIf the image looks over-saturated lower the CFG value."
		],
		"color": "#432",
		"bgcolor": "#653"
	  },
	  {
		"id": 4,
		"type": "CheckpointLoaderSimple",
		"pos": [
		  30,
		  280
		],
		"size": {
		  "0": 328.5366516113281,
		  "1": 98
		},
		"flags": {},
		"order": 3,
		"mode": 0,
		"outputs": [
		  {
			"name": "MODEL",
			"type": "MODEL",
			"links": [
			  1
			],
			"slot_index": 0
		  },
		  {
			"name": "CLIP",
			"type": "CLIP",
			"links": [
			  3,
			  5
			],
			"slot_index": 1
		  },
		  {
			"name": "VAE",
			"type": "VAE",
			"links": [
			  11
			],
			"slot_index": 2
		  }
		],
		"properties": {
		  "Node name for S&R": "CheckpointLoaderSimple"
		},
		"widgets_values": [
		  "dreamshaper_8.safetensors"
		]
	  }
	],
	"links": [
	  [
		1,
		4,
		0,
		3,
		0,
		"MODEL"
	  ],
	  [
		2,
		5,
		0,
		3,
		3,
		"LATENT"
	  ],
	  [
		3,
		4,
		1,
		6,
		0,
		"CLIP"
	  ],
	  [
		4,
		6,
		0,
		3,
		1,
		"CONDITIONING"
	  ],
	  [
		5,
		4,
		1,
		7,
		0,
		"CLIP"
	  ],
	  [
		6,
		7,
		0,
		3,
		2,
		"CONDITIONING"
	  ],
	  [
		7,
		3,
		0,
		8,
		0,
		"LATENT"
	  ],
	  [
		9,
		8,
		0,
		9,
		0,
		"IMAGE"
	  ],
	  [
		11,
		4,
		2,
		8,
		1,
		"VAE"
	  ]
	],
	"groups": [],
	"config": {},
	"extra": {},
	"version": 0.4
  };
