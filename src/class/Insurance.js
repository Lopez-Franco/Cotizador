export class Insurance {
    constructor(costMts2 = 35.86,property,location,mts2){        
        this.costMts2 = parseFloat(costMts2);
        this.property = property
        this.location = location
        this.mts2 = parseInt(mts2)
    }
    costInsurance(){
        let r = (this.costMts2 * this.property.factor * this.location.factor * this.mts2);
        return r.toFixed(2);
    }

    
}