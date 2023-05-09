let car = {
        make: "Honda",
        model: "Civic",
        year: 2012,
        mileage: 70000,
        color: "Red",
    
    driveTowork: () => {
        console.log((`Old Mileage: ${car.mileage}`));
            car.mileage = car.mileage + 33;
            console.log((`New Mileage: ${car.mileage}`));
    },
    driveAroundTheWorld: () => {
        console.log((`Old Mileage: ${car.mileage}`));
            car.mileage = car.mileage + 24000;
            console.log((`New Mileage: ${car.mileage}`))
    },
    runErrands: () => {
        console.log((`Old Mileage: ${car.mileage}`));
            car.mileage = car.mileage + 30;
            console.log((`New Mileage: ${car.mileage}`))
    }};

car.driveTowork();
car.driveAroundTheWorld();
car.runErrands();