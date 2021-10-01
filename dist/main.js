/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.megamanSpriteSheet = new Image();\n        this.bananacatSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/potat-sprite-sheet.png\";\n        this.megamanSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.bananacatSpriteSheet.src = \"./dist/assets/bananacat.png\"\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.stage.src = './dist/assets/new_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        // potat below\n        // let waitingSprite = [750, 0];\n        // let spriteSize = [375, 500]\n\n        // megaman below\n        // let waitingSprite = [100, 100];\n        // let spriteSize = [50, 50]\n\n        //bananacat\n        let waitingSprite = [-80, -150]\n        let spriteSize = [350, 400];\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            // this.ctx.drawImage(this.potatSpriteSheet,\n            this.ctx.drawImage(this.bananacatSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n      // potat\n      // let spriteSize = [375, 500]\n      // let runningSprites = [[0, 0], [375, 0], [0, 0]];\n      // let dashSprites = [[0, 0], [375, 0], [0, 0]];\n      // let jumpSprite = [1125, 0];\n      // let grabSprite = [0, 500];\n\n      // megaman\n      // let spriteSize = [50, 50]\n      // let runningSprites = [[150, 0], [200, 0], [250, 0]];\n      // let dashSprites = [[350, 250], [400, 250], [450, 250]];\n      // let jumpSprite = [300, 150]\n\n      // bananacat\n      let spriteSize = [350, 400];\n      let runningSprites = [[-80, -150], [650,-120], [-80,-150]];\n      let dashSprites = [[-80, -150], [650, -120], [-80, -150]];\n      let flipSprites = [[900,40], [1200,-100], [1500,-100], [1780,-100], [2000, 0], [2300,-100], [2600,-100]]\n\n      this.ctx.clearRect(0, 0, 1000, 1000);\n\n      this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70);\n      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130);\n\n      // this.scaleGraduateImg();\n\n      if (startingPosition[0] >= 390 && startingPosition[0] <= 490) {\n        // grabbing diploma\n        if (startingPosition[0] <= 420) {\n          jumpHeight[0] = jumpHeight[0]; // + 11 for megaman, +5 for potat \n        } else {\n          jumpHeight[0] = jumpHeight[0]-10; // -5 for potat, -11 for megaman\n        }\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          // grabSprite[0],\n          // grabSprite[1], // potat\n          // jumpSprite[0], jumpSprite[1], // megaman\n          flipSprites[0][0], //banancat\n          flipSprites[0][1], //banancat\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1] - jumpHeight,\n          80,\n          80\n        );\n      } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n        if (startingPosition[0] <= 420) {\n          jumpHeight[0] = jumpHeight[0];\n        } else {\n          jumpHeight[0] = jumpHeight[0];\n        }\n\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n          flipSprites[4][0], //bananacat\n          flipSprites[4][1], //bananacat\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1] - jumpHeight,\n          80,\n          80\n        );\n      } else if (startingPosition[0] > 490) {\n        // after landing from diploma catch\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          dashSprites[i % dashSprites.length][0],\n          dashSprites[i % runningSprites.length][1],\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1],\n          80,\n          80\n        );\n      } else {\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          runningSprites[i % runningSprites.length][0],\n          runningSprites[i % runningSprites.length][1],\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1],\n          80,\n          80\n        );\n      }\n\n      if (startingPosition[0] < 440) {\n        this.ctx.drawImage(ceremony.diploma, 440, 235, 40, 40); //draw diploma\n      } else if (startingPosition[0] === 440) {\n        ceremony.sound.play();}\n      // } else {\n      //   this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n      // }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let flipSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        let studentImg = document.querySelector(\"#stud-img\")\n        studentName.innerHTML = this.name\n        studentImg.src = this.img_url.src\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                // studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    // scaleGraduateImg() {\n    //     let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n    //     let x = 450 - ((this.img_url.width / 2) * scale);\n    //     let y = 140 - ((this.img_url.height / 2) * scale);\n    //     this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    // }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2021_06__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2021-06 */ \"./src/students/2021-06.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"canvas\");\n  let nextStudentButton = document.getElementById(\"next-student\");\n  let ctx = canvas.getContext(\"2d\");\n  let ol1 = document.getElementById(\"ol1\");\n  let ol2 = document.getElementById(\"ol2\");\n  let punch = document.getElementById(\"punch\");\n  let submitButton = document.querySelector(\"#current-student-button\");\n\n  let graduates = [];\n  _students_2021_06__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n    let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx, student.name, student.imageUrl);\n    graduates.push(graduate);\n  });\n\n  let mid = Math.floor(graduates.length / 2);\n  ol2.start = mid + 1;\n\n  for (let i = 0; i < mid; i++) {\n    let listItem = document.createElement(\"li\");\n    listItem.textContent = graduates[i].name;\n    ol1.appendChild(listItem);\n  }\n\n  for (let i = mid; i < graduates.length; i++) {\n    let listItem = document.createElement(\"li\");\n    listItem.textContent = graduates[i].name;\n    ol2.appendChild(listItem);\n  }\n\n  let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates);\n  ceremony.sound = punch; // give sound to ceremony instance\n\n  submitButton.addEventListener(\"click\", () => {\n    let input = document.querySelector(\"input\");\n    ceremony.currentStudent = parseInt(input.value) - 1;\n  });\n\n  ceremony.constructStage();\n\n  nextStudentButton.addEventListener(\"click\", (e) => {\n    ceremony.nextStudentMoves(e.target);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2021-06.js":
/*!*********************************!*\
  !*** ./src/students/2021-06.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\n    \"id\": 6570,\n    \"name\": \"Aiden Chang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/24cc4c6671c9cbcfbb34e766fcc46e73?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6575,\n    \"name\": \"Alexander (Alex) Lam\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/83cb1e5a7343922b6d6e335ec2d8b995?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5033,\n    \"name\": \"Amin Babar\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/908436dad8a9a0272f2f8c23e9842ed7?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6619,\n    \"name\": \"Anthony Huang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/03b040998c0032be8d6407c71b01357c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6580,\n    \"name\": \"Carly Gradeff\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3333b5644dc1bffea803797092b974ff?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6554,\n    \"name\": \"Chi Wing (Winnie) Ng\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/f4571dda1d1cef8bf28c096cb2819636?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6572,\n    \"name\": \"Christopher (Chris) Chung\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/573ebc7484d0f139b8ed073a07bc7fad?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6564,\n    \"name\": \"Christopher (Chris) Vidic\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/584733981d43eec6f978ecce62eb0e7c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6556,\n    \"name\": \"Cindy Jiang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/6a50d4e2bea546ce4897c038814cb117?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6576,\n    \"name\": \"Daniel Mechenko\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/74a8b47d98ea992a8675c38f71178fcd?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6553,\n    \"name\": \"David (Dave) Woolner\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d54cf34ed3ff4aed9c493969f0baee24?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6625,\n    \"name\": \"Dustin Adler\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/0579c9bd1caedfb74f781ec9d8c25bdf?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6563,\n    \"name\": \"Edward (Eddy) Marshall\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/04dba522bfd15a5a572ccca0d58f9343?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6560,\n    \"name\": \"Elsa Caballero\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/5dfc40a978aa84174c7de34c84181f64?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6558,\n    \"name\": \"Evan Czako\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/c2c7fd124572a65e7893c5b4fa9946d8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6566,\n    \"name\": \"Hansaem Kim\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2a47c09ac336ae78c3fe111b47328976?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6404,\n    \"name\": \"James Chen\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/fc3faab6d9c27e92f002df98710fab6c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6569,\n    \"name\": \"Jonathan Wong\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/92359e84acf14bcf8079960f1a283928?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6552,\n    \"name\": \"Joseph (Joe) Felicidario\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d08011d2e4baf3292eb529e27806946f?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6571,\n    \"name\": \"Julian Kang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/c1af8b217cea3ac0714697af6fa7ff28?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6567,\n    \"name\": \"Kevin Lin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/0386e2a60d55c91edf6f22f046051503?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6559,\n    \"name\": \"Kira Porter\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d09f863f507c2ad97bb5f16c4cbaf3bb?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6557,\n    \"name\": \"Long Chen\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/ff9a436212303bcc3c613f74fe06d07f?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6624,\n    \"name\": \"Michael (Mike) Amicucci\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d7485d0cd1fc9c2b55354cabc2c413ee?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6577,\n    \"name\": \"Mordechai (Mike) Schnall\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/055425f16c2f298fdbf056130e8bf6c6?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6562,\n    \"name\": \"Omar Luqman\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d281d295787114a1d6f203ef5a93c0f3?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6417,\n    \"name\": \"Oussama Elarabi\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d02b288f67460d83a63b26293a9b031a?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6620,\n    \"name\": \"Quinn Mullaney\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/265133ead06e5445365ee7ecd72d69ef?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6574,\n    \"name\": \"Richard Leung\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/7ca783ba8055f59cd53f71158e72d95c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6581,\n    \"name\": \"Samuel (Sam) Jeon\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/251fd2b1ca15008c348bc41e0120bb43?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6582,\n    \"name\": \"Simon Puno\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/aabfc1246dfefdd6c53cba70974a4a2a?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6411,\n    \"name\": \"Sunny Mei\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/aa7c78036147a3e26a60efaf92ef7d5c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6621,\n    \"name\": \"Wajahat (Waj) Shoukat\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/f50eeff06eb714f3ab77a59e41fb9369?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6561,\n    \"name\": \"Connor Germain\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/751106f4f1b8cc160663a8af72659465?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6583,\n    \"name\": \"David Espinosa\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3d4a42d80debba165638427301f484df?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6408,\n    \"name\": \"David Murati\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/dd2b6fd2a47f8630696d4df80c8ebaa4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6584,\n    \"name\": \"Deep Biswas\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3352ff1496fe052aa3ec859d9737a8fa?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6579,\n    \"name\": \"Feifei Yang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/09e4a5f03ee58181c2ac1613379705e7?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6623,\n    \"name\": \"Hien Nguyen\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a91347c10a547c70c0b9cf62d28e8361?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6565,\n    \"name\": \"Jim Nardi\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/184c92dd03e6837da20f839536a7b5e1?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6430,\n    \"name\": \"Johnny Villavicencio\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/db910d04c0a8a32603e3b47c02677347?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6578,\n    \"name\": \"Minh Nguyen\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/6712585eb77fe51bfb3d16918efc3422?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6622,\n    \"name\": \"Narayan Connor\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/01cbba8d1ccbdff64d425a8d78644e7b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6586,\n    \"name\": \"Paul Li\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/6e437b17ce4873c409015454af6fe991?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6626,\n    \"name\": \"Pierre Navarin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/cd2b0db841fb9465e27aff4f138fef2e?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6573,\n    \"name\": \"Shahdi Qurashi\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/90f6b739560c2d47bbaa9b6ca93abe4b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6585,\n    \"name\": \"Sydney Parsons\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/f9fe38748f7988acd5f0f57214d74458?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 6555,\n    \"name\": \"Yehuda Goldschein\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/628f7c0eacc42bc967ec2fe9156dda10?secure=true&size=300\",\n    \"occup\": \"student\"\n  }\n]);\n\n//# sourceURL=webpack:///./src/students/2021-06.js?");

/***/ })

/******/ });