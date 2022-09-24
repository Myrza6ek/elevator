let body = document.querySelector("body");
let cont = document.getElementsByClassName("container");
let elev = document.getElementsByClassName("elevator");
let baton = document.getElementsByTagName("button");
let wind = document.getElementsByClassName("windows");
let l_wind = document.getElementsByClassName("l-windows");
let door = document.getElementsByClassName("door");
let num = 1;
let num1 = 1;

let num2 = 0;
let numbUp = () => {
  return (num2 = num2 - 44);
};
let numbDown = () => {
  return (num2 = num2 + 44);
};
// let numD2 = 0
// let numbDown = () => {
//   return (numD2 = num2 + 44);
// };

// let num = 0;
// let num1 = () => {
//   return (num = num + 47);
// };
elev[0].style.transition = "4s";
wind[0].id = "yellow-wind";
l_wind[0].id = "l-yellow-wind";
baton[0].addEventListener("click", () => {
  num = 16;
  num1 = 16;

  if (num == 16) {
    elev[0].style.marginTop = "2px";
    elev[0].style.transition = "6s";
    let x = setInterval(() => {
      for (let i of wind) {
        i.id = "";
      }
      for (let j of l_wind) {
        j.id = "";
      }

      l_wind[15].id = "l-yellow-wind";
      wind[15].id = "yellow-wind";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "40px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 5000);

      clearInterval(x);
    }, 2500);
    num2 = 0;
    console.log(num2);
  }
});

// baton[0].addEventListener("click", e => {
//   console.log("работает");
//   elev[0].style.marginTop = "2px";
//   elev[0].style.transition = "4s";
//   // wind[0].classList.add("yellow-wind");
//   // l_wind[0].classList.add("yellow-wind");
//   if (elev[0].style.marginTop == "2px") {
//     let int = setInterval(e => {
//       for (let i of l_wind) {
//         i.id = "";
//       }
//       wind[0].id = "yellow-wind";
//       clearInterval(int);
//     }, 2000);
//     console.log("!");
//   }
// });
// if (elev[0].style.marginTop !== "2px") {
//   wind[0].classList.remove("yellow-wind");
//   l_wind[0].classList.remove("yellow-wind");
//   console.log("?");
// }
baton[1].addEventListener("click", () => {
  num = 15;
  num1 = 15;
  if (num == 15) {
    elev[0].style.marginTop = "46px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[14].id = "l-yellow-wind";
      wind[14].id = "yellow-wind";

      clearInterval(x);
    }, 2500);
    num2 = 46;
    console.log(num2);
  }

  // if (elev[0].style.marginTop == "46px") {
  //   console.log("!");

  //   wind[1].classList.add("yellow-wind");
  //   l_wind[1].classList.add("yellow-wind");
  // }
});
baton[2].addEventListener("click", () => {
  // console.log("работает");
  num = 14;
  num1 = 14;
  if (num == 14) {
    elev[0].style.marginTop = "90px";
    let x = setInterval(() => {
      for (i of l_wind) {
        i.id = "";
      }
      for (j of wind) {
        j.id = "";
      }
      l_wind[13].id = "l-yellow-wind";
      wind[13].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 90;
    console.log(num2);
  }
});
baton[3].addEventListener("click", () => {
  // console.log("работает");
  num = 13;
  num1 = 13;
  if (num == 13) {
    elev[0].style.marginTop = "134px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }

      for (j of l_wind) {
        j.id = "";
      }
      wind[12].id = "yellow-wind";
      l_wind[12].id = "l-yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 134;
    console.log(num2);
  }
});
baton[4].addEventListener("click", () => {
  // console.log("работает");
  num = 12;
  num1 = 12;
  if (num == 12) {
    elev[0].style.marginTop = "178px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[11].id = "l-yellow-wind";
      wind[11].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 178;
    console.log(num2);
  }
});
baton[5].addEventListener("click", () => {
  // console.log("работает");
  num = 11;
  num1 = 11;
  if (num == 11) {
    elev[0].style.marginTop = "222px";
    let x = setInterval(() => {
      for (i of l_wind) {
        i.id = "";
      }
      for (j of wind) {
        j.id = "";
      }
      l_wind[10].id = "l-yellow-wind";
      wind[10].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 222;
    console.log(num2);
  }
  // elev[0].style.transition = "4s";
});
baton[6].addEventListener("click", () => {
  // console.log("работает");
  num = 10;
  num1 = 10;
  if (num == 10) {
    elev[0].style.marginTop = "266px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }

      l_wind[9].id = "l-yellow-wind";
      wind[9].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 266;
    console.log(num2);
  }
  // elev[0].style.transition = "4s";
});
baton[7].addEventListener("click", () => {
  // console.log("работает");
  num = 9;
  num1 = 9;
  if (num == 9) {
    elev[0].style.marginTop = "310px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[8].id = "l-yellow-wind";
      wind[8].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 310;
    console.log(num2);
  }
  // elev[0].style.transition = "4s";
});
baton[8].addEventListener("click", () => {
  // console.log("работает");
  num = 8;
  num1 = 8;
  if (num == 8) {
    elev[0].style.marginTop = "354px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }

      wind[7].id = "yellow-wind";
      l_wind[7].id = "l-yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 354;
    console.log(num2);
  }
  // elev[0].style.transition = "4s";
});
baton[9].addEventListener("click", () => {
  // console.log("работает");
  num = 7;
  num1 = 7;
  if (num == 7) {
    elev[0].style.marginTop = "398px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[6].id = "l-yellow-wind";
      wind[6].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 398;
    console.log(num2);
  }
  // elev[0].style.transition = "4s";
});
baton[10].addEventListener("click", () => {
  // console.log("работает");
  num = 6;
  num1 = 6;
  if (num == 6) {
    elev[0].style.marginTop = "442px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[5].id = "l-yellow-wind";
      wind[5].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 442;
    console.log(num2);
  }
  // elev[0].style.transition = "4s";
});
baton[11].addEventListener("click", () => {
  // console.log("работает");
  num = 5;
  num1 = 5;
  // elev[0].style.transition = "4s";
  if (num == 5) {
    elev[0].style.marginTop = "486px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      wind[4].id = "yellow-wind";
      l_wind[4].id = "l-yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 486;
    console.log(num2);
  }
});
baton[12].addEventListener("click", () => {
  // console.log("работает");
  num = 4;
  num1 = 4;
  if (num == 4) {
    elev[0].style.marginTop = "530px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[3].id = "l-yellow-wind";
      wind[3].id = "yellow-wind";
      clearInterval(x);
    }, 2500);
    num2 = 530;
    console.log(num2);
  }
  // elev[0].style.transition = "4s";
});
baton[13].addEventListener("click", () => {
  // console.log("работает");
  num = 3;
  num1 = 3;
  // elev[0].style.transition = "4s";
  if (num == 3) {
    elev[0].style.marginTop = "574px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[2].id = "l-yellow-wind";
      wind[2].id = "yellow-wind";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "40px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 5000);

      clearInterval(x);
    }, 2500);
    num2 = 574;
    console.log(num2);
  }
});
baton[14].addEventListener("click", () => {
  // console.log("работает");
  num = 2;
  num1 = 2;
  // elev[0].style.transition = "4s";
  if (num == 2) {
    elev[0].style.marginTop = "620px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      l_wind[1].id = "l-yellow-wind";
      wind[1].id = "yellow-wind";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "40px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 5000);

      clearInterval(x);
    }, 2500);
    num2 = 618;
    // console.log(num);
    // console.log(num1);
    // console.log(num2);
    // numbUp();
    // console.log(numbUp());
  }
});

