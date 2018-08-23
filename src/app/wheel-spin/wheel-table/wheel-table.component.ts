import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-wheel-table',
    templateUrl: './wheel-table.component.html',
    styleUrls: ['./wheel-table.component.scss'],
})
export class WheelTableComponent implements OnInit {
    public numberSquares = [
        { value: 1, directBet: 0, indirectBet: 0, color: 'red', row: 1 },
        { value: 2, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 3, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
        { value: 4, directBet: 0, indirectBet: 0, color: 'black', row: 1 },
        { value: 5, directBet: 0, indirectBet: 0, color: 'red', row: 2 },
        { value: 6, directBet: 0, indirectBet: 0, color: 'black', row: 3 },
        { value: 7, directBet: 0, indirectBet: 0, color: 'red', row: 1 },
        { value: 8, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 9, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
        { value: 10, directBet: 0, indirectBet: 0, color: 'black', row: 1 },
        { value: 11, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 12, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
        { value: 13, directBet: 0, indirectBet: 0, color: 'black', row: 1 },
        { value: 14, directBet: 0, indirectBet: 0, color: 'red', row: 2 },
        { value: 15, directBet: 0, indirectBet: 0, color: 'black', row: 3 },
        { value: 16, directBet: 0, indirectBet: 0, color: 'red', row: 1 },
        { value: 17, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 18, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
        { value: 19, directBet: 0, indirectBet: 0, color: 'red', row: 1 },
        { value: 20, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 21, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
        { value: 22, directBet: 0, indirectBet: 0, color: 'black', row: 1 },
        { value: 23, directBet: 0, indirectBet: 0, color: 'red', row: 2 },
        { value: 24, directBet: 0, indirectBet: 0, color: 'black', row: 3 },
        { value: 25, directBet: 0, indirectBet: 0, color: 'red', row: 1 },
        { value: 26, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 27, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
        { value: 28, directBet: 0, indirectBet: 0, color: 'black', row: 1 },
        { value: 29, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 30, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
        { value: 31, directBet: 0, indirectBet: 0, color: 'black', row: 1 },
        { value: 32, directBet: 0, indirectBet: 0, color: 'red', row: 2 },
        { value: 33, directBet: 0, indirectBet: 0, color: 'black', row: 3 },
        { value: 34, directBet: 0, indirectBet: 0, color: 'red', row: 1 },
        { value: 35, directBet: 0, indirectBet: 0, color: 'black', row: 2 },
        { value: 36, directBet: 0, indirectBet: 0, color: 'red', row: 3 },
    ];

    numberEnds = [
        { name: '2 to 1', value: 1, directBet: 0, indirectBet: 0 },
        { name: '2 to 1', value: 2, directBet: 0, indirectBet: 0 },
        { name: '2 to 1', value: 3, directBet: 0, indirectBet: 0 },
    ];

    numberGroups = [
        { name: '1st 12', value: 1, directBet: 0, indirectBet: 0 },
        { name: '2nd 12', value: 2, directBet: 0, indirectBet: 0 },
        { name: '3rd 12', value: 3, directBet: 0, indirectBet: 0 },
    ];

    oddEven = [
        { name: 'EVEN', value: 1, directBet: 0, indirectBet: 0 },
        { name: 'ODD', value: 2, directBet: 0, indirectBet: 0 },
    ];

    public lastTenNums = [];
    public winningNumber: number;
    public myFunds: number;
    public winningsPaneActive = false;

    constructor() {}

    ngOnInit() {
        this.myFunds = 2000;

        this.lastTenNums = [{ num: 3, color: 'red' }, { num: 23, color: 'black' }];
    }

    removeBetValue(e) {
        this.myFunds += e.directBet;
        e.directBet = 0;
        this.myFunds += e.directBet;
        console.log('addBetValue ', e.directBet);
    }

    initToolEvent(e) {
        this.winningNumber = Number(e.value);

        this.lastTenNums.push({ num: this.winningNumber, color: 'red' });
        console.log('this.winningNumber ', this.lastTenNums);
    }

    onDrop(dropData, element) {
        // console.log('onDrop ', dropData.dropData, ' element ', element);
        const value: number = Number(dropData.dropData);
        console.log('onDrop ', typeof value);
        element.directBet += value;
        this.myFunds -= value;
    }

    dragEnd(event) {
        console.log('Element was dragged', event);
    }

    displayWinnings() {
        this.winningsPaneActive = !this.winningsPaneActive;
    }

    getRandomColor(i) {
        if (i % 2 === 0) {
            return 'black';
        }
        return 'red';
    }
}
