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
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.megamanSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/potat-sprite-sheet.png\";\n        this.megamanSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.stage.src = './dist/assets/new_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        // potat below\n        // let waitingSprite = [750, 0];\n        // let spriteSize = [375, 500]\n\n        // megaman below\n        let waitingSprite = [100, 100];\n        let spriteSize = [50, 50]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            // this.ctx.drawImage(this.potatSpriteSheet,\n            this.ctx.drawImage(this.megamanSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, superlative, img_url) {\n        this.ctx = ctx;\n        this.name = name;\n        this.superlative = superlative;\n        this.img_url = new Image();\n        this.img_url.src = img_url;\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n        // potat\n        // let spriteSize = [375, 500]\n        // let runningSprites = [[0, 0], [375, 0], [0, 0]];\n        // let dashSprites = [[0, 0], [375, 0], [0, 0]];\n        // let jumpSprite = [1125, 0];\n        let grabSprite = [0, 500];\n\n        // megaman\n        let spriteSize = [50, 50]\n        let runningSprites = [[150, 0], [200, 0], [250, 0]];\n        let dashSprites = [[350, 250], [400, 250], [450, 250]];\n        let jumpSprite = [300, 150]\n\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        this.scaleGraduateImg();\n\n        if (startingPosition[0] >= 390 && startingPosition[0] <= 490) { // grabbing diploma\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11; // +5 for potat (instead of 11)\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11; // -5 for potat\n            }\n\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                // grabSprite[0], grabSprite[1], // potat\n                jumpSprite[0], jumpSprite[1], // megaman\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        } else {\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245];\n        let jumpSprite = [300, 100]; //might get to use this later\n        let studentName = document.querySelector(\"#student\");\n        let superlative = document.querySelector(\"#superlative\")\n        studentName.innerHTML = this.name;\n        superlative.innerHTML = this.superlative;\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 15;\n            i++;\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight);\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval);\n                this.ctx.clearRect(0, 0, 1000, 1000);\n                ceremony.constructStage();\n                button.disabled = false;\n                // studentName.innerHTML  = \"\";\n            }\n        }, 100);\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2020_06_01__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2020-06-01 */ \"./src/students/2020-06-01.js\");\n/* harmony import */ var _superlatives_2020_06_01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superlatives/2020-06-01 */ \"./src/superlatives/2020-06-01.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\");\n    let nextStudentButton = document.getElementById(\"next-student\");\n    let ctx = canvas.getContext(\"2d\");\n    let ol1 = document.getElementById(\"ol1\");\n    let ol2 = document.getElementById(\"ol2\");\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\");\n\n    let graduates = [] \n    _students_2020_06_01__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student, i) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name, _superlatives_2020_06_01__WEBPACK_IMPORTED_MODULE_3__[\"default\"][i].body, student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2020-06-01.js":
/*!************************************!*\
  !*** ./src/students/2020-06-01.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 5085,\n    \"name\": \"Aatef Baransy\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/085/medium/Aatef_Baransy.JPG?1592346723\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5086,\n    \"name\": \"Adam Klimmek\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/086/medium/adam_klimmek.png?1592346623\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5083,\n    \"name\": \"Adrian Apodaca\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/083/medium/adrian_apodaca.jpg?1598058017\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4946,\n    \"name\": \"Ahmed El Mahallawy\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9ec703326ae889a1f963b619cc0ebfa0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5088,\n    \"name\": \"Albert Chen\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/088/medium/albert_chen.jpeg?1592346876\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5087,\n    \"name\": \"Alex Choy\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/35bc06ee8e10857a00c31ff4b0d1e081?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5111,\n    \"name\": \"Alexander Mak\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/111/medium/alex_mak.jpg?1592346852\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5101,\n    \"name\": \"Anya Hirota\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/101/medium/anya_hirota.jpg?1592346781\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4645,\n    \"name\": \"Ayce Lacap\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/645/medium/ayce.png?1592346915\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5118,\n    \"name\": \"Camille Fogg\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/118/medium/camille_fogg.jpg?1592346920\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5115,\n    \"name\": \"Clint Chu\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/115/medium/Clint_Chu.JPG?1592347160\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5103,\n    \"name\": \"Daniel Gu\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/103/medium/Daniel_Gu.jpg?1598058048\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5119,\n    \"name\": \"Elijah Dove\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/119/medium/dove_profile.jpeg?1592346987\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5098,\n    \"name\": \"Henry Han\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/098/medium/henry_han.jpg?1598058088\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4842,\n    \"name\": \"Israel Gonzalez\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/842/medium/Israel_Gonzalez.jpg?1592876282\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5112,\n    \"name\": \"Jack Fragassi\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/7db6cd269d3660696d993ab03eeb6d92?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5099,\n    \"name\": \"Jacob Prall\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/099/medium/photo.jpg?1592346545\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5123,\n    \"name\": \"Jaron Lee\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/123/medium/jaron_lee.jpeg?1592346932\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5091,\n    \"name\": \"Jordan Phan\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/091/medium/Jordan_Phan.jpg?1592349475\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5105,\n    \"name\": \"Kenneth Guan\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2308a88a9caa412d45cf352d40f7a693?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5090,\n    \"name\": \"Kevin Besenio\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/81b837875ab394bfcf4c7e514a29cf6f?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5097,\n    \"name\": \"Kevin Ross\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/097/medium/kevin_ross_.jpg?1592347091\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5104,\n    \"name\": \"Kevin Zhang\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/104/medium/kevin_zhang.jpg?1592349528\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5100,\n    \"name\": \"Kodi Shiflett\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/100/medium/Kodi_Shiflett.JPG?1592346991\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5095,\n    \"name\": \"Leah De La Pena\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/6f4b9e21d1483122b5306cf56fc8fe3a?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5121,\n    \"name\": \"Mengjia (Maggie) Yao\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/121/medium/Maggie_Yao.jpg?1598055279\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5031,\n    \"name\": \"Nathan (Nate) Gallagher\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/c6c363ed8a161371ba9f272d2f12a7dd?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5089,\n    \"name\": \"Nicholas (Nick) Sercel\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/bbd80ab8aa605f2cc3bd5c8fef916ec8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5084,\n    \"name\": \"Nicole (Nyki) Wiehe\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/084/medium/nicole_nyki_wiehe.jpg?1592347147\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5109,\n    \"name\": \"Philip Tynan\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/109/medium/Philip_Tynan.jpg?1592346925\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5081,\n    \"name\": \"Phillip (Phil) Gresham\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/081/medium/Phil_Gresham.jpeg?1592347335\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5127,\n    \"name\": \"Sean Scott\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/995f01f44d3281bdbb958087293947f3?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4643,\n    \"name\": \"Shanelle Valencia\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/643/medium/Shanelle_Valencia.jpg?1592346821\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5107,\n    \"name\": \"Solomon Dove\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/107/medium/solomon_dove.jpg?1592347047\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5093,\n    \"name\": \"Suliz Basnet\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/093/medium/suliz_basnet.jpg?1592347032\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5094,\n    \"name\": \"Thomas Grega\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/094/medium/thomas_grega.jpg?1592347096\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5096,\n    \"name\": \"Tim Harding\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a98dce4bab38642dd3966666649c406b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5092,\n    \"name\": \"Tingxiao (Charlotte) Sun\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/092/medium/charlotteSun.JPG?1592347259\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5082,\n    \"name\": \"Will Offit\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/082/medium/Will_Offit.jpg?1592348071\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5106,\n    \"name\": \"Winfred Huang\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/106/medium/Winfred_Huang.jpg?1592348147\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5120,\n    \"name\": \"Xiao Yu\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a550ffecff6e5ecb91b7e928e54c685e?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5117,\n    \"name\": \"Ying-Huan (Emily) Chen\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/117/medium/emily_chen_new.png?1598058331\",\n    \"occup\": \"student\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/2020-06-01.js?");

/***/ }),

