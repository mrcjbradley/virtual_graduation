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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2021_02__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2021-02 */ \"./src/students/2021-02.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"canvas\");\n  let nextStudentButton = document.getElementById(\"next-student\");\n  let ctx = canvas.getContext(\"2d\");\n  let ol1 = document.getElementById(\"ol1\");\n  let ol2 = document.getElementById(\"ol2\");\n  let punch = document.getElementById(\"punch\");\n  let submitButton = document.querySelector(\"#current-student-button\");\n\n  let graduates = [];\n  _students_2021_02__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n    let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx, student.name, student.imageUrl);\n    graduates.push(graduate);\n  });\n\n  let mid = Math.floor(graduates.length / 2);\n  ol2.start = mid + 1;\n\n  for (let i = 0; i < mid; i++) {\n    let listItem = document.createElement(\"li\");\n    listItem.textContent = graduates[i].name;\n    ol1.appendChild(listItem);\n  }\n\n  for (let i = mid; i < graduates.length; i++) {\n    let listItem = document.createElement(\"li\");\n    listItem.textContent = graduates[i].name;\n    ol2.appendChild(listItem);\n  }\n\n  let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates);\n  ceremony.sound = punch; // give sound to ceremony instance\n\n  submitButton.addEventListener(\"click\", () => {\n    let input = document.querySelector(\"input\");\n    ceremony.currentStudent = parseInt(input.value) - 1;\n  });\n\n  ceremony.constructStage();\n\n  nextStudentButton.addEventListener(\"click\", (e) => {\n    ceremony.nextStudentMoves(e.target);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2021-02.js":
/*!*********************************!*\
  !*** ./src/students/2021-02.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\n    id: 5889,\n    name: \"Abir Mahamud\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/1c369c36788af1c0366a2162483fe28a?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6175,\n    name: \"Alexander (Alex) Kerpelman\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/40aa8448d10b08ea83431320e141c620?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6165,\n    name: \"Andrew Kihs\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/d31694d525abd60e9db0f49bde26b076?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 4692,\n    name: \"Angela Turi\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/bacca63e31865793a42fd5cbc61cb77c?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6036,\n    name: \"Anug Saha\",\n    imageUrl:\n      \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/036/medium/Anug_Saha.JPG?1612372395\",\n    occup: \"student\",\n  },\n  {\n    id: 6166,\n    name: \"Christopher (Chris) Joo\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/0f27ed73ecc113da85c3be542c25b93d?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6176,\n    name: \"Christopher (Chris) Sweeting\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/c41d0fb0491df13e71ec3072e1d43833?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6174,\n    name: \"Collin Winner\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/2142a4415587995a9ad2e420a2352a4c?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6187,\n    name: \"Daniel Cho\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/e43be2b858fb8c4f288607e6ab6b9284?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6161,\n    name: \"Daniel Wu\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/1c927ebd49e03fd5728e848bf3ed6984?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6160,\n    name: \"Evan Leon\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/a8cb87f5b5cea2d6613e877c02261c11?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6169,\n    name: \"Frederick (Freddy) Diengott\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/32c49eb44bfa9f17980db26665d2822a?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6170,\n    name: \"Jack Cusick\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/7ddd2642833ae7755aad62bdcb8cfd88?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 5903,\n    name: \"Jae-Wook (Jae) Lim\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/f35eb898bb57ecb96c9f9823a21bc16e?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6184,\n    name: \"Jessica Uphoff\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/38c6812321137c74789cd95f99e2a54c?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6185,\n    name: \"Joseph Sipiorski\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/d9fc711c810a2227143ce1c5a0e59b08?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6162,\n    name: \"Jungyoun (Julia) Kim\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/2ade7906049470eb589000396b36ad31?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 5923,\n    name: \"Michelle Roos\",\n    imageUrl:\n      \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/923/medium/Michelle_roos.jpg?1610668139\",\n    occup: \"student\",\n  },\n  {\n    id: 6168,\n    name: \"Min Wang\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/dfb908c73d5e916614efc554cb9cee42?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6180,\n    name: \"Mohammad Taher\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/5c3894f9bac9495ff7a2a40b65e5d44e?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6179,\n    name: \"Philip Lowe\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/0a983927f7e6d95ab8c64a135843da8f?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6164,\n    name: \"Robert (Robby) Balistreri\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/0cf69ad3903da2cc0c803ae6d01ea705?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6193,\n    name: \"Samantha (Sam) Lilly\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/b1deb4a1bd1d1165b0c6ed59e1bc2f49?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6167,\n    name: \"Sebastian Sanchez\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/a9e0d85866542fdcf9efd19fba50186a?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6172,\n    name: \"Shen (Sam) Qi\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/20d4c3f634f0a7103f12838ee6b7810d?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 6163,\n    name: \"Syldys Khomushku\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/68b7683f8a929ca9c6ed8e79263b2121?secure=true&size=300\",\n    occup: \"student\",\n  },\n  {\n    id: 5907,\n    name: \"Tahj Harris\",\n    imageUrl:\n      \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/907/medium/Tahj_Harris.jpg?1610668248\",\n    occup: \"student\",\n  },\n  {\n    id: 6177,\n    name: \"Timothy (Tim) Fraczak\",\n    imageUrl:\n      \"https://secure.gravatar.com/avatar/e3b9e1847532ddd48afb402276e54d8e?secure=true&size=300\",\n    occup: \"student\",\n  },\n]);\n\n\n//# sourceURL=webpack:///./src/students/2021-02.js?");

/***/ })

/******/ });