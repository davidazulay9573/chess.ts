import { Rook } from "./rook.js";
export class Skipping {
    constructor(tool) {
        this.chesBoard = document.querySelector("#chessboard");
        this.forTool = tool;
    }
    skipLimitStrat() {
        let divs = this.chesBoard.querySelectorAll("div");
        let filterDivs = Array.from(divs).filter((div) => {
            return (this.forTool.location.col == Number(div.id[1]) ||
                this.forTool.location.row == Number(div.id[0]));
        });
        filterDivs.forEach((div) => {
            let tool = div.querySelector("img");
            if (div.querySelector("img")) {
                if (Number(tool.parentElement.id[1]) == this.forTool.location.col) {
                    if (this.forTool.location.row > Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[0]) < Number(tool.parentElement.id[0])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                    if (this.forTool.location.row < Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[0]) > Number(tool.parentElement.id[0])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                }
                if (Number(tool.parentElement.id[0]) == this.forTool.location.row) {
                    if (this.forTool.location.col < Number(tool.parentElement.id[1])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) > Number(tool.parentElement.id[1])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                    if (this.forTool.location.col > Number(tool.parentElement.id[1])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) < Number(tool.parentElement.id[1])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                }
            }
        });
    }
    skipLimitDiagonal() {
        let divs = this.chesBoard.querySelectorAll("div");
        let filterDivs = Array.from(divs).filter((div) => {
            return (this.forTool.location.row - Number(div.id[0]) ==
                this.forTool.location.col - Number(div.id[1]) ||
                Number(div.id[0]) - this.forTool.location.row ==
                    this.forTool.location.col - Number(div.id[1]));
        });
        filterDivs.forEach((div) => {
            let tool = div.querySelector("img");
            if (div.querySelector("img")) {
                if (this.forTool.location.col < Number(tool.parentElement.id[1])) {
                    if (this.forTool.location.row < Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) > Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) > Number(tool.parentElement.id[0])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                    if (this.forTool.location.row > Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) > Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) < Number(tool.parentElement.id[0])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                }
                if (this.forTool.location.col > Number(tool.parentElement.id[1])) {
                    if (this.forTool.location.row > Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) < Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) < Number(tool.parentElement.id[0])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                    if (this.forTool.location.row < Number(tool.parentElement.id[0])) {
                        filterDivs.forEach((div) => {
                            if (Number(div.id[1]) < Number(tool.parentElement.id[1]) &&
                                Number(div.id[0]) > Number(tool.parentElement.id[0])) {
                                div.removeAttribute("ondrop");
                                div.removeAttribute("ondragover");
                                div.removeAttribute("data-toggle");
                                this.forTool.possibleSlots.forEach((location) => {
                                    if (location == Number(div.id)) {
                                        let index = this.forTool.possibleSlots.indexOf(location);
                                        this.forTool.possibleSlots.splice(index, 1);
                                    }
                                });
                            }
                        });
                    }
                }
            }
        });
    }
    castling(div, king) {
        var _a, _b, _c;
        if (king.orderOfMovements.length === 1) {
            if (this.forTool.location.row == Number(div.id[0])) {
                if (this.forTool.location.col == Number(div.id[1]) - 2) {
                    div.setAttribute("ondrop", "drop(event)");
                    div.setAttribute("ondragover", "allowDrop(event)");
                    if (!div.querySelector("img") ||
                        ((_a = div.querySelector("img")) === null || _a === void 0 ? void 0 : _a.id[0]) != king.color) {
                        div.setAttribute("data-toggle", "canMove");
                    }
                    king.htmlElement.addEventListener("dragend", () => {
                        var _a, _b, _c;
                        if (king.orderOfMovements.length == 1) {
                            let tool = (_a = document
                                .getElementById(`${king.location.row}7`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
                            if (tool.id[1] == "k") {
                                let rookOldLocation = document.getElementById(`${this.forTool.location.row}8`);
                                (_b = rookOldLocation.querySelector("img")) === null || _b === void 0 ? void 0 : _b.remove();
                                const rook = new Rook(king.color, `${king.color}rook1`, `./${king.color.toLowerCase()}R.png`);
                                (_c = document
                                    .getElementById(`${this.forTool.location.row}6`)) === null || _c === void 0 ? void 0 : _c.appendChild(rook.htmlElement);
                                rook.htmlElement.addEventListener("mousedown", () => {
                                    rook.Initialize();
                                });
                            }
                        }
                    });
                }
                else {
                    if (this.forTool.location.col == Number(div.id[1]) + 2) {
                        if (((_b = document.getElementById(`${this.forTool.location.row}2`)) === null || _b === void 0 ? void 0 : _b.children.length) == 0) {
                            div.setAttribute("ondrop", "drop(event)");
                            div.setAttribute("ondragover", "allowDrop(event)");
                            if (!div.querySelector("img") ||
                                ((_c = div.querySelector("img")) === null || _c === void 0 ? void 0 : _c.id[0]) != king.color) {
                                div.setAttribute("data-toggle", "canMove");
                                div.setAttribute("data-values", JSON.stringify([king]));
                            }
                            king.htmlElement.addEventListener("dragend", (event) => {
                                var _a, _b, _c;
                                if (king.orderOfMovements.length == 1) {
                                    console.log(1);
                                    let tool = (_a = document
                                        .getElementById(`${this.forTool.location.row}3`)) === null || _a === void 0 ? void 0 : _a.querySelector("img");
                                    if (tool.id[1] == "k") {
                                        let rookOldLocation = document.getElementById(`${this.forTool.location.row}1`);
                                        (_b = rookOldLocation.querySelector("img")) === null || _b === void 0 ? void 0 : _b.remove();
                                        const rook = new Rook(king.color, `${king.color}rook2`, `./${king.color.toLowerCase()}R.png`);
                                        (_c = document
                                            .getElementById(`${this.forTool.location.row}4`)) === null || _c === void 0 ? void 0 : _c.appendChild(rook.htmlElement);
                                        rook.htmlElement.addEventListener("mousedown", () => {
                                            rook.Initialize();
                                            console.log(rook.location);
                                        });
                                    }
                                }
                            });
                        }
                    }
                }
            }
        }
    }
}
