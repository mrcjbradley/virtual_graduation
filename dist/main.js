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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2020_27_07__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2020-27-07 */ \"./src/students/2020-27-07.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2020_27_07__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2020-27-07.js":
/*!************************************!*\
  !*** ./src/students/2020-27-07.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n    {\n        \"id\": 5308,\n        \"name\": \"Aishwarya Nair\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/308/medium/Aishwarya_Nair.JPG?1597159833\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5291,\n        \"name\": \"Alexzander (Alex) Archibeque\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/291/medium/Alexzander_Archibeque.jpg?1597159859\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5299,\n        \"name\": \"Alvin Chong\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/299/medium/alvin_chong.jpeg?1597160879\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5305,\n        \"name\": \"Brandon Leong\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/305/medium/Brandon_Leong.jpg?1597181697\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5296,\n        \"name\": \"Brian Bowen\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/296/medium/brian_bowen.jpg?1597181009\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5318,\n        \"name\": \"Christopher (Chris) Lee\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/318/medium/Chris-lee.JPG?1597181200\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5327,\n        \"name\": \"Daniel (Danny) Ackroyd-Isales\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/327/medium/Daniel_Ackroyd-Isales.jpg?1597159969\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5316,\n        \"name\": \"Derek Xu\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/316/medium/derek_xu.png?1597181170\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5293,\n        \"name\": \"Diego Chavez\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/293/medium/Diego_Chavez.JPG?1597181729\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5303,\n        \"name\": \"Eric Xian\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/303/medium/eric_xian.png?1597181074\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5298,\n        \"name\": \"Gary Wan\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/298/medium/gary_wan.png?1597173459\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5300,\n        \"name\": \"Harold (Hal) Parker\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/300/medium/Hal_Parker.jpg?1597181682\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5126,\n        \"name\": \"Isabella (Bella) Sandoval\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/126/medium/Bella_Sandoval.jpg?1597281918\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5324,\n        \"name\": \"Jason Zhen\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/324/medium/Jason_Zhen.jpg?1597181773\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5292,\n        \"name\": \"Jonathan (Jon) Jo\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/292/medium/20170818-DSC_9936_%281%29.jpg?1604076641\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5330,\n        \"name\": \"Jonathan Siu\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/330/medium/Jonathan_Siu.png?1597160798\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5297,\n        \"name\": \"Jonathan Dwight (JD) Buendia\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/297/medium/JD_Buendia.JPG?1597173064\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5288,\n        \"name\": \"Jose Maria Canuto (Jose) Gaston\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/288/medium/Jose_Gaston.jpg?1597248260\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5325,\n        \"name\": \"Juan Carlos Cattaneo Garcia\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/325/medium/juancarlos_cattaneo.jpg?1597181246\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5116,\n        \"name\": \"Kathy (Kat) Chan\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/116/medium/Kathy_Chan.jpg?1597173281\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5295,\n        \"name\": \"Kevin Lai\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/295/medium/Kevin_Lai.JPG?1597160147\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5321,\n        \"name\": \"Kevin Su\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/321/medium/kevin_su.JPG?1597181747\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5312,\n        \"name\": \"Lili Gevorkian\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/312/medium/Lili_Gevorkian.jpg?1597160173\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5309,\n        \"name\": \"Lisa Lam\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/309/medium/Lisa_Lam.jpg?1597173198\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5331,\n        \"name\": \"Malcolm Reyes\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/331/medium/Malcolm_Reyes.jpg?1597173059\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5323,\n        \"name\": \"Mark Jang\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/323/medium/mark_jang.jpg?1597181224\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5313,\n        \"name\": \"Michael Castanieto\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/313/medium/Michael_Castanieto.jpeg?1597182150\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5317,\n        \"name\": \"Michelle Naim\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/317/medium/Michelle_Naim.jpg?1597160232\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5304,\n        \"name\": \"Nathan Chau\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/304/medium/Nathan_Chau.JPG?1597160277\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5287,\n        \"name\": \"Nathan (Nate) Oh\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/287/medium/Nate_Oh.jpg?1597181645\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5310,\n        \"name\": \"Omar Hernandez\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/310/medium/IMG_0850.png?1604075325\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5110,\n        \"name\": \"Paulo Bocanegra\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/110/medium/paulo_bocanegra.JPG?1597181526\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5290,\n        \"name\": \"Peter Min\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/290/medium/peter_min.jpg?1597173539\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5319,\n        \"name\": \"Praneeth Chandu\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/319/medium/Praneeth_Chandu.JPG?1597268132\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5311,\n        \"name\": \"Ryan Acosta\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/311/medium/ryan_acosta.png?1597181717\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5306,\n        \"name\": \"Seth Barrie\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/306/medium/seth_barrie.jpeg?1597173130\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5322,\n        \"name\": \"Taylor Lee\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/322/medium/Taylor_Lee.JPG?1597173160\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5289,\n        \"name\": \"Tri Ta\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/289/medium/Tri_Ta.jpeg?1597160329\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5320,\n        \"name\": \"Xin Wen (Jacky) Li Huang\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/320/medium/jacky_li.PNG?1597173508\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5326,\n        \"name\": \"Yuehan Huang\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/326/medium/Yuehan_Huang.png?1597173622\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5328,\n        \"name\": \"Zach Vaillancourt\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/328/medium/Zach_Vaillancourt.jpg?1597181780\",\n        \"occup\": \"student\"\n      },\n      {\n        \"id\": 5315,\n        \"name\": \"Zhang Zhang\",\n        \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/315/medium/Zhang_Zhang.jpg?1597181105\",\n        \"occup\": \"student\"\n      }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/students/2020-27-07.js?");

/***/ })

/******/ });