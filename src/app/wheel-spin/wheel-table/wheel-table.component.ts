import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTranscludeModalComponent } from '../../shared/components/ngb-transclude-modal/ngb-transclude-modal.component';
import { PlayerService } from '../services/player.service';
import { TableService } from '../services/game.service';
import { first } from 'rxjs/operators';
import { Picture } from '../../family/models/picture';

export interface ILastTenNums {
  value: number;
  color: number;
}

export interface NamedFilter {
  filters: ILastTenNums[];
}

@Component({
  selector: 'app-wheel-table',
  templateUrl: './wheel-table.component.html',
  styleUrls: ['./wheel-table.component.scss'],
  providers: [TableService]
})
export class WheelTableComponent implements OnInit {
  private activeUser;

  public numberSquares = [];
  public lastTenNums: ILastTenNums[] = [];
  public winningNumber: number;
  public myFunds: number;
  public winningsPaneActive = false;
  public displayArray: any[] = [];
  public screenInstructions: any[];
  public player;

  public modalButtons = {
    name: 'Close'
  };

  constructor(private modalService: NgbModal, private tableService: TableService, private playerService: PlayerService) {}

  ngOnInit() {
    this.tableService.getTableConfigs().subscribe(res => {
      this.numberSquares = res;
    });

    this.loadAll();

    this.screenInstructions = [
      'Start the Game with $' + this.myFunds,
      'To place bets drag and drop coins on to the betting squares',
      'You can drag multiple chips on betting squares',
      'To remove a bet from a square click the square',
      'When you are finished betting, spin the wheel!'
    ];
  }

  private loadAll() {
    console.log('loadAll');
    this.playerService
      .loadAllPlayers()
      .pipe(first())
      .subscribe(players => {
        this.player = players[0];
        this.setPlayerValues();
        console.log('this.player ', this.player);
      });
  }

  update(): void {
    this.playerService.updatePlayer(this.player).subscribe(result => console.log('player Updated Successfully!'));
  }

  save(player: Picture): void {
    this.player = player;
    // this.playerService.create(player);
  }

  setPlayerValues() {
    this.myFunds = this.player.cashInHand;
    this.lastTenNums = [];
    this.player.lastTen.forEach(d => {
      this.lastTenProcess(d);
    });
  }

  lastTenProcess(value) {
    if (this.lastTenNums.length === 10) {
      this.lastTenNums.shift();
    }
    const index = this.numberSquares.findIndex(p => p.name === value);
    this.lastTenNums.push({ value: this.numberSquares[index].name, color: this.numberSquares[index].color });

    console.log('this.lastTenNums ', this.lastTenNums);
    console.log('this.player ', this.player);
  }

  processWinningNumber(e) {
    this.winningNumber = Number(e.value);
    const lastTenArgs = this.winningNumber;
    this.player.lastTen.push(this.winningNumber);
    this.lastTenProcess(lastTenArgs);
    this.processBets();
  }

  openModal() {
    const modalRef = this.modalService.open(NgbdTranscludeModalComponent, {
      size: 'lg',
      windowClass: 'modal-xxl'
    });
    modalRef.componentInstance.modalName = 'Roulette Instructions';
    modalRef.componentInstance.modalContent = this.screenInstructions;
    modalRef.componentInstance.modalButtons = this.modalButtons;
  }

  onDrop(dropData, element) {
    const value: number = Number(dropData.dropData);
    if (this.myFunds >= Number(dropData.dropData)) {
      element.directBet += value;
      this.myFunds -= value;
    }
  }

  // Determines winning returns
  processBets() {
    this.displayArray = [];
    this.numberSquares.forEach((d, i) => {
      if (d.directBet) {
        if (this.numberSquares[i].contents.includes(this.winningNumber)) {
          console.log('WINNER! ', this.numberSquares[i].name, ' -', d.directBet * d.value);
          this.displayArray.push({
            name: this.numberSquares[i].name,
            value: d.directBet * d.value
          });
          this.myFunds += d.directBet * d.value;
        } else {
          console.log('No Winners!');
        }
        this.player.cashInHand = this.myFunds;
      }
    });
    this.update();
  }

  // Clears all bets - Start the betting process over
  removeAllBets() {
    this.numberSquares.forEach((d, i) => {
      d.directBet = 0;
    });
    this.displayArray = [];
  }

  // Removes bet for single clicked slot
  removeBetValue(e) {
    if (e.directBet) {
      this.myFunds += e.directBet;
      e.directBet = 0;
      this.myFunds += e.directBet;
    } else {
      console.log('Set Pick two or four ', e);
    }
  }

  dragEnd(event) {
    console.log('Element was dragged', event);
  }

  displayWinnings() {
    this.winningsPaneActive = !this.winningsPaneActive;
  }
}
