class Patient {
    constructor(id, locations=[]) {
        this.id = id;
        this.locations = locations;
    }


};


class Location {

    constructor(startDate, endDate, city, location) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.city = city;
        this.location = location;
    }

};


export { Patient, Location };
