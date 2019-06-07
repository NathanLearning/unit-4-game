$(document).ready(function() {
    // Tidy all these variables. Yikes!!!!
    var randomNum = Math.floor(Math.random()*101+19)
    var blue = Math.floor(Math.random()*11+1)
    var pink = Math.floor(Math.random()*11+1)
    var green = Math.floor(Math.random()*11+1)
    var purple = Math.floor(Math.random()*11+1)

    var wins = 0
    var losses = 0
    var totalRN = 0

    $('.targetNum').text("Target number: " + randomNum)
    $('.wins').text("Wins: " + wins)
    $('.losses').text("Losses: " + losses)
    $('.scoreCrrnt').text("Your total score is: " + totalRN)

    function reset(){
        randomNum = Math.floor(Math.random()*101+19)
        $('.targetNum').text("Target number: " + randomNum)
        blue = Math.floor(Math.random()*11+1)
        pink = Math.floor(Math.random()*11+1)
        green = Math.floor(Math.random()*11+1)
        purple = Math.floor(Math.random()*11+1)
        totalRN = 0
        $('.scoreCrrnt').text("Your total score is: " + totalRN)
  } 

    function winRun() {
        wins++
        $('.wins').text("Wins: " + wins)
        reset()
    }

    function loseRun() {
        losses++
        $('.losses').text("Losses: " + losses)
        reset()
    }

    $('#blueEgg').on('click', function() {
        totalRN = totalRN + blue
        $('.scoreCrrnt').text("Your total score is: " + totalRN)
            if (totalRN == randomNum) {
                winRun()
            } else if (totalRN > randomNum) {
                loseRun()
            }
    })
    $('#pinkEgg').on('click', function() {
        totalRN = totalRN + pink
        $('.scoreCrrnt').text("Your total score is: " + totalRN)
            if (totalRN == randomNum) {
                winRun()
            } else if (totalRN > randomNum) {
                loseRun()
            }
    })
    $('#greenEgg').on('click', function() {
        totalRN = totalRN + green
        $('.scoreCrrnt').text("Your total score is: " + totalRN)
            if (totalRN == randomNum) {
                winRun()
            } else if (totalRN > randomNum) {
                loseRun()
            }
    })
    $('#purpleEgg').on('click', function() {
        totalRN = totalRN + purple
        $('.scoreCrrnt').text("Your total score is: " + totalRN)
            if (totalRN == randomNum) {
                winRun()
            } else if (totalRN > randomNum) {
                loseRun()
            }
    })
})