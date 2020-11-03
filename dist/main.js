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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2020_04_06__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2020-04-06 */ \"./src/students/2020-04-06.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2020_04_06__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2020-04-06.js":
/*!************************************!*\
  !*** ./src/students/2020-04-06.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n    {\n      \"id\": 4980,\n      \"name\": \"Aaron Akuzum\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/980/medium/Aaron_Akuzum.jpg?1587762377\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4953,\n      \"name\": \"Ahmad Alqadhy\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/953/medium/ahmad_alqadhy.png?1587701781\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4979,\n      \"name\": \"Ahmet Adibelli\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/979/medium/ahmet_adibelli.jpg?1587699190\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4978,\n      \"name\": \"Ajay Rajamani\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/978/medium/Ajay_Rajamani.jpg?1587762338\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4941,\n      \"name\": \"Alexander (Alex) Mendoza\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/941/medium/alex_mendoza.jpg?1587777493\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4972,\n      \"name\": \"Alexandre (Alex) Daniel\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/972/medium/Alex_Daniel.jpg?1587746562\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4962,\n      \"name\": \"Andrew Chen\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/962/medium/andrew_chen.JPG?1587699051\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4977,\n      \"name\": \"Anna Cho\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/977/medium/Anna_Cho.jpg?1587743750\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4965,\n      \"name\": \"Ara Baghdassarian\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/965/medium/ara_baghdassarian.jpg?1587746635\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4966,\n      \"name\": \"Benjamin (Ben) Giller\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/966/medium/benjamin_giller.jpeg?1587746692\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4940,\n      \"name\": \"Benjamin (Ben) Rose\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/940/medium/ben_rose.jpeg?1587743574\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4951,\n      \"name\": \"Bryan Sillorequez\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/951/medium/bryan_sillorequez.jpg?1587762167\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4970,\n      \"name\": \"Candice Sener\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/970/medium/candice_sener.jpg?1587762507\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4644,\n      \"name\": \"Christopher (Chris) Oney\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/644/medium/christopher_oney.jpg?1587762657\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4981,\n      \"name\": \"Daniel Chau\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/981/medium/daniel_chau.jpg?1587762421\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4968,\n      \"name\": \"Daniel Creppel\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/968/medium/daniel_creppel.jpeg?1587746738\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4947,\n      \"name\": \"Daniel Yee\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/947/medium/daniel_yee.jpeg?1587743638\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4963,\n      \"name\": \"Elisha Park\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/963/medium/elisha_park.jpeg?1587699107\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4945,\n      \"name\": \"Eric Arndt\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/945/medium/Eric_Arndt.jpeg?1587746787\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4964,\n      \"name\": \"Gabor Kurucz\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/964/medium/gabor_kurucz.jpg?1587699122\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4967,\n      \"name\": \"Gilbert Bui\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/967/medium/gilbert_bui.png?1587746847\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4955,\n      \"name\": \"Gordon (Gordy) Bullen\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/955/medium/gordy_bullen.JPG?1587698972\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4950,\n      \"name\": \"Hyerin (Ashe) Hwang\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/950/medium/Ashe_Hwang.jpg?1587762466\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4836,\n      \"name\": \"Jason Park\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/836/medium/jason_park.jpg?1587701715\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4954,\n      \"name\": \"Jingwen Kuang\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/954/medium/Jingwen_Kuang.JPG?1587743822\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4959,\n      \"name\": \"John Lam\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/959/medium/John_lam.PNG?1587746933\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4961,\n      \"name\": \"Julie Bock\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/961/medium/julie_bock.jpg?1587743706\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4637,\n      \"name\": \"Kenneth Liang\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/637/medium/kenneth_liang.jpg?1587699221\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4942,\n      \"name\": \"Khai Yuan (Kelvin) Liew\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/942/medium/kelvin_liew.jpg?1587762047\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4957,\n      \"name\": \"Marquis Bentley\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/957/medium/marquis_bentley.JPG?1587762333\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4969,\n      \"name\": \"Matthew Tolentin\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/969/medium/matthew_tolentin.jpg?1587762224\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4956,\n      \"name\": \"Michael Hollingworth\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/956/medium/michael_hollingworth.png?1587762258\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4944,\n      \"name\": \"Mohamed Sanaany\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/944/medium/mohamed_sanaany.jpg?1587747077\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4975,\n      \"name\": \"Ryan Tran\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/975/medium/ryan_tran.JPG?1587762486\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4952,\n      \"name\": \"Sheava Danesh\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/952/medium/Sheava_Danesh.jpeg?1587698994\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4708,\n      \"name\": \"Stefani Echeverría-Fenn\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/708/medium/Stefani_echeverria-fenn.jpg?1587701614\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4976,\n      \"name\": \"Suman (Neil) Khadka\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/976/medium/neil.jpeg?1588115279\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4496,\n      \"name\": \"Yuk Fai (Yuk) Chan\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/496/medium/Yukfai_Chan.jpg?1587747132\",\n      \"occup\": \"student\"\n    },\n    {\n      \"id\": 4943,\n      \"name\": \"Yulin (Leo) Li\",\n      \"imageUrl\": \"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/943/medium/leo_yulin_li.jpg?1587762130\",\n      \"occup\": \"student\"\n    }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/2020-04-06.js?");

/***/ })

/******/ });