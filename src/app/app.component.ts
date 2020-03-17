import { Component, AfterViewInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.x = <HTMLAudioElement>document.getElementById("clickAudio");
    this.y = <HTMLAudioElement>document.getElementById("gameoverAudio");
    this.z = <HTMLAudioElement>document.getElementById("winAudio");
    var audio = new Audio('../assets/super_mario.mp3');
    audio.play();
  }
  m: any;
  x: any;
  y: any;
  z: any;
  title = 'tic-tac-toe';
  bt1 = "";
  bt2 = "";
  bt3 = "";
  bt4 = "";
  bt5 = "";
  bt6 = "";
  bt7 = "";
  bt8 = "";
  bt9 = "";
  val = "X";
  winner = false;
  status = "Start Player: " + this.val;
  winnerplayer = "";
  check() {
    if ((this.bt1 != "" && this.bt2 != "" && this.bt3 != "") && (this.bt1 == this.bt2 && this.bt2 == this.bt3)) {
      this.winner = true;
      this.winnerplayer = this.bt1;
    }
    else if ((this.bt4 != "" && this.bt5 != "" && this.bt6 != "") && (this.bt4 == this.bt5 && this.bt5 == this.bt6)) {
      this.winner = true;
      this.winnerplayer = this.bt4;
    }
    else if ((this.bt7 != "" && this.bt8 != "" && this.bt9 != "") && (this.bt7 == this.bt8 && this.bt8 == this.bt9)) {
      this.winner = true;
      this.winnerplayer = this.bt7;
    }
    else if ((this.bt1 != "" && this.bt4 != "" && this.bt7 != "") && (this.bt1 == this.bt4 && this.bt4 == this.bt7)) {
      this.winner = true;
      this.winnerplayer = this.bt1;
    }
    else if ((this.bt2 != "" && this.bt5 != "" && this.bt8 != "") && (this.bt2 == this.bt5 && this.bt5 == this.bt8)) {
      this.winner = true;
      this.winnerplayer = this.bt2;
    }
    else if ((this.bt3 != "" && this.bt6 != "" && this.bt9 != "") && (this.bt3 == this.bt6 && this.bt6 == this.bt9)) {
      this.winner = true;
      this.winnerplayer = this.bt3;
    }
    else if ((this.bt1 != "" && this.bt5 != "" && this.bt9 != "") && (this.bt1 == this.bt5 && this.bt5 == this.bt9)) {
      this.winner = true;
      this.winnerplayer = this.bt1;
    }
    else if ((this.bt3 != "" && this.bt5 != "" && this.bt7 != "") && (this.bt3 == this.bt5 && this.bt5 == this.bt7)) {
      this.winner = true;
      this.winnerplayer = this.bt3;
    }
    else if ((this.bt1 != "" && this.bt2 != "" && this.bt3 != "" && this.bt4 != "" && this.bt5 != "" && this.bt6 != "" && this.bt7 != "" && this.bt8 != "" && this.bt9 != "")) {
      this.status = "Game is draw";
      this.y.play();
    }
    if (this.winner == true) {
      this.status = "Winner is " + this.winnerplayer;
      this.z.play();
    }
  }
  onclick(id) {
    if (this.winner == false) {
      if (id == 'bt1' && this.bt1 == "") {
        this.x.play();
        this.bt1 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt2' && this.bt2 == "") {
        this.x.play();
        this.bt2 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt3' && this.bt3 == "") {
        this.x.play();
        this.bt3 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt4' && this.bt4 == "") {
        this.x.play();
        this.bt4 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt5' && this.bt5 == "") {
        this.x.play();
        this.bt5 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt6' && this.bt6 == "") {
        this.x.play();
        this.bt6 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt7' && this.bt7 == "") {
        this.x.play();
        this.bt7 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt8' && this.bt8 == "") {
        this.x.play();
        this.bt8 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      else if (id == 'bt9' && this.bt9 == "") {
        this.x.play();
        this.bt9 = this.val;
        this.val = (this.val == "X") ? "O" : "X";
      }
      this.status = "Current Player: " + this.val;
      this.check();
    }
  }
}

