/* --------- Global style */

body {
    background-color: white;
    font-family: "Raleway", sans-serif;
    color: #445361;
    text-align: center;
}

/* --------- Heading */

.heading {
    text-align: center;
    font-size: 2.5rem;
}

.logo {
    height: 40px;
    padding-right: 5px;
}

/* --------- Game layout */

.game-area {
    background-color: #E6ECF0;
    box-sizing: border-box;
    width: 85%;
    height: 65vh;
    max-height: 450px;
    max-width: 830px;
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
}

.question-area {
    width: 50%;
    font-size: 2rem;
    margin: auto;
    padding: 50px 0;
}

.question-area span {
    padding: 0 15px;
}

.score-area {
    margin: 5px auto;
    width: 60%;
    font-size: 1.2rem;
}

.controls-area {
    width: 85%;
    margin: 30px auto;
}

#score {
    color: green;
    font-weight: bold;
}

#incorrect {
    color: red;
    font-weight: bold;
}

.answer-message {
    display: none;
    font-size: 1rem;
}

#answer-box {
    border: none;
    color: #445361;
    display: inline-block;
    height: 40px;
    width: 80px;
    font-size: 1.2rem;
}

.scores {
    display: inline-block;
    padding: 25px;
}

/* --------- Buttons */

.btn {
    width: 220px;
    height: 60px;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: white;
}

.btn:focus {
    outline: none;
}

.btn--big {
    padding-top: 10px;
    border-radius: 50%;
    background-color: white;
    border: 10px solid;
    width: 100px;
    height: 100px;
    font-size: 3.2rem;
    margin: 0 30px;
    transition: all 0.5s;
}

.btn--blue {
    border-color: blue;
    color: blue;
}

.btn--blue:active,
.btn--blue:hover {
    background-color: darkblue;
    color: white;
}

.btn--orange {
    border-color: orange;
    color: orange;
}

.btn--orange:active,
.btn--orange:hover {
    background-color: darkorange;
    color: white;
}

.btn--red {
    border-color: red;
    color: red;
}

.btn--red:active,
.btn--red:hover {
    background-color: darkred;
    color: white;
}

.btn--green {
    border-color: green;
    color: green;
}

.btn--green:active,
.btn--green:hover {
    background-color: darkgreen;
    color: white;
}

.btn--gray {
    margin-top: 25px;
    background-color: #445361;
    border: 1px transparent;
    border-radius: 20px;
}

.btn--gray:active,
.btn--gray:hover {
    background-color: #0d1013;
}

/* --------- Media queries */

@media (max-width: 414px) {
    .controls-area {
        width: 100%;
    }

    .btn--big {
        margin: 0 10px;
        padding: 5px;
        border: 5px solid;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
    }

    .btn--big::after {
        font-size: 0.6rem;
        left: -0.7rem;
    }

    .question-area {
        padding: 10% 0;
        width: 100%;
    }

    .question-area span {
        padding: 0;
    }

    .answer-message {
        display: block;
    }

    #answer-box {
        display: block;
        margin: 0 auto;
    }
    .btn--gray {
        margin-top: 0;
    }

    .score-area {
        width: 100%;
    }

    .scores {
        margin: 0.5em auto;
        display: block;
        padding: 5px;
    }

    .heading {
        font-size: 2rem;
    }
}

@media (max-width: 320px) {
    .game-area {
        height: 70vh;
    }

    .controls-area {
        width: 75%;
        margin: 10px auto;
    }

    .btn--big {
        margin: 10px 10px;
    }
    .question-area {
        padding: 10px 0;
    }

}