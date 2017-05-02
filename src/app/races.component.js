"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var races_service_1 = require("./races.service");
var RacesComponent = (function () {
    function RacesComponent(raceService) {
        this.raceService = raceService;
        this.heading = "Asphalt 8";
        this.cash = 10000;
    }
    ;
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raceService.getRaces()
            .subscribe(function (data) { return _this.races = data; });
    };
    RacesComponent.prototype.castDate = function (dates) {
        return new Date(dates);
    };
    RacesComponent.prototype.enterRace = function (race) {
        if (this.cashLeft() - race.entryFee > 0) {
            race.isRacing = true;
        }
        else {
            alert("You don't have enough cash");
        }
    };
    RacesComponent.prototype.cancelRace = function (race) {
        race.isRacing = false;
    };
    RacesComponent.prototype.totalCost = function () {
        var sum = 0;
        if (Array.isArray(this.races)) {
            for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
                var race = _a[_i];
                if (race.isRacing)
                    sum += race.entryFee;
            }
        }
        return sum;
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalCost();
    };
    return RacesComponent;
}());
RacesComponent = __decorate([
    core_1.Component({
        selector: 'my-races',
        templateUrl: './races.component.html',
        styleUrls: ['./races.component.css']
    }),
    __metadata("design:paramtypes", [races_service_1.RaceService])
], RacesComponent);
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map