/***/ "./src/superlatives/2020-06-01.js":
/*!****************************************!*\
  !*** ./src/superlatives/2020-06-01.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst superlatives = [\n  {\n    \"name\": \"Aatef Baransy\",\n    \"body\": \"Most likely to rank on LeetCode\"\n  },\n  {\n    \"name\": \"Adam Klimmek\",\n    \"body\": \"Most likely to be calm in front of a grizzly\"\n  },\n  {\n    \"name\": \"Adrian Apodaca\",\n    \"body\": \"Most likely to tell a joke and immediately apologize\"\n  },\n  {\n    \"name\": \"Ahmed El Mahallawy\",\n    \"body\": \"Most likely to have a cat butt block the camera\"\n  },\n  {\n    \"name\": \"Albert Chen\",\n    \"body\": \"Most likely to be touching his hair\"\n  },\n  {\n    \"name\": \"Alex Choy\",\n    \"body\": \"Most likely to use his wall as a green screen\"\n  },\n  {\n    \"name\": \"Alexander Mak\",\n    \"body\": \"Most likely to flex his PC specs\"\n  },\n  {\n    \"name\": \"Anya Hirota\",\n    \"body\": \"Most likely to be drinking a LaCroix\"\n  },\n  {\n    \"name\": \"Ayce Lacap\",\n    \"body\": \"Most likely to forget to turn mic off during lecture\"\n  },\n  {\n    \"name\": \"Camille Fogg\",\n    \"body\": \"Most likely to break something and put it back together\"\n  },\n  {\n    \"name\": \"Clint Chu\",\n    \"body\": \"Most likely to be hooked on hooks\"\n  },\n  {\n    \"name\": \"Daniel Gu\",\n    \"body\": \"Most likely to walk around his room during lecture\"\n  },\n  {\n    \"name\": \"Elijah Dove\",\n    \"body\": \"Most likely to have a fake virtual background\"\n  },\n  {\n    \"name\": \"Henry Han\",\n    \"body\": \"Most likely to end up married to Irene from Red Velvet\"\n  },\n  {\n    \"name\": \"Israel Gonzalez\",\n    \"body\": \"Most likely to buy zoom tickets to watch the Warriors\"\n  },\n  {\n    \"name\": \"Jack Fragassi\",\n    \"body\": \"Most likely to be laying on the couch\"\n  },\n  {\n    \"name\": \"Jacob Prall\",\n    \"body\": \"2nd most likely to be asleep in lecture\"\n  },\n  {\n    \"name\": \"Jaron Lee\",\n    \"body\": \"Most likely to start a YouTube channel covering songs\"\n  },\n  {\n    \"name\": \"Jordan Phan\",\n    \"body\": \"Best Artist / Most handsomest\"\n  },\n  {\n    \"name\": \"Kenneth Guan\",\n    \"body\": \"Most Friendliest\"\n  },\n  {\n    \"name\": \"Kevin Besenio\",\n    \"body\": \"Most likely to have an Elon Musk shrine\"\n  },\n  {\n    \"name\": \"Kevin Ross\",\n    \"body\": \"Most likely to panic and then kill it\"\n  },\n  {\n    \"name\": \"Kevin Zhang\",\n    \"body\": \"Best at keeping cool, calm, and collected\"\n  },\n  {\n    \"name\": \"Kodi Shiflett\",\n    \"body\": \"Most likely to work from 52 different countries in one year\"\n  },\n  {\n    \"name\": \"Leah De La Pena\",\n    \"body\": \"Biggest homie\"\n  },\n  {\n    \"name\": \"Mengjia (Maggie) Yao\",\n    \"body\": \"Stealthiest skills\"\n  },\n  {\n    \"name\": \"Nathan (Nate) Gallagher\",\n    \"body\": \"Most likely to do voice overs\"\n  },\n  {\n    \"name\": \"Nicholas (Nick) Sercel\",\n    \"body\": \"Most likely to lead his company's weekend WoW raids\"\n  },\n  {\n    \"name\": \"Nicole (Nyki) Wiehe\",\n    \"body\": \"Most likely to have a whole lemon in her water\"\n  },\n  {\n    \"name\": \"Philip Tynan\",\n    \"body\": \"Most likely to have a huge beanie collection\"\n  },\n  {\n    \"name\": \"Phillip (Phil) Gresham\",\n    \"body\": \"Most likely to be a CEO and not treat his employees like shit\"\n  },\n  {\n    \"name\": \"Sean Scott\",\n    \"body\": \"Most likely to just disappear mid conversation\"\n  },\n  {\n    \"name\": \"Shanelle Valencia\",\n    \"body\": \"Most likely to be eating chips during class\"\n  },\n  {\n    \"name\": \"Solomon Dove\",\n    \"body\": \"Most likely to appear on the cover of Wired\"\n  },\n  {\n    \"name\": \"Suliz Basnet\",\n    \"body\": \"Best at turning any negative into a positive :)\"\n  },\n  {\n    \"name\": \"Thomas Grega\",\n    \"body\": \"Most likely to discover a new algorithm\"\n  },\n  {\n    \"name\": \"Tim Harding\",\n    \"body\": \"Best mustache\"\n  },\n  {\n    \"name\": \"Tingxiao (Charlotte) Sun\",\n    \"body\": \"Best Zoom chef\"\n  },\n  {\n    \"name\": \"Will Offit\",\n    \"body\": \"Best chat jokes\"\n  },\n  {\n    \"name\": \"Winfred Huang\",\n    \"body\": \"Best Dino Race announcer\"\n  },\n  {\n    \"name\": \"Xiao Yu\",\n    \"body\": \"Most likely to be a great friend\"\n  },\n  {\n    \"name\": \"Ying-Huan (Emily) Chen\",\n    \"body\": \"Most likely to actually be an Owl\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (superlatives);\n\n//# sourceURL=webpack:///./src/superlatives/2020-06-01.js?");

/***/ })

/******/ });