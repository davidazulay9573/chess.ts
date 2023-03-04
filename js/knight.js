import { GameTool } from "./tools.js";
export class Knight extends GameTool {
    setsOfMovs() {
        this.possibleSlots = [];
        let divs = this.chesBoard.querySelectorAll("div");
        divs.forEach((div) => {
            var _a, _b;
            if (this.location.row - Number(div.id[0]) > 3 ||
                this.location.col - Number(div.id[1]) > 3 ||
                Number(div.id[0]) - this.location.row > 3 ||
                Number(div.id[1]) - this.location.col > 3) {
            }
            else {
                if (this.location.row - Number(div.id[0]) == 7 ||
                    this.location.row - Number(div.id[0]) == 1 ||
                    Number(div.id[0]) - this.location.row == 7 ||
                    Number(div.id[0]) - this.location.row == 1) {
                    if (this.location.col - Number(div.id[1]) == 6 ||
                        this.location.col - Number(div.id[1]) == 2 ||
                        Number(div.id[1]) - this.location.col == 6 ||
                        Number(div.id[1]) - this.location.col == 2) {
                        div.setAttribute("ondrop", "drop(event)");
                        div.setAttribute("ondragover", "allowDrop(event)");
                        this.possibleSlots.push(Number(div.id));
                        if (!div.querySelector("img") ||
                            ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != this.color) {
                        }
                    }
                }
            }
            if (this.location.row - Number(div.id[0]) > 3 ||
                this.location.col - Number(div.id[1]) > 3 ||
                Number(div.id[0]) - this.location.row > 3 ||
                Number(div.id[1]) - this.location.col > 3) {
            }
            else {
                if (this.location.row - Number(div.id[0]) == 6 ||
                    this.location.row - Number(div.id[0]) == 2 ||
                    Number(div.id[0]) - this.location.row == 6 ||
                    Number(div.id[0]) - this.location.row == 2) {
                    if (this.location.col - Number(div.id[1]) == 7 ||
                        this.location.col - Number(div.id[1]) == 1 ||
                        Number(div.id[1]) - this.location.col == 7 ||
                        Number(div.id[1]) - this.location.col == 1) {
                        div.setAttribute("ondrop", "drop(event)");
                        div.setAttribute("ondragover", "allowDrop(event)");
                        this.possibleSlots.push(Number(div.id));
                        if (!div.querySelector("img") ||
                            ((_b = div.querySelector("img")) === null || _b === void 0 ? void 0 : _b.id[0]) != this.color) {
                        }
                    }
                }
            }
        });
        this.possibleSlots = this.possibleSlots.filter((location) => {
            return location != Number(this.htmlElement.parentElement.id);
        });
    }
}
