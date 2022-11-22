let start = 10;
let end = 16;

let hour = 60; //min
let slot = 15; //min

let bookedSlot1Start = 11.5;
let bookedSlot1end = 12;

let bookedSlot2Start = 12.25;
let bookedSlot2end = 13.25;
let totalSlots;
(function getAvailableSlots() {
    let totalTime = (end - start) * hour;
    totalSlots = totalTime / slot;
    let time1 = (((bookedSlot1end - bookedSlot1Start) * hour) / slot);
    let time2 = (((bookedSlot2end - bookedSlot2Start) * hour) / slot);
    totalSlots -= time1;
    totalSlots -= time2;
    console.log("Available Slots : ", totalSlots)
})();

let data = { 
    keshwar: { 
        weight: 5, 
        length: 6 
    }, 
    norma: {
         weight: 4, 
         length: 5 
    }, 
    izusu: { 
        weight: 1, 
        length: 4 
    }, 
    ninomi: { 
        weight: 7, 
        length: 9 ,
        izusu: { 
            weight: 1, 
            length: 4 
        }, 
    } 
}

for (const key in data) {
    let currentNode = data[key];
    let temp = `${key} me ${JSON.stringify(currentNode['izusu'])} ye mila` || ` ${key} me kuch nhi hai `;
    console.log(temp);
}
