'use_strict';
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let countDiv = document.querySelectorAll('.divItem').length;
        if (countDiv == null) {
            countDiv = 0;
        }


        document.body.innerHTML += `<div id = \"div${countDiv}\" class = "divItem">Hello</div>`;
        let myDiv = document.getElementById(`div${countDiv}`);
        myDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     let opt = new Options();
//     opt.createDiv();
//     opt.createDiv();
// });

let myBtn = document.addEventListener("click", function () {
    let opt = new Options("100", "200", "red", "200%", "center");
    opt.createDiv();
});