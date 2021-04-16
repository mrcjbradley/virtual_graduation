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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_2020_12_28__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/2020-12-28 */ \"./src/students/2020-12-28.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _students_2020_12_28__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/2020-12-28.js":
/*!************************************!*\
  !*** ./src/students/2020-12-28.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n{\"id\":5890,\"name\":\"Adam Kamboj\",\"imageUrl\":\"https://secure.gravatar.com/avatar/2a5f1eb28b828ac07e4f8682e732ac93?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5897,\"name\":\"Alejandro Weil\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/897/medium/alejandro_weil.jpg?1610667747\",\"occup\":\"student\"},\n{\"id\":5927,\"name\":\"Alexander (Alec) Caro\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/927/medium/alec_caro.jpg?1610667709\",\"occup\":\"student\"},\n{\"id\":5892,\"name\":\"Alisa Cheadle\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/892/medium/Alisa_Cheadle.jpg?1610667770\",\"occup\":\"student\"},\n{\"id\":5896,\"name\":\"Andrew Kim\",\"imageUrl\":\"https://secure.gravatar.com/avatar/357a97032adbe0a1cc6f95dc2a77c1e2?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5913,\"name\":\"Ariton Sefedini\",\"imageUrl\":\"https://secure.gravatar.com/avatar/0cf7fbf7416f72af05dd09b672263f5a?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5910,\"name\":\"Bradley (Brad) Trick\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/910/medium/Brad_Trick.jpg?1610667795\",\"occup\":\"student\"},\n{\"id\":5924,\"name\":\"Brekke Green\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/924/medium/brekke_green.jpg?1610667815\",\"occup\":\"student\"},\n{\"id\":5655,\"name\":\"Christian Wooddell\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/655/medium/Christian_Wooddell.PNG?1610667834\",\"occup\":\"student\"},\n{\"id\":5908,\"name\":\"Christine Yang\",\"imageUrl\":\"https://secure.gravatar.com/avatar/fd20573dccf3a98602504caebe017b76?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5667,\"name\":\"Christopher (Chris) Mann\",\"imageUrl\":\"https://secure.gravatar.com/avatar/a225e626999cf219971df62023c39c99?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5925,\"name\":\"Daniel Bloncourt\",\"imageUrl\":\"https://secure.gravatar.com/avatar/3d74dd6e9a7bc165f9edc5f7575f5d5c?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5900,\"name\":\"Danny Ho\",\"imageUrl\":\"https://secure.gravatar.com/avatar/5d196db1b0cd2241a30c74cf7752a8de?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5912,\"name\":\"Greta Hayes\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/912/medium/Greta_Hayes.jpeg?1610667859\",\"occup\":\"student\"},\n{\"id\":5899,\"name\":\"Hammad Khalid\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/899/medium/Hammad_Khalid.JPG?1610667879\",\"occup\":\"student\"},\n{\"id\":5928,\"name\":\"Han (Hank) Chen\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/928/medium/Hank_Chen.png?1610667898\",\"occup\":\"student\"},\n{\"id\":5916,\"name\":\"Holly Phillips\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/916/medium/Holly_Phillips.png?1610667915\",\"occup\":\"student\"},\n{\"id\":5915,\"name\":\"Jaspreet Singh\",\"imageUrl\":\"https://secure.gravatar.com/avatar/f679c2b3645961233492f5b23614d80c?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5909,\"name\":\"John Cheung\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/909/medium/John_Cheung.JPG?1610667938\",\"occup\":\"student\"},\n{\"id\":5887,\"name\":\"John Cigale\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/887/medium/John_Cigale.jpeg?1610667960\",\"occup\":\"student\"},\n{\"id\":5894,\"name\":\"Joshua Ebrani\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/894/medium/Joshua_Ebrani.png?1610668037\",\"occup\":\"student\"},\n{\"id\":5919,\"name\":\"Kenny Li\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/919/medium/Kenny_Li.jpg?1610668056\",\"occup\":\"student\"},\n{\"id\":5904,\"name\":\"Kevin Mao\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/904/medium/Kevin_Mao.jpg?1610668076\",\"occup\":\"student\"},\n{\"id\":5914,\"name\":\"Lakhte Agha\",\"imageUrl\":\"https://secure.gravatar.com/avatar/1850d3f28e09e80fe3f089136f370bf8?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5906,\"name\":\"Lane Harris\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/906/medium/Lane_Harris.jpg?1610668094\",\"occup\":\"student\"},\n{\"id\":5905,\"name\":\"Lernard Grigsby\",\"imageUrl\":\"https://secure.gravatar.com/avatar/5b0470705ac543452a48793dbd209596?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5922,\"name\":\"Lijun Gan\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/922/medium/IMG_9899.jpg?1610668333\",\"occup\":\"student\"},\n{\"id\":5895,\"name\":\"Marco Torre\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/895/medium/Marco_Torre.png?1610668117\",\"occup\":\"student\"},\n{\"id\":5926,\"name\":\"Min (Eddie) Kim\",\"imageUrl\":\"https://secure.gravatar.com/avatar/4809bc3630473e0a9491c94538f34568?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5917,\"name\":\"Parth Shah\",\"imageUrl\":\"https://secure.gravatar.com/avatar/b2b773f530021dcee76e76b78041fd50?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5918,\"name\":\"Raymond Wu\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/918/medium/Raymond_Wu.jpeg?1610668171\",\"occup\":\"student\"},\n{\"id\":5665,\"name\":\"Ryan Naing\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/665/medium/ryan_naing.JPG?1610668197\",\"occup\":\"student\"},\n{\"id\":5893,\"name\":\"Sayeef Alam\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/893/medium/sayeef_alam.JPG?1610668213\",\"occup\":\"student\"},\n{\"id\":5901,\"name\":\"Solomon Bassalian\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/901/medium/Solomon_Bassalian_Real.jpg?1610668229\",\"occup\":\"student\"},\n{\"id\":5888,\"name\":\"Stewart Morales\",\"imageUrl\":\"https://secure.gravatar.com/avatar/b2fc975c02bc9e9ed57520f7057f7b47?secure=true&size=300\",\"occup\":\"student\"},\n{\"id\":5920,\"name\":\"Yohan Oh\",\"imageUrl\":\"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/005/920/medium/Yohan_Oh.jpg?1610668266\",\"occup\":\"student\"}]);\n\n//# sourceURL=webpack:///./src/students/2020-12-28.js?");

/***/ })

/******/ });