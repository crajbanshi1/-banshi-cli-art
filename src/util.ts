export function curentDateTime(){
    const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

return n +" " + time;
}