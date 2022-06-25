"use strict";

fetch("data.json")
    .then((Response) => Response.json())
    .then((jsonData) => {
        jsonData.forEach((data) => {
            document.querySelector(
                `.js-${data.day}`
            ).textContent = `$${data.amount}`;

            const bar = document.querySelector(`.${data.day}`);
            let clicked = false;

            bar.addEventListener("click", (e) => {
                const popper = document.querySelector(
                    `.popper-${e.path[0].classList[1]}`
                );

                // If bar is once clicked, then hide popper else show
                if (!clicked) {
                    popper.classList.add("animate-grow");
                    popper.classList.remove("animate-shrink");
                } else {
                    popper.classList.add("animate-shrink");
                    popper.classList.remove("animate-grow");
                }

                // Change the state of clicked
                clicked = !clicked;
            });
        });
    });

function grow() {}