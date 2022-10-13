window.onload = function () {
  start();
};

function start() {
  const solution = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  let board = document.querySelector(".board");
  let turn = -1;

  function checkResult(obj) {
    // console.log(obj)
    let player = obj.innerText;
    for (let i = 0; i <= 7; i++) {
      let a = document.getElementById(`${solution[i][0]}`);
      let b = document.getElementById(`${solution[i][1]}`);
      let c = document.getElementById(`${solution[i][2]}`);
      // console.log(a);
      if (
        player == a.innerText &&
        player == b.innerText &&
        player == c.innerText
      )
        return true;
    }
    return false;
  }

  function selectTile() {
    if (this.innerText) return;
    this.innerText = turn === -1 ? "X" : "Y";
    let result = checkResult(this);
    if (result) {
      console.log(`Winner is ${turn === -1 ? "X" : "Y"}`);
    } else {
      turn = turn * -1;
      return;
    }
  }

  let tiles = document.getElementsByClassName("tile");
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].setAttribute("id", i + 1);
    // console.log(tiles[i]);
    tiles[i].addEventListener("click", selectTile);
  }
}