baton[15].addEventListener("click", () => {
  // console.log("работает");
  num = 1;
  num1 = 1;
  // elev[0].style.transition = "4s";
  if (num == 1) {
    elev[0].style.marginTop = "662px";
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      wind[0].id = "yellow-wind";
      l_wind[0].id = "l-yellow-wind";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "40px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 5000);

      clearInterval(x);
    }, 2500);
    num2 = 662;
    console.log(num2);
    // numbUp();
    // console.log(numbUp());
  }
});

// let num = 0;
let up = document.getElementsByClassName("up");
let down = document.getElementsByClassName("down");

let obj_elevator = {
  firstFloor: /*(elev[0].style.marginTop = "2px"),*/ 1,
  lastFloor: /*(elev[0].style.marginTop = "660px"), */ 16,
  // current: num,
  printFloor() {
    console.log(this.current);
  },
};

up[0].addEventListener("click", () => {
  console.log(num2);

  if (num < obj_elevator.lastFloor) {
    elev[0].style.marginTop = `${numbUp()}px`;

    let numb = () => {
      return (num1 = num1 + 1);
    };
    let numx = () => {
      return (num = num + 1);
    };

    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      console.log(num);

      wind[numx() - 1].id = "yellow-wind";
      l_wind[numb() - 1].id = "l-yellow-wind";
      clearInterval(x);
    }, 2500);
  } else if (num >= obj_elevator.firstFloor) {
    elev[0].style.marginTop = "662px";
    // return;
  }
  console.log(num);
  console.log(num1);
});
down[0].addEventListener("click", () => {
  if (num > obj_elevator.firstFloor) {
    console.log(num2);
    // console.log(numbDown());
    elev[0].style.marginTop = `${numbDown()}px`;
    let numZ = 0;
    let numX = 0;
    let numz = () => {
      return (numZ = num1 - 1);
    };
    let numy = () => {
      return (numX = num - 1);
    };

    console.log(num);
    console.log(num1);
    let x = setInterval(() => {
      for (i of wind) {
        i.id = "";
      }
      for (j of l_wind) {
        j.id = "";
      }
      wind[numz()].id = "yellow-wind";
      l_wind[numy()].id = "l-yellow-wind";
      clearInterval(x);
    }, 2500);

    console.log((num = num - 1));
    // } else if (num < obj_elevator.firstFloor) {
    //   // elev[0].style.marginTop = "662px";
    //   // return;
  }
});
// } else if (num == 1) {
//   console.log("yes");
//   elev[0].style.marginTop = "620px";
// });
// down[0].addEventListener("click", () => {
//   if (this.current > this.lastFloor) {
//     this.current--;
//     console.log("down");
//   }
// });

//   upOneFloor() {
//     if (this.current < this.maxFloor) {
//       this.current++;
//       this.printFloor();
//     } else {
//       console.error("Error!");
//     }
//   },
//   downOneFloor() {
//     if (this.current > this.minFloor) {
//       this.current--;
//       this.printFloor();
//     } else {
//       console.error("Error!");
//     }
//   },
//   toFloor(floor) {
//     if (floor >= this.minFloor && floor <= this.maxFloor) {
//       while (this.current < floor) {
//         this.upOneFloor();
//       }
//       while (this.current > floor) {
//         this.downOneFloor();
//       }
//     } else {
//       console.error("Error!");
//     }
//   },
// };
// elevator.printFloor();
// elevator.upOneFloor();
// elevator.downOneFloor();

// elevator.upOneFloor();
// elevator.upOneFloor();
// elevator.toFloor(9);
// elevator.toFloor(6);
// elevator.printFloor()
