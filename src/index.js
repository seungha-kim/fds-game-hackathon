let boardState = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

function drawBoard() {
  document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
    rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
      if (boardState[rowIndex][colIndex] === 1) {
        colEl.classList.add('checked')
      } else {
        colEl.classList.remove('checked')
      }
    })
  })

  if (bingo(boardState)) {
    document.querySelector('.result').textContent = '빙고!'
    document.querySelector('.reset').classList.add('show')
  } else {
    document.querySelector('.result').textContent = ''
    document.querySelector('.reset').classList.remove('show')
  }
}

function bingo(arr) {
  // 가로줄 확인 (루프)
  for (let i = 0; i < 5; i++) {
    // '이제까지 본 것이 전부 x표시가 되어있다'
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  // 세로줄 확인 (루프)
  for (let i = 0; i < 5; i++) {
    // '이제까지 본 것이 전부 x표시가 되어있다'
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][i] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  {
    // 대각선 확인 (루프)
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  {
    // 반대쪽 대각선 확인 (루프)
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][4 - j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  return false
}

document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
  rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
    colEl.addEventListener('click', e => {
      if (!bingo(boardState)) {
        boardState[rowIndex][colIndex] = 1
        drawBoard()
      }
    })
  })
})

document.querySelector('.reset').addEventListener('click', e => {
  // alert('asdf')
  boardState = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]
  drawBoard()
})

drawBoard()
