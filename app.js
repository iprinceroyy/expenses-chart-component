"use strict";

fetch("data.json")
    .then((Response) => Response.json())
    .then((jsonData) => {
        jsonData.forEach((data) => {
            console.log(data);
            document.querySelector(
                `.js-${data.day}`
            ).textContent = `$${data.amount}`;
        });
    });