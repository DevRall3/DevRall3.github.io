class Bicycle {
    constructor(gear,multiplier){
    this._gear=gear
    this._multiplier=multiplier
    }
    get gear(){
    return this._gear * this._multiplier;
    }
    set gear(newGear) {
    this._gear = newGear * this._multiplier;
    }
    }
    const bicycle = new Bicycle(2,3)
    console.log(bicycle.gear);
    bicycle.gear = 2;
    console.log(bicycle.gear);