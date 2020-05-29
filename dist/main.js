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
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/potat-sprite-sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [750, 0];\n        let spriteSize = [375, 500]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            this.ctx.drawImage(this.potatSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n        let spriteSize = [375, 500]\n        let runningSprites = [[0, 0], [375, 0], [0, 0]];\n        let dashSprites = [[0, 0], [375, 0], [0, 0]];\n        let jumpSprite = [1125, 0];\n        let grabSprite = [0, 500];\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        this.scaleGraduateImg();\n\n        if (startingPosition[0] >= 390 && startingPosition[0] <= 490) { // grabbing diploma\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 5;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 5;\n            }\n\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                grabSprite[0], grabSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        } else {\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2020_02_10__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2020-02-10 */ \"./src/students/2020-02-10.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2020_02_10__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2020-02-10.js":
/*!************************************!*\
  !*** ./src/students/2020-02-10.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 4723,\n    \"name\": \"Alvin Zhao\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/723/medium/Alvin_Zhao_1.JPG?1583202420\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4742,\n    \"name\": \"Ben Hafner\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/742/medium/Ben_Hafner_2.JPG?1583202580\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4733,\n    \"name\": \"Brian Wan\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/733/medium/Brian_Wan_4.JPG?1583203194\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4740,\n    \"name\": \"Brittany Hasty\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/740/medium/Brittany_Hasty_3.JPG?1583204091\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4730,\n    \"name\": \"Bryan Linda\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/730/medium/Bryan_Linda_3.JPG?1583204232\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4726,\n    \"name\": \"Charles Coombs Esmail\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/726/medium/Charles_Combs-Esmail_3.JPG?1583204545\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4751,\n    \"name\": \"Chef Pangburn\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/751/medium/Shaphen_Chef_Pangburn_2.JPG?1583209655\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4717,\n    \"name\": \"Daniel Lancaster\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/717/medium/Daniel_Lancaster_1.JPG?1583205087\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4755,\n    \"name\": \"Danny Huang\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/755/medium/Danny_Huang_4.JPG?1583205253\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4801,\n    \"name\": \"Darrick Yong\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/801/medium/Darrick_Yong_1.JPG?1583205427\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4731,\n    \"name\": \"Dias Iskrayev\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/731/medium/Dias_Iskrayev_2.JPG?1583205548\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4746,\n    \"name\": \"Dillon Rice\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/746/medium/Dillon_Rice_1.JPG?1583205690\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4732,\n    \"name\": \"Dorian Izaiah Brown\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/732/medium/Dorian_Brown_1.JPG?1583205842\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4744,\n    \"name\": \"Eddie Rosas\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/744/medium/Eddie_Rosas_2.JPG?1583205937\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4807,\n    \"name\": \"Eric Chen\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/807/medium/Eric_Chen_1.JPG?1583206121\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4792,\n    \"name\": \"Eric Hsieh\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/792/medium/Eric_Hsieh_3.JPG?1583206209\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4729,\n    \"name\": \"Erick Santos\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/729/medium/Erick_Santos_4.JPG?1583206333\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4711,\n    \"name\": \"Eyal Garbi\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/711/medium/Eyal_Garbi_1.JPG?1583206458\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4750,\n    \"name\": \"Glen Park\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/750/medium/Glen_Park_1.JPG?1583206658\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4793,\n    \"name\": \"Grant Kleinman\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/793/medium/Grant_Kleinman_2.JPG?1583206732\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4810,\n    \"name\": \"Hari Sachdeva\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/810/medium/Hari_Sachdeva_1.JPG?1583206886\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4796,\n    \"name\": \"Helena Zarazua\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/796/medium/Helena_Zarazua_3.JPG?1583207009\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4712,\n    \"name\": \"Isaac Yoon\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/712/medium/Issac_Yoon_4.JPG?1583207228\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4738,\n    \"name\": \"Iulia Heinrich\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/738/medium/Iulia_Heinrich_2.JPG?1583207306\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4721,\n    \"name\": \"James Jiang\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/721/medium/James_Jiang_1.JPG?1583207459\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4805,\n    \"name\": \"Jared Lester\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/805/medium/Jared_Lester_1.JPG?1583207531\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4720,\n    \"name\": \"Jason Wintery\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/720/medium/Jason_Wintery_3.JPG?1583204677\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4713,\n    \"name\": \"Javier Castro\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/713/medium/Javier_Castro_3.JPG?1583207627\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4710,\n    \"name\": \"Jenn Huynh\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/710/medium/Jennifer_Huynh_1.JPG?1583207759\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4724,\n    \"name\": \"Joseph Deng\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/724/medium/Joseph_Deng_4.JPG?1583210390\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4715,\n    \"name\": \"Joshua Silva-Roland\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/715/medium/Joshua_Silva-Roland_3.JPG?1583207880\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4747,\n    \"name\": \"Miguel Delacruz\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/747/medium/Miguel_Delacruz_3.JPG?1583208109\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4716,\n    \"name\": \"Michael Murry\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/716/medium/Michael_Murry_1.JPG?1583208264\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4803,\n    \"name\": \"Natalie Chen\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/803/medium/IMG_4826.JPG?1584409622\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4741,\n    \"name\": \"Ngoc Ly\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/741/medium/Ngoc_Ly_4.JPG?1583208774\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4806,\n    \"name\": \"Pedro Siqueira\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/806/medium/Pedro_Siqueira_1.JPG?1583208880\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4719,\n    \"name\": \"Peter Koe\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/719/medium/Peter_Koe_1.JPG?1583209048\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4734,\n    \"name\": \"Rasheeq Ahmed\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/734/medium/Rasheeq_Ahmed_4.JPG?1583209399\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4718,\n    \"name\": \"Ryan Lynch\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/718/medium/Ryan_Lynch_1.JPG?1583209544\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4743,\n    \"name\": \"Steven Touba\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/743/medium/Steven_Touba_5.JPG?1583209742\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4722,\n    \"name\": \"TJ McCabe\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/722/medium/TJ_McCabe_1.JPG?1583209966\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4756,\n    \"name\": \"Wayne Su\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/756/medium/Wayne_Su_2.JPG?1583210149\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4808,\n    \"name\": \"Will Sexton\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/808/medium/Will_Sexton_1.JPG?1583210215\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4748,\n    \"name\": \"Willie Wang\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/748/medium/Willie_Wang_1.JPG?1583210290\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4752,\n    \"name\": \"Zack Barbieri\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/752/medium/Zachary_Barbieri_1.JPG?1583210462\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4791,\n    \"name\": \"Zoe Lin\",\n    \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/791/medium/Zoe_Lin_2.JPG?1583210529\",\n    \"occup\": \"student\"\n  }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/2020-02-10.js?");

/***/ })

/******/ });