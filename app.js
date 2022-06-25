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

                // if bar is once clicked, then hide popper else show
                clicked
                    ?
                    (popper.style.visibility = "hidden") :
                    (popper.style.visibility = "visible");

                // Change state of clicked
                clicked = !clicked;
            });
        });
    });