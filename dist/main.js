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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n      // potat\n      // let spriteSize = [375, 500]\n      // let runningSprites = [[0, 0], [375, 0], [0, 0]];\n      // let dashSprites = [[0, 0], [375, 0], [0, 0]];\n      // let jumpSprite = [1125, 0];\n      // let grabSprite = [0, 500];\n\n      // megaman\n      // let spriteSize = [50, 50]\n      // let runningSprites = [[150, 0], [200, 0], [250, 0]];\n      // let dashSprites = [[350, 250], [400, 250], [450, 250]];\n      // let jumpSprite = [300, 150]\n\n      // bananacat\n      let spriteSize = [350, 400];\n      let runningSprites = [[-80, -150], [650,-120], [-80,-150]];\n      let dashSprites = [[-80, -150], [650, -120], [-80, -150]];\n      let flipSprites = [[900,40], [1200,-100], [1500,-100], [1780,-100], [2000, 0], [2300,-100], [2600,-100]]\n\n      this.ctx.clearRect(0, 0, 1000, 1000);\n\n      this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70);\n      this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130);\n\n      this.scaleGraduateImg();\n\n      if (startingPosition[0] >= 390 && startingPosition[0] <= 490) {\n        // grabbing diploma\n        if (startingPosition[0] <= 420) {\n          jumpHeight[0] = jumpHeight[0]; // + 11 for megaman, +5 for potat \n        } else {\n          jumpHeight[0] = jumpHeight[0]-10; // -5 for potat, -11 for megaman\n        }\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          // grabSprite[0],\n          // grabSprite[1], // potat\n          // jumpSprite[0], jumpSprite[1], // megaman\n          flipSprites[0][0], //banancat\n          flipSprites[0][1], //banancat\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1] - jumpHeight,\n          80,\n          80\n        );\n      } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n        if (startingPosition[0] <= 420) {\n          jumpHeight[0] = jumpHeight[0];\n        } else {\n          jumpHeight[0] = jumpHeight[0];\n        }\n\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n          flipSprites[4][0], //bananacat\n          flipSprites[4][1], //bananacat\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1] - jumpHeight,\n          80,\n          80\n        );\n      } else if (startingPosition[0] > 490) {\n        // after landing from diploma catch\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          dashSprites[i % dashSprites.length][0],\n          dashSprites[i % runningSprites.length][1],\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1],\n          80,\n          80\n        );\n      } else {\n        this.ctx.drawImage(\n          ceremony.bananacatSpriteSheet,\n          runningSprites[i % runningSprites.length][0],\n          runningSprites[i % runningSprites.length][1],\n          spriteSize[0],\n          spriteSize[1],\n          startingPosition[0],\n          startingPosition[1],\n          80,\n          80\n        );\n      }\n\n      if (startingPosition[0] < 440) {\n        this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n      } else if (startingPosition[0] === 440) {\n        ceremony.sound.play();\n      } else {\n        this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n      }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let flipSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2020_10_26__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2020-10-26 */ \"./src/students/2020-10-26.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2020_10_26__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2020-10-26.js":
/*!************************************!*\
  !*** ./src/students/2020-10-26.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\n    \"id\": 5643,\n    \"name\": \"Abubokorbin (Azim) Siddiki\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/32119aaf8841b0b667da06b63d4122a1?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5666,\n    \"name\": \"Ariel Taylor\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/87497a1a9c10eb8a98fe1271385af48a?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5630,\n    \"name\": \"Audrey Yun\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/fc0a05c66cd09d2ad93b0da213d9cb59?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5637,\n    \"name\": \"Christopher (Chris) Thorne\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/83bca6a45944414644e7bfd4c40b0f07?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5640,\n    \"name\": \"Daniel Ahn\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/dc00bade3ab519932e5eaa1818230a42?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5638,\n    \"name\": \"David Jhinku\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/11d882ae8b96c87b7d27f18fb3f9cd62?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5641,\n    \"name\": \"David (David/Dave) Suh\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/5cbde06cf9ed5cf626ce57dc1e0a9755?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5633,\n    \"name\": \"Domenico Daniel (Daniel) Giovinazzo\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/ce97c84cfb82ed28089b42d9d995e950?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5647,\n    \"name\": \"Gabriel (Gabe) Reiter\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d1e3fdf52bb6228d0c1b62ef9fe62a22?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5659,\n    \"name\": \"Galen Davis\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a466d1129a2158a3fa4b4a24b7b71a18?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5651,\n    \"name\": \"Glennis-Ivy (Gigi) Scarborough\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/77926118d0668056e98baad64c920f95?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5662,\n    \"name\": \"Henry Huang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/b7432a9ed56783c8f84793c864920059?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5535,\n    \"name\": \"Hojung Cha\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/759e80b93cad91f8e4da28322e0812e8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5645,\n    \"name\": \"James Park\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3d2c4159b8ab349ed557a3c17b90e2f8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5663,\n    \"name\": \"Jane Baik\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9032e4d1ba9f66fdacbd69d9b728d86f?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5649,\n    \"name\": \"Jose Mejia\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/246566c34f1e172bdfa93d4fc42b08d6?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5642,\n    \"name\": \"Jose Miralles\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/79bb2571d61549cd42e7060ff14054a6?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5653,\n    \"name\": \"Juan Sanchez\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d4a308a6a518257f9a1cfec06da8ead1?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5644,\n    \"name\": \"Jung Park\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/777d9f87f74f9df287ef0ff28935f88c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5632,\n    \"name\": \"Kaihua (Kai) Zhu\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/cf1237dafa640f33f4903343c86d9de6?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5635,\n    \"name\": \"Mansour Dione\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/428c965d3115fbef11828bb3b4da37cf?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5656,\n    \"name\": \"Mike Criollo\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2a3447e2f8574c9fcc9bdeb06a9a87db?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5652,\n    \"name\": \"Monica Liang Zheng\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/af4d6ce63879e5059cac52ce6f68782c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5661,\n    \"name\": \"Pastorales (Ralles) Liu\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/fb61a0c97f6aa56bb43fd705f303cbf8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5657,\n    \"name\": \"Paul Ramirez\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9e3f5446c7c0f0c67996cef9f5336b51?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4728,\n    \"name\": \"Philip Kor\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/728/medium/image.png?1604013811\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5636,\n    \"name\": \"Robert (Bert) Hill\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/717fc4b87e994fe900207375a40908c9?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5660,\n    \"name\": \"Soobin Lim\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/26b91ddcb6d5cdc493f19daf89ed024c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5648,\n    \"name\": \"Stephen Yang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3ebcbea7cb1e0f8d0843b49f79672477?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5483,\n    \"name\": \"Stephen Yim\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8fcffb77b8f2cc06834cf74c73ae3110?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5664,\n    \"name\": \"Sukhdip Rai\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/caa74fb919a00b9b82e082e7a4462a08?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5631,\n    \"name\": \"Tasnim Saiduzzaman\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/32be6125c28d857444860855351a99b8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5650,\n    \"name\": \"William (Paul) Stonebraker\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/120519c0151cd87e2bafb062096f28d3?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5639,\n    \"name\": \"Yehudah Rosenberg\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/e9e1b42801a17adbdf11730b1ab51b09?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5634,\n    \"name\": \"Zihao Li\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/bcc329634b621b3048f674d63493fbef?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n]);\n\n//# sourceURL=webpack:///./src/students/2020-10-26.js?");

/***/ })

/******/ });