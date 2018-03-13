webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(_http) {
        this._http = _http;
        this.myobj = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentUser = this.myobj.asObservable();
        this.baseUrl = 'http://localhost:3000/admin';
        // this.baseUrl = '/api' ;
    }
    AdminService.prototype.getRequestsList = function () {
        return this._http.get(this.baseUrl + '/userRequests')
            .map(function (resp) {
            return resp;
        }, function (err) {
            return { response: 'server error' };
        });
    };
    AdminService.prototype.login = function (username, password) {
        return this._http.post(this.baseUrl + '/login', { username: username, password: password })
            .map(function (resp) {
            //         console.log(resp);
            if (!resp) {
                return { response: 'fail', message: 'Password or username is incorrect' };
            }
            return resp;
        });
    };
    AdminService.prototype.accept = function (username) {
        return this._http.post(this.baseUrl + '/acceptUser', { username: username })
            .map(function (resp) {
            //         console.log(resp);
            if (!resp) {
                return { response: 'fail' };
            }
            return resp;
        });
    };
    AdminService.prototype.reject = function (username) {
        return this._http.post(this.baseUrl + '/rejectUser', { username: username })
            .map(function (resp) {
            //         console.log(resp);
            if (!resp) {
                return { response: 'fail' };
            }
            return resp;
        });
    };
    AdminService.prototype.logout = function () {
        return this._http.get(this.baseUrl + '/logout')
            .map(function (resp) {
            return resp;
        });
    };
    AdminService.prototype.getme = function () {
        return this.me;
    };
    AdminService.prototype.isLoggedIn = function () {
        var _this = this;
        return this._http.get(this.baseUrl + '/isLoggedin')
            .map(function (resp) {
            resp = {
                message: true,
                user: {
                    '_id': '5a9e6c3f4701de2af429fe0f',
                    'username': 'anubhav789',
                    'email': 'anubhav@mailinator.com',
                    'phoneNo': '7404541567',
                    'fullname': 'anubhav',
                    'dob': new Date('1996-05-25T05:30:00.000+05:30'),
                    'gender': 'male',
                    'admin': true,
                    'imglink': '/assets/profilePictures/anubhav-1520331635492.jpg',
                    'thumbnail': '/assets/thumbnails/anubhav-1520331635492.jpg',
                    'description': 'asmjdhkaj',
                    '__v': 0
                }
            };
            if (resp.message && resp.user) {
                _this.myobj.next(resp.user);
                _this.me = resp.user;
            }
            return resp;
        });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticateService = (function () {
    function AuthenticateService(_http) {
        this._http = _http;
        this.myobj = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentUser = this.myobj.asObservable();
        this.baseUrl = 'http://localhost:3000/api';
        // this.baseUrl = '/api' ;
    }
    AuthenticateService.prototype.login = function (username, password) {
        return this._http.post(this.baseUrl + '/login', { username: username, password: password })
            .map(function (resp) {
            //         console.log(resp);
            if (!resp) {
                return { response: 'fail', message: 'Password or username is incorrect' };
            }
            return resp;
        });
    };
    AuthenticateService.prototype.register = function (formData) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.append('enctype', 'multipart/form-data');
        header.append('Accept', 'application/json');
        var options = { headers: header };
        return this._http.post(this.baseUrl + '/register', formData, options)
            .map(function (resp) {
            //         console.log(resp);
            if (!resp) {
                return { response: 'fail' };
            }
            return resp;
        });
    };
    AuthenticateService.prototype.logout = function () {
        return this._http.get(this.baseUrl + '/logout')
            .map(function (resp) {
            return resp;
        });
    };
    AuthenticateService.prototype.changePassword = function (username, oldpassword, newpassword) {
        return this._http.post(this.baseUrl + '/changepassword', {
            username: username,
            oldpassword: oldpassword,
            newpassword: newpassword
        })
            .map(function (resp) {
            console.log(resp);
            return resp;
        });
    };
    AuthenticateService.prototype.getme = function () {
        return this.me;
    };
    AuthenticateService.prototype.isLoggedIn = function () {
        var _this = this;
        return this._http.get(this.baseUrl + '/isLoggedin')
            .map(function (resp) {
            console.log(resp);
            /*   resp = {
         message: true,
         user: {
           '_id': '5a9e6c3f4701de2af429fe0f',
           'username': 'anubhav789',
           'email': 'anubhav@mailinator.com',
           'phoneNo': '7404541567',
           'fullname': 'anubhav',
           'dob': new Date('1996-05-25T05:30:00.000+05:30'),
           'gender': 'male',
           'imglink': '/assets/profilePictures/anubhav-1520331635492.jpg',
           'thumbnail': '/assets/thumbnails/anubhav-1520331635492.jpg',
           'description': 'asmjdhkaj',
           '__v': 0
         }
       }; */
            if (resp.message && resp.user) {
                _this.myobj.next(resp.user);
                _this.me = resp.user;
            }
            return resp;
        });
    };
    AuthenticateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function () {
    function ChatService(_http, socket) {
        this._http = _http;
        this.socket = socket;
        this.myOnlineUsers = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.onlineUsers = this.myOnlineUsers.asObservable();
        this.baseUrl = 'http://localhost:3000/chat/';
        this.InitializeSocketListerners();
    }
    ChatService.prototype.online = function (username) {
        this.socket.emit('online', username);
    };
    ChatService.prototype.getUsers = function () {
        return this._http.get(this.baseUrl + 'users')
            .map(function (resp) {
            return resp;
        });
    };
    ChatService.prototype.getHistory = function (me, other) {
        return this._http.post(this.baseUrl + 'messages', {
            me: me,
            other: other
        })
            .map(function (resp) {
            return resp;
        });
    };
    ChatService.prototype.chatfile = function (formData) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.append('enctype', 'multipart/form-data');
        header.append('Accept', 'application/json');
        var options = { headers: header };
        return this._http.post(this.baseUrl + 'newchatfile', formData, options)
            .map(function (resp) {
            //         console.log(resp);
            if (!resp) {
                return { response: 'fail' };
            }
            return resp;
        });
    };
    ChatService.prototype.getSocket = function () {
        return this.socket;
    };
    ChatService.prototype.InitializeSocketListerners = function () {
        var _this = this;
        this.socket.on('onlinelistchanged', function (message) {
            console.log(message);
            _this.myOnlineUsers.next(message);
        });
        /*     this.socket.on('generatedUserId', (userId) => {
              // Initializing the chat with the userId and the adapter with the socket instance
            });
        
            this.socket.on('messageReceived', (messageWrapper) => {
              // Handle the received message to ng-chat
              this.onMessageReceived(messageWrapper.user, messageWrapper.message);
            });
        
            this.socket.on('friendsListChanged', (usersCollection: Array<User>) => {
              // Handle the received message to ng-chat
              this.onFriendsListChanged(usersCollection.filter(x => x.id !== this.userId));
            });
         */
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:3000/api';
    }
    UserService.prototype.search = function (query) {
        return this._http.get(this.baseUrl + '/search/' + query)
            .map(function (resp) {
            return resp;
        }, function (err) {
            return { response: 'server error' };
        });
    };
    UserService.prototype.getuser = function (username) {
        return this._http.get(this.baseUrl + '/user/' + username)
            .map(function (resp) {
            return resp;
        }, function (err) {
            return { response: 'server error' };
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/validator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidatorService = (function () {
    function ValidatorService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:3000/api';
        // this.baseUrl = '/api';
    }
    ValidatorService.prototype.usernameValid = function (username) {
        return this._http.post(this.baseUrl + '/usernameValid', { username: username })
            .map(function (resp) {
            if (!resp) {
                return { response: false };
            }
            return resp;
        });
    };
    ValidatorService.prototype.emailValid = function (email) {
        return this._http.post(this.baseUrl + '/emailValid', { email: email })
            .map(function (resp) {
            if (!resp) {
                return { response: false };
            }
            return resp;
        });
    };
    ValidatorService.prototype.phoneNoValid = function (phoneNo) {
        return this._http.post(this.baseUrl + '/phoneNoValid', { phoneNo: phoneNo })
            .map(function (resp) {
            if (!resp) {
                return { response: false };
            }
            return resp;
        });
    };
    ValidatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ValidatorService);
    return ValidatorService;
}());



/***/ }),

/***/ "../../../../../src/app/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" *ngIf=\"true && users && users.length\">\n\n        <div class=\"col-lg-3 col-md-4 col-sm-5 col-10 mx-auto mt-4\" *ngFor=\"let user of users\" [id]=\"user.username\">\n            <div class=\"card\">\n                <img class=\"card-img-top img-fluid profileImage\" [src]=\"user.imglink\" alt=\"profile picture\">\n                <div class=\"card-block\">\n                    <h5 class=\"card-title\">{{ user.fullname }}</h5>\n                    <h6 class=\"card-text\">{{ user.email }}</h6>\n                    <h6 class=\"card-text\">{{ user.phoneNo }}</h6>\n                    <h6 class=\"card-text\">{{ user.username }}</h6>\n\n                    <button class=\"btn btn-outline-info m-1\" (click)=\"viewProfile(user.username)\">View Profile <i class=\"fa fa-user\"></i></button>\n\n                    <div class=\"\">\n                        <button class=\"btn btn-outline-success m-1\" (click)=\"accept(user.username)\">Accept <i class=\"fa fa-check\"></i></button>\n                        <button class=\"btn btn-outline-danger m-1\" (click)=\"reject(user.username)\">Reject <i class=\"fa fa-ban\"></i></button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-user/add-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.row > div[class*='col-'] {\n  display: -ms-flexbox;\n  display: flex; }\n\n@media (max-width: 1244px) {\n  button {\n    min-width: 9rem; } }\n\n.profileImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/_services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = (function () {
    function AddUserComponent(_adminService, route, router) {
        var _this = this;
        this._adminService = _adminService;
        this.route = route;
        this.router = router;
        this._adminService.currentUser.subscribe(function (resp) {
            _this.me = resp;
            //  console.log(this.me);
        });
        this._adminService.getRequestsList()
            .subscribe(function (resp) {
            _this.users = resp;
        });
    }
    AddUserComponent.prototype.accept = function (username) {
        var _this = this;
        this._adminService.accept(username)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.response === 'success') {
                var div = document.getElementById(username);
                div.parentElement.removeChild(div);
                for (var i in _this.users) {
                    if (_this.users[i].username === username) {
                        _this.users.splice(parseInt(i, -1), 1);
                    }
                }
                if (_this.users.length < 1) {
                    _this._adminService.getRequestsList()
                        .subscribe(function (resp2) {
                        _this.users = resp2;
                        console.log(_this.users);
                    }, function (err) {
                    });
                }
            }
        }, function (err) {
        });
    };
    AddUserComponent.prototype.reject = function (username) {
        var _this = this;
        this._adminService.reject(username)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.response === 'success') {
                var div = document.getElementById(username);
                div.parentElement.removeChild(div);
                for (var i in _this.users) {
                    if (_this.users[i].username === username) {
                        _this.users.splice(parseInt(i, -1), 1);
                    }
                }
                if (_this.users.length < 1) {
                    _this._adminService.getRequestsList()
                        .subscribe(function (resp2) {
                        _this.users = resp2;
                        console.log(_this.users);
                    }, function (err) {
                    });
                }
            }
        }, function (err) {
        });
    };
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__("../../../../../src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-user/add-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<app-navbar [user]=\"me\"></app-navbar>\n\n<!-- Intro Header -->\n<header class=\"masthead\">\n    <div class=\"intro-body\">\n        <div class=\"container abc\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/app/_services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(_adminService, route, router) {
        var _this = this;
        this._adminService = _adminService;
        this.route = route;
        this.router = router;
        this._adminService.isLoggedIn()
            .subscribe(function (resp) {
            if (resp.message && resp.user) {
                _this.me = resp.user;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validator_service__ = __webpack_require__("../../../../../src/app/_services/validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_admin_service__ = __webpack_require__("../../../../../src/app/_services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__register_form_register_form_component__ = __webpack_require__("../../../../../src/app/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_user_add_user_component__ = __webpack_require__("../../../../../src/app/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_chat__ = __webpack_require__("../../../../ng-chat/ng-chat.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_chat_service__ = __webpack_require__("../../../../../src/app/_services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chat_user_list_chat_user_list_component__ = __webpack_require__("../../../../../src/app/chat-user-list/chat-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__chat_body_chat_body_component__ = __webpack_require__("../../../../../src/app/chat-body/chat-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__temp_temp_component__ = __webpack_require__("../../../../../src/app/temp/temp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var config = { url: 'http://localhost:3000', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__register_form_register_form_component__["a" /* RegisterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_21__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__chat_user_list_chat_user_list_component__["a" /* ChatUserListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__chat_body_chat_body_component__["a" /* ChatBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_27__temp_temp_component__["a" /* TempComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng_chat__["a" /* NgChatModule */],
                __WEBPACK_IMPORTED_MODULE_23_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: '',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'register',
                        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'register',
                        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'changepassword',
                        component: __WEBPACK_IMPORTED_MODULE_20__change_password_change_password_component__["a" /* ChangePasswordComponent */]
                    },
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'messages',
                        component: __WEBPACK_IMPORTED_MODULE_21__messages_messages_component__["a" /* MessagesComponent */]
                    },
                    {
                        path: 'profile/:username',
                        component: __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__["a" /* ProfileComponent */]
                    },
                    {
                        path: 'temp',
                        component: __WEBPACK_IMPORTED_MODULE_27__temp_temp_component__["a" /* TempComponent */]
                    },
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__["a" /* AdminComponent */],
                        children: [{
                                path: 'requests',
                                component: __WEBPACK_IMPORTED_MODULE_18__add_user_add_user_component__["a" /* AddUserComponent */]
                            }]
                    },
                    {
                        path: '**',
                        redirectTo: '/home'
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_12__services_validator_service__["a" /* ValidatorService */], __WEBPACK_IMPORTED_MODULE_13__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n    <div class=\"container\">\n        <a class=\"navbar-brand js-scroll-trigger\" href=\"/\">{{ title }}</a>\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                <a href=\"/register\" class=\"btn btn-outline-primary\">SignUp <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></a> &nbsp;\n                <a href=\"/login\" class=\"btn btn-outline-primary\">LogIn <i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n            </li>\n\n        </ul>\n    </div>\n</nav>\n\n<!-- Intro Header -->\n<header class=\"masthead\">\n    <div class=\"intro-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-7 col-md-8 col-10 mx-auto form-box\">\n                    <form name=\"form\" class='col-lg-10 mx-auto' (ngSubmit)=\"f.form.valid && changePassword()\" #f=\"ngForm\" novalidate>\n                        <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n\n                            <input type=\"text\" class=\"form-control lowercase\" disabled=\"disabled\" placeholder=\"username\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block error\">Username is required</div>\n                        </div>\n                        <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !oldpassword.valid }\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" name=\"oldpassword\" [(ngModel)]=\"model.oldpassword\" #oldpassword=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !oldpassword.valid\" class=\"help-block error\">Old Password is required</div>\n                        </div>\n                        <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !newpassword.valid }\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" name=\"newpassword\" [(ngModel)]=\"model.newpassword\" #newpassword=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !newpassword.valid\" class=\"help-block error\">New Password is required</div>\n                        </div>\n                        <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !confpassword.valid }\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"confpassword\" [(ngModel)]=\"model.confpassword\" #confpassword=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !confpassword.valid \" class=\"help-block error\">Confirm Passwords is required</div>\n                            <div *ngIf=\"f.submitted && model.newpassword !== model.confpassword\" class=\"help-block error\">Passwords is do not match</div>\n                        </div>\n                        <div [style.display]=\"errorAlert\" class=\"form-group alert alert-danger col-10 mx-auto\" role=\"alert\">\n                            {{ error }}\n                        </div>\n                        <div [style.display]=\"successAlert\" class=\"form-group alert alert-info col-10 mx-auto\" role=\"alert\">\n                            Password Changed. you will be redirected to login page in {{ sec }} seconds.\n                        </div>\n                        <div class=\"form-group\">\n                            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login\n                                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                                /></button>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  margin-top: 10px; }\n\nbutton {\n  margin-top: 10px; }\n\na {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n\n.lowercase {\n  text-transform: lowercase; }\n\n.titlecase {\n  text-transform: capitalize; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_authenticateService, route, router) {
        var _this = this;
        this._authenticateService = _authenticateService;
        this.route = route;
        this.router = router;
        this.title = 'Socializer';
        this.model = {};
        this.error = 'Server Error.';
        this.errorAlert = 'none';
        this.successAlert = 'none';
        this.sec = 5;
        this._authenticateService.isLoggedIn()
            .subscribe(function (resp) {
            if (resp.message && resp.user) {
                _this.me = resp.user;
                _this.model.username = resp.user.username;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
        this._authenticateService.logout();
    }
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        console.log(this.model);
        this._authenticateService.changePassword(this.model.username, this.model.oldpassword, this.model.newpassword)
            .subscribe(function (resp) {
            if (resp.response !== 'success') {
                _this.errorAlert = 'block';
                _this.error = resp.message || _this.error;
            }
            else {
                _this.errorAlert = 'none';
                _this.successAlert = 'block';
                setInterval(function () {
                    _this.sec -= 1;
                    if (_this.sec === 0) {
                        _this.router.navigate(['/login']);
                    }
                }, 1000);
            }
        });
    };
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat-body/chat-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat\">\n    <div *ngIf=\"chatwith === undefined; then emptyChat; else Chatwithsomeone\"></div>\n    <ng-template #emptyChat>\n        <img src=\"/assets/img/chat.jpg\" alt=\"select a contact to start chatting\" style=\"min-width: 100%; min-height: 100%; max-width: 100%; max-height: 100%;\" />\n\n    </ng-template>\n\n    <ng-template #Chatwithsomeone>\n        <div class=\"chat-header clearfix\">\n            <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\".sidebar-navbar-collapse\" aria-controls=\"sidebar-navbar-collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  Users\n                  <i class=\"fa fa-users\"></i>\n                </button>\n\n            <img class=\"rounded-circle\" [src]=\"chatwith.thumbnail\" alt=\"avatar\" />\n            <div class=\"chat-with mx-auto\">{{ chatwith.username }}</div>\n\n\n        </div>\n        <!-- end chat-header -->\n\n        <div class=\"chat-history\">\n            <ul>\n                <li class=\"clearfix\" *ngFor=\"let msg of messages\">\n                    <div *ngIf=\"msg.from === me.username; then mymsg; else othermsg;\"></div>\n                    <ng-template #mymsg>\n                        <div class=\"message-data align-right\">\n                            <span class=\"message-data-time\">{{ msg.time }}</span> &nbsp; &nbsp;\n                            <span *ngIf=\"msg.hasMsg\" class=\"message-data-name\">{{ msg.from }}</span> <i class=\"fa fa-circle me\"></i>\n                            <img *ngIf=\"msg.hasImg\" [src]=\"link\" height=\"100px\" width=\"auto\">\n                            <div *ngIf=\"msg.hasFile\">\n                                <a [href]=\"link\"> {{ msg.filename }}</a> </div>\n                        </div>\n                        <div class=\"message other-message float-right\">\n                            {{ msg.message }}\n                        </div>\n                    </ng-template>\n\n                    <ng-template #othermsg>\n                        <div class=\"message-data\">\n                            <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> {{ msg.from }}</span>\n                            <span class=\"message-data-time\">{{ msg.time  }}</span>\n                        </div>\n                        <div class=\"message my-message\">\n                            {{ msg.message }}\n                        </div>\n                    </ng-template>\n                </li>\n\n                <!-- moment(msg.time).format( 'MMM Do YYYY, h:mm a') -->\n            </ul>\n\n\n        </div>\n        <!-- end chat-history -->\n\n        <div class=\"chat-message clearfix container my-auto\">\n            <div class=\"float-left col-9 mx-auto\">\n                <input type=\"text\" name=\"message-to-send\" #text id=\"message-to-send\" placeholder=\"Type your message\">\n            </div>\n            <div class=\"float-right col-3 mx-auto\">\n                <input type=\"file\" style=\"display:none;\" #chatFile (change)='handleFile($event,text)' />\n\n                <a (click)=\"selectFile(chatFile)\"><i class=\"fa fa-paperclip\"></i></a>&nbsp;&nbsp;&nbsp;\n                <button [disabled]=\"loading\" (click)=\"sendmsg(text,chatFile)\" class=\"btn btn-primary\">Send\n                                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                                /></button>\n            </div>\n        </div>\n        <!-- end chat-message -->\n\n    </ng-template>\n\n\n</div>\n\n\n<!--   <li class=\"clearfix\">\n                    <div class=\"message-data align-right\">\n                        <span class=\"message-data-time\">10:10 AM, Today</span> &nbsp; &nbsp;\n                        <span class=\"message-data-name\">Olia</span> <i class=\"fa fa-circle me\"></i>\n\n                    </div>\n                    <div class=\"message other-message float-right\">\n                        Hi Vincent, how are you? How is the project coming along?\n                    </div>\n                </li>\n\n                <li>\n                    <div class=\"message-data\">\n                        <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n                        <span class=\"message-data-time\">10:12 AM, Today</span>\n                    </div>\n                    <div class=\"message my-message\">\n                        Are we meeting today? Project has been already finished and I have results to show you.\n                    </div>\n                </li>\n\n                <li class=\"clearfix\">\n                    <div class=\"message-data align-right\">\n                        <span class=\"message-data-time\">10:14 AM, Today</span> &nbsp; &nbsp;\n                        <span class=\"message-data-name\">Olia</span> <i class=\"fa fa-circle me\"></i>\n\n                    </div>\n                    <div class=\"message other-message float-right\">\n                        Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?\n                    </div>\n                </li>\n\n                <li>\n                    <div class=\"message-data\">\n                        <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n                        <span class=\"message-data-time\">10:20 AM, Today</span>\n                    </div>\n                    <div class=\"message my-message\">\n                        Actually everything was fine. I'm very excited to show this to our team.\n                    </div>\n                </li>\n\n                <li>\n                    <div class=\"message-data\">\n                        <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n                        <span class=\"message-data-time\">10:31 AM, Today</span>\n                    </div>\n                    <i class=\"fa fa-circle online\"></i>\n                    <i class=\"fa fa-circle online\" style=\"color: #AED2A6\"></i>\n                    <i class=\"fa fa-circle online\" style=\"color:#DAE9DA\"></i>\n                </li> -->"

/***/ }),

/***/ "../../../../../src/app/chat-body/chat-body.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);", ""]);

// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\n.chat {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: #F2F5F8;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: #434651; }\n  .chat .chat-header {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    padding: 10px 20px;\n    border-bottom: 2px solid white; }\n    .chat .chat-header img {\n      float: left;\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 50px;\n      height: 50px;\n      left: 0; }\n    .chat .chat-header .chat-with {\n      font-weight: bold;\n      font-size: 25px;\n      color: grey; }\n  .chat .chat-history {\n    -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n    padding: 30px 30px 20px;\n    border-bottom: 2px solid white;\n    overflow-y: scroll; }\n    .chat .chat-history .message-data {\n      margin-bottom: 15px; }\n    .chat .chat-history .message-data-time {\n      color: #a8aab1;\n      padding-left: 6px; }\n    .chat .chat-history .message {\n      color: white;\n      padding: 18px 20px;\n      line-height: 26px;\n      font-size: 16px;\n      border-radius: 7px;\n      margin-bottom: 30px;\n      width: 90%; }\n      .chat .chat-history .message:after {\n        bottom: 100%;\n        left: 7%;\n        border: solid transparent;\n        content: \" \";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #86BB71;\n        border-width: 10px;\n        margin-left: -10px; }\n    .chat .chat-history .my-message {\n      background: #86BB71; }\n    .chat .chat-history .other-message {\n      background: #94C2ED; }\n      .chat .chat-history .other-message:after {\n        border-bottom-color: #94C2ED;\n        left: 93%; }\n  .chat .chat-message {\n    -ms-flex: 0 1 auto;\n        flex: 0 1 auto;\n    padding-top: 1rem; }\n    .chat .chat-message input {\n      width: 100%;\n      border: none;\n      padding: 10px 20px;\n      font: 14px/22px \"Lato\", Arial, sans-serif;\n      margin-bottom: 10px;\n      border-radius: 5px;\n      resize: none; }\n    .chat .chat-message .fa-file-o,\n    .chat .chat-message .fa-file-image-o {\n      font-size: 20px;\n      color: gray;\n      cursor: pointer; }\n\n.online,\n.offline,\n.me {\n  margin-right: 3px;\n  font-size: 10px; }\n\n.online {\n  color: #86BB71; }\n\n.offline {\n  color: #E38968; }\n\n.me {\n  color: #94C2ED; }\n\n.align-left {\n  text-align: left; }\n\n.align-right {\n  text-align: right; }\n\n.float-right {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-body/chat-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/_services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatBodyComponent = (function () {
    function ChatBodyComponent(_chat) {
        var _this = this;
        this._chat = _chat;
        this.loading = false;
        this.messages = [];
        console.log(__WEBPACK_IMPORTED_MODULE_2_moment__);
        this.socket = _chat.getSocket();
        this.socket.on('sendMessage', function (message) {
            console.log(message);
            _this.messages.push(message);
        });
    }
    ChatBodyComponent.prototype.ngOnInit = function () {
    };
    ChatBodyComponent.prototype.selectFile = function (fileinput) {
        fileinput.click();
    };
    ChatBodyComponent.prototype.handleFile = function (event, text) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            text.value = '';
            text.disabled = true;
            /*  const message = {
               from : this.me.username,
               to : this.chatwith.username,
               hasMsg: false,
               hasFile: true,
               fileLink: String,
               filename: String,
               time: Date.now(),
               file : fileList[0]
             }; */
        }
    };
    ChatBodyComponent.prototype.sendmsg = function (textInput, chatFile) {
        var _this = this;
        var fileList = chatFile.files;
        if (textInput.value) {
            this.loading = true;
            var message_1 = {};
            var text = textInput.value;
            text = text.trim();
            if (text) {
                message_1.hasMsg = true;
                message_1.hasFile = false;
                message_1.hasImg = false;
                message_1.message = text;
                message_1.from = this.me.username;
                message_1.to = this.chatwith.username;
                message_1.time = Date.now();
            }
            console.log(message_1);
            this.socket.emit('sendMessage', message_1, function (resp) {
                _this.loading = false;
                if (!resp.success) {
                    alert('error in sending message');
                }
                else {
                    _this.messages.push(message_1);
                }
            });
            textInput.value = '';
        }
        else if (fileList.length > 0) {
            this.loading = true;
            var file = fileList[0];
            var body = new FormData();
            var date = Date.now().toString;
            body.append('from', this.me.username);
            body.append('to', this.chatwith.username);
            body.append('filename', file.name);
            body.append('file', file, file.name);
            this._chat.chatfile(body)
                .subscribe(function (resp) {
                _this.loading = false;
                if (resp.response === 'success') {
                    var msg_1 = resp.message;
                    _this.socket.emit('sendMessage', msg_1, function (msgresp) {
                        _this.loading = false;
                        if (!msgresp.success) {
                            alert('error in sending message');
                        }
                        else {
                            _this.messages.push(msg_1);
                        }
                    });
                }
                else {
                    alert('error in sending message');
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatBodyComponent.prototype, "chatwith", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatBodyComponent.prototype, "me", void 0);
    ChatBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-body',
            template: __webpack_require__("../../../../../src/app/chat-body/chat-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-body/chat-body.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]])
    ], ChatBodyComponent);
    return ChatBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat-user-list/chat-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-lg-4 col-md-5\">\n    <nav class=\"navbar  navbar-expand-md\" role=\"navigation\">\n\n        <div class=\"people-list collapse navbar-collapse \" id=\"people-list\">\n            \n           \n\n        </div>\n    </nav>  \n</div>\n\n<app-chat-body [chatwith]=\"chatwith \" [me]=\"me \"></app-chat-body>\n -->\n<div class=\"row m-0\" style=\"height: 100%; width : 100%;\">\n    <div class=\"col-lg-4 col-md-5 p-0 userlist\">\n        <div class=\"sidebar-nav\">\n            <div class=\"navbar navbar-expand-md p-0\" role=\"navigation\">\n\n                <div class=\"navbar-collapse collapse sidebar-navbar-collapse people-list\">\n\n                    <div class=\"people-list-ul p-2 ml-3\">\n                        <div class=\"nav-item search p-2\">\n                            <input type=\"text\" class=\"nav-item\" class=\"mx-auto p-2\" placeholder=\"search\" (keyup)=\"search($event.target.value)\" />\n                            <i class=\"fa fa-search\"></i>\n                        </div>\n                        <ul class=\"nav navbar-nav list\">\n                            <li class=\"clearfix nav-item\" *ngFor=\"let user of OnlineUsers \" (click)=\"showChat(user) \">\n                                <img [src]=\"user.thumbnail \" alt=\"avatar \" class=\"rounded-circle profileImage \" />\n                                <div class=\"about \">\n\n                                    <div class=\"name \" [id]=\"user.username \">\n                                        {{ user.username }}</div>\n                                    <label><i class=\"fa fa-circle online \"></i>Online </label>\n                                </div>\n                            </li>\n                            <li class=\"clearfix nav-item\" *ngFor=\"let user of OfflineUsers \" (click)=\"showChat(user) \">\n                                <img [src]=\"user.thumbnail \" alt=\"avatar \" class=\"rounded-circle profileImage \" />\n                                <div class=\"about \">\n\n                                    <div class=\"name \" [id]=\"user.username \">{{ user.username }}</div>\n                                    <label><i class=\"fa fa-circle offline \"></i>Offline </label>\n\n                                </div>\n                            </li>\n                        </ul>\n\n                    </div>\n                </div>\n                <!--/.nav-collapse -->\n            </div>\n        </div>\n    </div>\n    <div class=\" col-lg-8 col-md-7 p-0 chatbox\">\n        <app-chat-body [chatwith]=\"chatwith \" [me]=\"me \"></app-chat-body>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-user-list/chat-user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/app/chat-user-list/style.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);", ""]);

// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  .row .userlist {\n    height: 100%;\n    -ms-flex: 1 0 0%;\n        flex: 1 0 0%; }\n  .row .chatbox {\n    -ms-flex: 1 1 100%;\n        flex: 1 1 100%; }\n\n.sidebar-nav {\n  height: 100%;\n  width: 100%; }\n  .sidebar-nav .navbar {\n    height: 100%;\n    overflow-y: visible; }\n\n.people-list {\n  height: 100%;\n  float: left;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n  .people-list .search {\n    width: auto; }\n  .people-list input {\n    border-radius: 5px;\n    border: none;\n    width: 100%;\n    color: white;\n    background: #6A6C75;\n    width: 90%;\n    font-size: 14px; }\n  .people-list .fa-search {\n    position: relative;\n    left: -25px; }\n  .people-list .people-list-ul {\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    flex-direction: column; }\n    .people-list .people-list-ul .nav-item {\n      display: block; }\n    .people-list .people-list-ul .list {\n      height: 100%;\n      max-height: 100%;\n      overflow-y: scroll; }\n    .people-list .people-list-ul .list::-webkit-scrollbar-track {\n      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n      background-color: #F5F5F5; }\n    .people-list .people-list-ul .list::-webkit-scrollbar {\n      width: 12px;\n      background-color: #F5F5F5; }\n    .people-list .people-list-ul .list::-webkit-scrollbar-thumb {\n      border-radius: 10px;\n      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n      background-color: #555; }\n  .people-list ul {\n    list-style-position: inside;\n    list-style-type: none;\n    padding: 20px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row; }\n    .people-list ul li {\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n      width: 100%;\n      padding-bottom: 20px; }\n      .people-list ul li div {\n        text-align: left; }\n  .people-list img {\n    float: left; }\n  .people-list .about {\n    float: left;\n    margin-top: 8px; }\n  .people-list .about {\n    padding-left: 8px; }\n  .people-list .status {\n    color: #92959E; }\n\n.profileImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 50px;\n  height: 50px;\n  left: 0; }\n\n.online,\n.offline,\n.me {\n  margin-right: 3px;\n  font-size: 10px; }\n\n.online {\n  color: #86BB71; }\n\n.offline {\n  color: #E38968; }\n\n.me {\n  color: #94C2ED; }\n\n.align-left {\n  text-align: left; }\n\n.align-right {\n  text-align: right; }\n\n.float-right {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-user-list/chat-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("../../../../../src/app/_services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatUserListComponent = (function () {
    function ChatUserListComponent(_chat, _authenticateService) {
        this._chat = _chat;
        this._authenticateService = _authenticateService;
    }
    ChatUserListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._authenticateService.currentUser.subscribe(function (resp) {
            if (resp) {
                _this.me = resp;
                _this._chat.online(_this.me.username);
                _this._chat.onlineUsers.subscribe(function (onlineusers) {
                    if (onlineusers) {
                        _this.onlineUsersarr = onlineusers;
                        _this._chat.getUsers()
                            .subscribe(function (allresp) {
                            _this.allUsers = allresp;
                            _this.OnlineUsers = _this.allUsers.filter(function (e) {
                                return _this.onlineUsersarr[e.username] && (e.username !== _this.me.username);
                            });
                            _this.OfflineUsers = _this.allUsers.filter(function (e) {
                                return !_this.onlineUsersarr[e.username] && (e.username !== _this.me.username);
                            });
                            _this.OnlineUsersCopy = _this.OnlineUsers.slice();
                            _this.OfflineUsersCopy = _this.OfflineUsers.slice();
                        });
                    }
                });
            }
        });
    };
    ChatUserListComponent.prototype.ngOnInit = function () {
    };
    ChatUserListComponent.prototype.showChat = function (val) {
        this.chatwith = val;
    };
    ChatUserListComponent.prototype.search = function (val) {
        val = val.trim();
        if (val) {
            var regex_1 = new RegExp('.*' + val + '.*', 'i');
            var newusers = this.OnlineUsersCopy.filter(function (e) {
                return regex_1.exec(e.username);
            });
            this.OnlineUsers = newusers;
            newusers = this.OfflineUsersCopy.filter(function (e) {
                return regex_1.exec(e.username);
            });
            this.OfflineUsers = newusers;
        }
        else {
            this.OnlineUsers = this.OnlineUsersCopy;
            this.OfflineUsers = this.OfflineUsersCopy;
        }
    };
    ChatUserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-user-list',
            template: __webpack_require__("../../../../../src/app/chat-user-list/chat-user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-user-list/chat-user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]])
    ], ChatUserListComponent);
    return ChatUserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: "\n\n<!-- Footer -->\n<footer>\n    <div class=\"container text-center\">\n        <p>Copyright &copy; Socializer 2018</p>\n        <p> created by Anubhav and Jyoti</p>\n    </div>\n</footer>\n  ",
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<app-navbar [user]=\"me\"></app-navbar>\n\n<!-- Intro Header -->\n<header class=\"masthead\">\n    <div class=\"intro-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_authenticateService, route, router) {
        var _this = this;
        this._authenticateService = _authenticateService;
        this.route = route;
        this.router = router;
        this._authenticateService.isLoggedIn()
            .subscribe(function (resp) {
            if (resp.message && resp.user) {
                _this.me = resp.user;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10 mx-auto\">\n    <div class=\"\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h1>Welcome to Socializer</h1>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"row\">\n                    <form name=\"form\" class='col-lg-10 mx-auto' (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                        <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n\n                            <input type=\"text\" class=\"form-control lowercase\" placeholder=\"username\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block error\">Username is required</div>\n                        </div>\n                        <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block error\">Password is required</div>\n                        </div>\n                        <div [style.display]=\"wrongPasswordAlert\" class=\"form-group alert alert-danger col-10 mx-auto\" role=\"alert\">\n                            {{ loginError }}\n                        </div>\n                        <div class=\"form-group\">\n                            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login\n                                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                                /></button>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  margin-top: 10px; }\n\nbutton {\n  margin-top: 10px; }\n\na {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n\n.lowercase {\n  text-transform: lowercase; }\n\n.titlecase {\n  text-transform: capitalize; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(_authenticateService, route, router) {
        this._authenticateService = _authenticateService;
        this.route = route;
        this.router = router;
        this.model = {};
        this.loading = false;
        this.wrongPasswordAlert = 'none';
        this.emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.phoneRegEx = /[0-9]{10,10}$/;
        this.loginError = '';
        this.emailvalid = true;
        this.phonevalid = true;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.wrongPasswordAlert = 'none';
        /* setTimeout(() => {
          this.loading = false;
        }, 2000); */
        this._authenticateService.login(this.model.username, this.model.password)
            .subscribe(function (resp) {
            console.log(resp);
            console.log(resp.message);
            if (resp.response !== 'success') {
                _this.loginError = resp.message;
                _this.wrongPasswordAlert = 'block';
            }
            else {
                _this.wrongPasswordAlert = 'none';
                _this.router.navigate(['/home']);
            }
            _this.loading = false;
            // this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
            _this.loginError = ' Server Error ';
            _this.loading = false;
        });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n    <div class=\"container\">\n        <a class=\"navbar-brand js-scroll-trigger\" href=\"/\">{{ title }}</a>\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                <div *ngIf=\"isLogin; then loginBlock; else registerBlock\"></div>\n                <ng-template #loginBlock>\n                    <a href=\"/register\" class=\"btn btn-outline-primary\">SignUp\n  <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n</a>\n                </ng-template>\n                <ng-template #registerBlock>\n                    <a href=\"/login\" class=\"btn btn-outline-primary\">LogIn\n    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n  </a>\n\n\n                </ng-template>\n\n            </li>\n\n        </ul>\n    </div>\n</nav>\n\n<!-- Intro Header -->\n<header class=\"masthead\">\n    <div class=\"intro-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div *ngIf=\"isLogin; then loginBlock1; else registerBlock1\"></div>\n                    <ng-template #loginBlock1>\n                        <app-login-form></app-login-form>\n                    </ng-template>\n\n                    <ng-template #registerBlock1>\n                        <app-register-form></app-register-form>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  margin-top: 10px; }\n\nbutton {\n  margin-top: 10px; }\n\na {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n\n.lowercase {\n  text-transform: lowercase; }\n\n.titlecase {\n  text-transform: capitalize; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_authenticateService, route, router) {
        this._authenticateService = _authenticateService;
        this.route = route;
        this.router = router;
        this.title = 'Socializer';
        this._authenticateService.logout();
        this.isLogin = !window.location.href.endsWith('/register');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<app-navbar [user]=\"me\"></app-navbar>\n\n<!-- Intro Header -->\n<header class=\"masthead\">\n    <div class=\"intro-body\">\n        <div class=\"container\">\n            <app-chat-user-list></app-chat-user-list>\n        </div>\n    </div>\n</header>\n<app-footer></app-footer>\n<!-- <ng-chat *ngIf=\"userId\" [adapter]=\"adapter\" [userId]=\"userId\" [historyEnabled]=\"false\">\n</ng-chat> -->"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 1.5%;\n  max-height: 100%;\n  height: 100%;\n  min-height: 100%;\n  background: #444753;\n  border-radius: 5px; }\n\n.intro-body {\n  max-height: 100%;\n  display: block;\n  height: 100%; }\n\n.masthead {\n  display: block !important; }\n\n.container {\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/_services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* import { join } from 'path'; */
var MessagesComponent = (function () {
    /*
     joinRoom() {
        this._chat.joinRoom(this.me.username);
      } */
    function MessagesComponent(_chat, _authenticateService, route, router) {
        var _this = this;
        this._chat = _chat;
        this._authenticateService = _authenticateService;
        this.route = route;
        this.router = router;
        this._authenticateService.isLoggedIn()
            .subscribe(function (resp) {
            if (resp.message && resp.user) {
                _this.me = resp.user;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-md navbar-light fixed-top\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n        <div *ngIf=\"user && user.admin; then adminBlock; else userBlock\"></div>\r\n        <ng-template #adminBlock>\r\n            <a class=\"navbar-brand js-scroll-trigger\" href=\"/admin\">{{ title }}</a>\r\n        </ng-template>\r\n\r\n        <ng-template #userBlock>\r\n            <a class=\"navbar-brand js-scroll-trigger\" href=\"/home\">{{ title }}</a>\r\n        </ng-template>\r\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  Menu\r\n                  <i class=\"fa fa-bars\"></i>\r\n                </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav ml-auto pull-right\">\r\n                <li class=\"nav-item\">\r\n                    <div class='searchDiv'>\r\n                        <form name=\"form searchBar\">\r\n                            <input type=\"text\" autocomplete=off class=\"form-control lowercase pull-right\" placeholder=\"search\" name=\"search\" (keyup)=\"search($event)\" />\r\n                        </form>\r\n                        <div class=\"searchResults\" *ngIf=\"items && items.length \">\r\n                            <div class=\"searchResultItem\" *ngFor=\"let item of items\">\r\n\r\n                                <img [src]='item.thumbnail' height='35px' width='35px'>\r\n                                <div><a [href]=\"'/profile/'+ item.username\">{{ item.username }}</a></div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"btn btn-outline-success buttonIcon pull-right\" (click)=\"logout()\"><span class=\"buttonText\"> {{ user.username }} &nbsp;</span><i class='fa fa-user'></i></a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"user && user.admin \">\r\n                    <a class=\"btn btn-outline-success buttonIcon pull-right\" id=\"requestsButton\" href=\"/admin/requests\"><span class=\"buttonText\">Requests&nbsp;</span><i class='fa fa-user-plus'></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"btn btn-outline-success buttonIcon pull-right\" href=\"/messages\"><span class=\"buttonText\">messages&nbsp;</span><i class='fa fa-envelope'></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"btn btn-outline-success buttonIcon pull-right\" (click)=\"logout()\"><span class=\"buttonText\">logout&nbsp;</span><i class='fa fa-sign-out'></i></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(_userService) {
        this._userService = _userService;
        this.focusOnSearch = false;
        this.title = 'socializer';
        this.searchText = '';
        // const path = window.location.pathname ;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.search = function (event) {
        var _this = this;
        event.preventDefault();
        var text = event.target.value;
        text = text.trim();
        if (text && text.length > 2 && text !== this.searchText) {
            this.searchText = text;
            console.log(text);
            this._userService.search(text)
                .subscribe(function (resp) {
                console.log(resp);
                _this.items = resp;
            });
        }
        if (text && text.length < 3) {
            this.items = [];
            this.searchText = '';
        }
    };
    NavbarComponent.prototype.logout = function () {
        console.log('logout');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "user", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: ["\n  .searchDiv {\n    width : 100%;\n    position: relative;\n  }\n  .searchBar {\n    width : 100%;\n    height : 50px;\n  }\n  .searchResultItem {\n    height : 37px;\n    max-height : 37px;\n  }\n    .searchResultItem img{\n      position : absolute ;\n\n  }\n      .searchResultItem div{\n     margin-left : 37px;\n     overflow: hidden;\n\n  }\n  .searchResults {\n    position: absolute;\n    width: 100% ;\n    background: #444;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    max-height: 200px;\n    overflow-y: auto;\n    border: 1px solid gray;\n\n    left: 0;\n    right: 0;\n    top: 30px;\n  }\n\n  .lowercase {\n    text-transform: lowercase;\n}\n  i {\n    width : 1rem ;\n  }\n  .buttonIcon {\n    margin-left : 1rem ;\n  }\n@media (max-width: 767px) {\n  .buttonIcon .buttonText {\n     min-width: 10rem;\n  }\n}\n\n .buttonIcon .buttonText {\n  max-width: 0;\n  -webkit-transition: max-width 1s;\n  transition: max-width 1s;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.buttonIcon:hover .buttonText {\n  max-width: 10rem;\n}\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<app-navbar [user]=\"user\"></app-navbar>\n\n<!-- Intro Header -->\n<header class=\"masthead\">\n    <div class=\"intro-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 col-10 mx-auto\">\n                    <!-- <img [src]=\"user.imglink\" class=\"rounded-circle profileImage\" alt=\"Profile Picture\" height=\"125px\" width=\"125px\"> -->\n\n                    <div class=\"container\">\n                        <div class=\"card\">\n                            <div class=\"row p-3\">\n                                <div class=\"col-lg-5 m-auto\">\n                                    <img [src]=\"user.imglink\" class=\"rounded-circle profileImage\">\n                                </div>\n                                <div class=\"col-lg-7\">\n                                    <div class=\"card-block\">\n                                        <h4 class=\"card-title\">{{ ' ' +user.username }}</h4>\n                                        <p class=\"card-text\">{{ ' '+user.fullname }}</p>\n                                        <p class=\"card-text\"><i class=\"fa fa-envelope\"></i>{{ ' '+user.email }}</p>\n                                        <p class=\"card-text\"><i class=\"fa fa-phone\"></i>{{ ' '+user.phoneNo }}</p>\n                                        <p class=\"card-text\"><i class=\"fa fa-user\"></i>{{ ' '+user.gender }}</p>\n                                        <p class=\"card-text\"><i class=\"fa fa-birthday-cake\"></i>{{ ' '+user.dob }}</p>\n                                        <p *ngIf=\"true && user.description\" class=\"card-text\"><i class=\"fa fa-file\"></i>{{ ' '+user.description }}</p>\n\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 200px;\n  height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(_userservice, route) {
        var _this = this;
        this._userservice = _userservice;
        this.route = route;
        this.user = {
            username: ''
        };
        this.route.params.subscribe(function (params) {
            _this._userservice.getuser(params.username)
                .subscribe(function (resp) {
                console.log(resp);
                var date = new Date(resp.dob);
                resp.dob = date.getDate() + '-' + (date.getUTCMonth() + 1) + '-' + date.getFullYear();
                _this.user = resp;
            });
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 col-md-8 col-10 mx-auto form-box\">\n    <form name=\"form\" enctype=\"multipart/form-data\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div [style.display]=\"firstpage\">\n            <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted }\">\n                <input type=\"file\" style=\"display:none;\" #profilePic accept=\"image/*\" (change)='handleFile($event,imgPreview)' />\n                <div class=\"outerBox mx-auto\">\n                    <img src=\"/assets/img/default.png\" #imgPreview class=\"rounded-circle profileImage\" alt=\"Select Your Image\" height=\"125px\" width=\"125px\">\n                    <div class=\"overlay\">\n                        <div class=\"centerMessage\" (click)=\"selectImage(profilePic)\"><label> Upload Image </label></div>\n                        <div class=\"cornerButton\" [style.display]=\"imageSelected\" (click)=\"rotate90(imgPreview)\"> <i class=\"fa fa-repeat\" style=\"font-size:25px;\"></i>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"col-12 mx-auto\"><label><strong>Username </strong></label></div>\n            <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n\n                <input type=\"text\" class=\"form-control lowercase\" placeholder=\"Username\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required (blur)='checkUsername($event.target.value)' (keypress)=\"avoidSpaceUsername($event)\" />\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block error\">Username is required</div>\n                <div *ngIf=\"userAlredyExists\" class=\"help-block error\">Username already taken. Try another One</div>\n                <div *ngIf=\"usernameTooShort\" class=\"help-block error\">Username too short</div>\n            </div>\n            <div class=\"col-12 mx-auto\"><label><strong>E-Mail </strong></label></div>\n            <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n\n                <input type=\"email\" class=\"form-control lowercase\" placeholder=\"E-Mail\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required (blur)='checkEmail($event.target.value)' (keypress)=\"avoidSpaceEmail($event)\" />\n\n                <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block error\">email is required</div>\n                <div *ngIf=\"!emailvalid\" class=\"help-block error\">enter valid email</div>\n                <div *ngIf=\"emailAlredyExists\" class=\"help-block error\">Email already registered. Try another One</div>\n\n\n            </div>\n            <div class=\"col-12 mx-auto\"><label><strong>Phone Number </strong></label></div>\n            <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !phoneNo.valid }\">\n\n                <input type=\"tel\" class=\"form-control\" placeholder=\"Phone Number\" name=\"phoneNo\" [(ngModel)]=\"model.phoneNo\" #phoneNo=\"ngModel\" required (blur)='checkPhone($event.target.value)' (keypress)=\"avoidSpacePhone($event)\" />\n\n\n                <div *ngIf=\"f.submitted && !phoneNo.valid\" class=\"help-block error\">Phone Number is required</div>\n                <div *ngIf=\"!phonevalid\" class=\"help-block error\">enter valid phone number</div>\n                <div *ngIf=\"phoneAlredyExists\" class=\"help-block error\">Phone already registered. Try another One</div>\n\n\n            </div>\n            <div class=\"form-group col-12\">\n                <button class=\"btn btn-primary\" (click)='nextPage()' type=\"button\">Next <i class=\"fa fa-angle-right\"></i></button>\n            </div>\n\n\n        </div>\n\n        <div [style.display]=\"lastpage\">\n\n\n            <div class=\"col-12 mx-auto\"><label><strong>Full Name</strong></label></div>\n            <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !fullname.valid }\">\n\n                <input type=\"text\" class=\"form-control lowecase\" placeholder=\"Full Name\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !fullname.valid\" class=\"help-block error\">Name is required</div>\n            </div>\n            <div class=\"col-12 mx-auto\"><label><strong>Gender </strong></label></div>\n            <div class=\"form-group col-12\">\n                <div class=\"btn-group\" role=\"group\">\n\n                    <button type=\"button\" (click)=\"radioClick('male')\" class='btn btn-outline-light' [class.active]='isMale' name=\"gender\" id=\"optionMale\" value=\"male\">Male <i class=\"fa fa-male\"></i></button>\n                    <button type=\"button\" (click)=\"radioClick('female')\" class='btn btn-outline-light' [class.active]='!isMale' name=\"gender\" id=\"optionFemale\" value=\"female\">Female\n  <i class=\"fa fa-female\"></i>\n</button>\n\n                </div>\n\n            </div>\n            <div class=\"col-12 mx-auto\"><label><strong>Date Of Birth</strong></label></div>\n            <div class=\"form-group col-12\" [ngClass]=\"{ 'has-error': f.submitted && !dob.valid }\">\n                <input onfocus=\"(this.type='date')\" class=\"form-control\" placeholder=\"Date Of Birth\" name=\"dob\" [(ngModel)]=\"model.dob\" #dob=\"ngModel\" required />\n\n                <div *ngIf=\"f.submitted && !dob.valid\" class=\"help-block error\">Date of Birth is required</div>\n            </div>\n            <div class=\"col-12 mx-auto\"><label><strong>Description</strong></label></div>\n            <div class=\"form-group col-12\">\n\n                <textarea name=\"description\" class=\"col-12 form-control\" rows=\"3\" placeholder=\"Description\" [(ngModel)]=\"model.description\" #description=\"ngModel\"></textarea>\n\n\n            </div>\n\n            <div class=\"form-group col-12\">\n\n                <button class=\"btn btn-primary col-md-4 col-6\" type=\"button\" (click)=\"prevPage()\"><i class=\"fa fa fa-angle-left\"></i> Previous</button>\n\n\n                <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary col-md-4 col-6\">register <i class=\"fa fa-user-plus\"></i>\n                                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                                                /></button>\n\n\n            </div>\n        </div>\n        <div [style.display]=\"infopage\">\n            <div [style.display]='registerInfo' class=\"alert alert-info col-10 mx-auto\" role=\"alert\">\n                Request Submitted.\n                <br> You will recieve a email with your password when admin will approve your request.\n            </div>\n            <div [style.display]='registerError' class=\"alert alert-danger col-10 mx-auto\" role=\"alert\">\n                {{ errorMessage }}\n            </div>\n            <div>\n                <a href=\"/login\" class=\"btn btn-primary\">LogIn\n    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n  </a>\n                <a href=\"/register\" class=\"btn btn-primary\">SignUp\n    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n  </a>\n            </div>\n        </div>\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  margin-top: 10px; }\n\nbutton {\n  margin-top: 10px; }\n\na {\n  margin-top: 10px; }\n\n.error {\n  color: red; }\n\n.lowercase {\n  text-transform: lowercase; }\n\n.titlecase {\n  text-transform: capitalize; }\n\nstrong {\n  color: black; }\n\n.outerBox {\n  position: relative;\n  margin-top: 50px;\n  width: 125px;\n  height: 125px;\n  border-radius: 50%; }\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: transparent;\n  transition: background 0.5s ease; }\n\n.outerBox:hover .overlay {\n  display: block;\n  background: rgba(0, 0, 0, 0.3); }\n\n.profileImage {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 125px;\n  height: 125px;\n  left: 0; }\n\n.centerMessage {\n  border: whitesmoke 1px dotted;\n  border-radius: 20%;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 80px;\n  text-align: center;\n  opacity: 0;\n  transition: opacity .35s ease; }\n\n.cornerButton {\n  position: absolute;\n  width: 125px;\n  left: 51px;\n  top: 108px;\n  text-align: center;\n  opacity: 1;\n  z-index: 1; }\n\n.cornerButton:hover {\n  opacity: 1.0;\n  box-shadow: none; }\n\n.outerBox:hover .centerMessage {\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/_services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validator_service__ = __webpack_require__("../../../../../src/app/_services/validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterFormComponent = (function () {
    function RegisterFormComponent(_authenticateService, _validaterService, route, router) {
        this._authenticateService = _authenticateService;
        this._validaterService = _validaterService;
        this.route = route;
        this.router = router;
        this.model = {
            gender: 'male'
        };
        this.errorMessage = 'Server Error.\n Please try after some time.';
        this.loading = false;
        this.emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.phoneRegEx = /^\d{10}$/;
        this.registerError = 'none';
        this.registerInfo = 'none';
        this.isMale = true;
        this.imageSelected = 'none';
        this.usernameTooShort = false;
        this.userAlredyExists = false;
        this.emailAlredyExists = false;
        this.phoneAlredyExists = false;
        this.firstpage = 'block';
        this.infopage = 'none';
        this.lastpage = 'none';
        this.emailvalid = true;
        this.phonevalid = true;
    }
    RegisterFormComponent.prototype.handleFile = function (event, imgPreview) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            imgPreview.style.transform = 'rotate(0deg)';
            this.model.rotation = 0;
            this.imageSelected = 'block';
            var file = fileList[0];
            this.model.file = file;
            var reader = new FileReader();
            reader.onload = function (ev) {
                var target = ev.target;
                imgPreview.src = target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    RegisterFormComponent.prototype.rotate90 = function (imgtag) {
        var ang = parseInt(this.model.rotation, 0) || 0;
        imgtag.style.transform = 'rotate(' + (90 + ang) + 'deg)';
        this.model.rotation = (90 + ang) % 360;
    };
    RegisterFormComponent.prototype.checkUsername = function (value) {
        var _this = this;
        this.usernameTooShort = value.length < 6;
        if (!this.usernameTooShort) {
            this._validaterService.usernameValid(value)
                .subscribe(function (resp) {
                _this.userAlredyExists = !resp.response;
                if (resp.response) {
                    _this.model.username = value;
                }
            }, function (err) {
            });
        }
    };
    RegisterFormComponent.prototype.avoidSpaceUsername = function (event) {
        if (event.which === 32) {
            return false;
        }
        this.usernameTooShort = false;
        this.userAlredyExists = false;
    };
    RegisterFormComponent.prototype.checkEmail = function (value) {
        var _this = this;
        var a = value.match(this.emailRegEx);
        if (a === null) {
            this.emailvalid = false;
        }
        else {
            this.emailvalid = true;
            this._validaterService.emailValid(value)
                .subscribe(function (resp) {
                _this.emailAlredyExists = !resp.response;
                if (resp.response) {
                    _this.model.email = value;
                }
            }, function (err) {
            });
        }
    };
    RegisterFormComponent.prototype.avoidSpaceEmail = function (event) {
        if (event.which === 32) {
            return false;
        }
        this.emailAlredyExists = false;
    };
    RegisterFormComponent.prototype.checkPhone = function (value) {
        var _this = this;
        var a = value.match(this.phoneRegEx);
        if (a === null) {
            this.phonevalid = false;
        }
        else {
            this.phonevalid = true;
            this._validaterService.phoneNoValid(value)
                .subscribe(function (resp) {
                _this.phoneAlredyExists = !resp.response;
                if (resp.response) {
                    _this.model.phoneNo = value;
                }
            }, function (err) {
            });
        }
    };
    RegisterFormComponent.prototype.avoidSpacePhone = function (event) {
        this.phoneAlredyExists = false;
    };
    RegisterFormComponent.prototype.nextPage = function () {
        if (this.model.username && this.model.email && this.model.phoneNo) {
            if (this.emailvalid && this.phonevalid && !this.userAlredyExists && !this.usernameTooShort) {
                this.lastpage = 'block';
                this.firstpage = 'none';
                this.infopage = 'none';
            }
        }
        else {
            this.emailvalid = this.model.email && true;
            this.phonevalid = this.model.phoneNo && true;
            this.usernameTooShort = this.model.phoneNo ? this.model.phoneNo.length > 6 : true;
        }
    };
    RegisterFormComponent.prototype.prevPage = function () {
        this.lastpage = 'none';
        this.firstpage = 'block';
        this.infopage = 'none';
    };
    RegisterFormComponent.prototype.ngOnInit = function () {
    };
    RegisterFormComponent.prototype.register = function () {
        var _this = this;
        this.registerError = 'none';
        this.registerInfo = 'none';
        // console.log(this.model);
        this.loading = true;
        var body = new FormData();
        for (var _i = 0, _a = Object.keys(this.model); _i < _a.length; _i++) {
            var i = _a[_i];
            if (i !== 'file') {
                body.append(i, this.model[i]);
            }
        }
        if (this.model.file) {
            body.append('file', this.model.file, this.model.file.name);
            delete this.model.file;
        }
        console.log(body);
        this._authenticateService.register(body)
            .subscribe(function (resp) {
            console.log(resp);
            _this.lastpage = 'none';
            _this.firstpage = 'none';
            _this.infopage = 'block';
            if (resp.response === 'success') {
                _this.registerError = 'none';
                _this.registerInfo = 'block';
            }
            else {
                _this.errorMessage = resp.message || _this.errorMessage;
                _this.registerError = 'block';
                _this.registerInfo = 'none';
            }
        }, function (err) {
            console.log(err);
            _this.lastpage = 'none';
            _this.firstpage = 'none';
            _this.infopage = 'block';
            _this.registerError = 'block';
            _this.registerInfo = 'none';
        });
    };
    RegisterFormComponent.prototype.selectImage = function (profilePic) {
        console.log(profilePic);
        profilePic.click();
    };
    RegisterFormComponent.prototype.radioClick = function (value) {
        this.isMale = value === 'male';
        this.model.gender = value;
        console.log(value);
    };
    RegisterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__("../../../../../src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-form/register-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_validator_service__["a" /* ValidatorService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/temp/temp.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" name=\"message-to-send\" #text id=\"message-to-send\" placeholder=\"Type your message\">\n\n<input type=\"file\" #chatFile (change)='handleFile($event,text)' />"

/***/ }),

/***/ "../../../../../src/app/temp/temp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TempComponent = (function () {
    function TempComponent() {
    }
    TempComponent.prototype.ngOnInit = function () {
    };
    TempComponent.prototype.handleFile = function (event, text) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            text.value = '';
            text.disabled = true;
            console.log(fileList);
        }
    };
    TempComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-temp',
            template: __webpack_require__("../../../../../src/app/temp/temp.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], TempComponent);
    return TempComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/app/chat-user-list/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\r\n    .sidebar-nav .navbar .navbar-collapse {\r\n        padding: 0;\r\n        max-height: 100%;\r\n    }\r\n    .sidebar-nav .navbar ul {\r\n        float: none;\r\n        display: block;\r\n    }\r\n    .sidebar-nav .navbar .nav-item {\r\n        float: none;\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    /*     .chatbox {\r\n        display: none;\r\n    } */\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map