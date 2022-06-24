"use strict";
const dataFile = async() => {
    const url = "./data.json";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};
dataFile();