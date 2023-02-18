/********************************/
/* CREATE BINGO TILE LISTS */
/************************/

// create Part I spoiler-free list
const chitiles = [
    // QUOTES
    "“Your friends will become your power.”",
    "“They share the same goal, but they don’t follow the same path.”",
    "“Think of me as union-free for the day.”",
    "“We may not be in the same union, but we’re friends, right?”",
    "“Are you still up for our adventure?”",
    "“You’re honest. I like you.”",
    "“He asked me to go with you, so here I am.”",
    "“You don’t look very happy to see me…”",
    "“Thank you for showing me the strength of your hearts.”",
    "“I’m afraid the future is a very… sensitive subject.”",
    "“You are our hope.”",
    "“There’s always been one constant in my life―you.”",
    "“You asked for the truth, so there it is.”",
    "“This is the only place we haven’t checked.”",
    "“It’s not over. Not yet.”",
    // COUNTING EVENTS
    "Three Chirithies appear in the same scene",
    "All five foretellers appear onscreen at once",
    "More than 8 keyblade wielders onscreen at once",
    "May your heart be your guiding key is said at 1x",
    "May your heart be your guiding key is said at 3x",
    "May your heart be your guiding key is said at 6x",
    // PLAYER ACTIONS
    "The player character is confused by a simple explanation",
    "Player’s first spoken sentence",
    "Player is interrupted opening a door",
    "Player is cozy in bed",
    // MISC EVENTS
    "<span style='letter-spacing: -0.35px;'>Pumpkinheaded</span> Guy",
    "Among Us",
    "Let’s split up, gang!",
    "It was all just a dream...",
    "♪I always feel like somebody’s watching me...♪",
    // BATTLE EVENTS
    "Your favorite trio is used in battle (at once or separate)",
    "Your favorite princess of heart is used in battle",
    // KEYBLADES USED
    "Player uses Starlight (yellow & purple) keyblade",
    "Player uses Treasure Trove (pickaxe) keyblade",
    "Player uses Lady Luck (heart & card themed) keyblade",
    "Player uses Three Wishes (gold agrabah-themed) keyblade",
    "Player uses Olympia (silver cloud & lightning) keyblade",
    "Player uses Divine Rose (purple & rose-themed) keyblade",
    "Player uses Moogle O’ Glory (moogle) keyblade",
    "Player uses Counterpoint (musical wizard hat) keyblade",
    "Player uses Missing Ache (black, green, and blue spiked) keyblade",
    "Player uses Fenrir (black car key) keyblade",
    "Player uses Diamond Dust (snowflake) keyblade"
];

// create Part I list with spoilers
const chispoils = [
    // COPY OVER NONSPOILER LIST START vv
    // QUOTES
    "“Your friends will become your power.”",
    "“They share the same goal, but they don’t follow the same path.”",
    "“Think of me as union-free for the day.”",
    "“We may not be in the same union, but we’re friends, right?”",
    "“Are you still up for our adventure?”",
    "“You’re honest. I like you.”",
    "“He asked me to go with you, so here I am.”",
    "“You don’t look very happy to see me…”",
    "“Thank you for showing me the strength of your hearts.”",
    "“I’m afraid the future is a very… sensitive subject.”",
    "“You are our hope.”",
    "“There’s always been one constant in my life―you.”",
    "“You asked for the truth, so there it is.”",
    "“This is the only place we haven’t checked.”",
    "“It’s not over. Not yet.”",
    // COUNTING EVENTS
    "Three Chirithies appear in the same scene",
    "All five foretellers appear onscreen at once",
    "More than 8 keyblade wielders onscreen at once",
    "May your heart be your guiding key is said at 1x",
    "May your heart be your guiding key is said at 3x",
    "May your heart be your guiding key is said at 6x",
    // PLAYER ACTIONS
    "The player character is confused by a simple explanation",
    "Player’s first spoken sentence",
    "Player is interrupted opening a door",
    "Player is cozy in bed",
    // MISC EVENTS
    "<span style='letter-spacing: -0.35px;'>Pumpkinheaded</span> Guy",
    "Among Us",
    "Let’s split up, gang!",
    "It was all just a dream...",
    "♪I always feel like somebody’s watching me...♪",
    // BATTLE EVENTS
    "Your favorite trio is used in battle (at once or separate)",
    "Your favorite princess of heart is used in battle",
    // KEYBLADES USED
    "Player uses Starlight (yellow & purple) keyblade",
    "Player uses Treasure Trove (pickaxe) keyblade",
    "Player uses Lady Luck (heart & card themed) keyblade",
    "Player uses Three Wishes (gold agrabah-themed) keyblade",
    "Player uses Olympia (silver cloud & lightning) keyblade",
    "Player uses Divine Rose (purple & rose-themed) keyblade",
    "Player uses Moogle O’ Glory (moogle) keyblade",
    "Player uses Counterpoint (musical wizard hat) keyblade",
    "Player uses Missing Ache (black, green, and blue spiked) keyblade",
    "Player uses Fenrir (black car key) keyblade",
    "Player uses Diamond Dust (snowflake) keyblade",
    // COPY OVER NONSPOILER LIST END ^^
    // *** SPOILERS BEGIN HERE ***
    // QUOTES
    "“I guess that makes us enemies.”",
    "“The light we collect there is actually this world’s light.”",
    "“He’s fallen into an unchained state.”",
    "“You mean those three used to be human?”",
    "“Maybe that means I have darkness in my heart, I don’t care!”",
    "“You saw there was something more, something we weren’t being told.”",
    "“I can see why she chose you. You’re just like her.”",
    "“You did great. You can rest now. Okay?”",
    // MISC EVENTS
    "Player’s amazing Ephemer monologue",
    "Ephemer: Nice to meet you, want to see my conspiracy board?",
    "Dark Chirithy’s final form",
    "Dark Kermit meme but it's Chirithy",
    "Player enters the Corridor of Darkness",
    "Hearts flying like cherry blossoms"
];

// create Part II spoiler-free list
const crosstiles = [
    ""
];

// create part II list with spoilers
const crossspoils = [
    ""
];

/********************************/
/* DEFINE BINGO FUNCTIONS */
/************************/

// function to randomly shuffle lists
function shuffleArray(tileopts) {
    for (let i = tileopts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i * 1));
        [tileopts[i], tileopts[j]] = [tileopts[j], tileopts[i]];
    }
}

// function to set Part I's spoiler-free board
function getChiCard() {
    let cardtiles = document.getElementsByClassName("tile"); // get a list of all bingo tiles to populate
    shuffleArray(chitiles) // obtain and shuffle the spoiler free list

    j = 0; // initialize j for use in obtaining items in chitiles list
    for (i of cardtiles) {
        // for every tile on the board that is not the free space, fill the tile with a random item from the list of events
        if (i.id != "freespace") {
            i.innerHTML = "<div class='tdpadding'>" + chitiles[j] + "</div><div class=\"ripplecircle\"></div>";
            // unmark every tile, if previously marked
            if (i.classList.contains("marked")) {
                i.classList.remove("marked");
                i.classList.add("unmarked");
            }
            j++;
        }
    }
}

// function to set Part I's board with spoilers
function spoilerChiCard() {
    let cardtiles = document.getElementsByClassName("tile"); // get a list of all bingo tiles to populate
    shuffleArray(chispoils) // obtain and shuffle the spoiler-inclusive list

    j = 0; // initialize j for use in obtaining items in chitiles list
    for (i of cardtiles) {
        // for every tile on the board that is not the free space, fill the tile with a random item from the list of events
        if (i.id != "freespace") {
            i.innerHTML = "<div class='tdpadding'>" + chispoils[j] + "</div><div class=\"ripplecircle\"></div>";
            // unmark every tile, if previously marked
            if (i.classList.contains("marked")) {
                i.classList.remove("marked");
                i.classList.add("unmarked");
            }
            j++;
        }
    }
}

// function to set Part II's spoiler-free board
// function to set Part II's board with spoilers

// function to mark or unmark a tile when clicked
function markTile() {
    if (this.classList.contains("unmarked")) {
        this.classList.remove("unmarked");
        this.classList.add("marked");
    }
    else {
        this.classList.add("unmarked");
        this.classList.remove("marked");
    }
}

// function to add a ripple effect to tiles as they are marked or unmarked
function rippleEffect(ev) {
    let circle = this.querySelector(".ripplecircle"); // get the circular element hidden in each tile
    circle.classList.remove("animate"); // reset animation so it will run again if clicked previously

    // obtain the click's location, and divide it by half of the circle's size
    let x = ev.offsetX - 52;
    let y = ev.offsetY - 52;
    // use the coordinates just determined to center the circle on the click
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    circle.classList.add("animate"); // trigger animation
}

// function to add the ripple effect to each tile and unmark them all
function setTiles() {
    let bingoTiles = document.getElementsByClassName("tile"); // get a list of all bingo tiles to be adjusted

    // add the ripple click effect to all tiles, but do not unmark the free space
    for (i of bingoTiles) {
        i.addEventListener("click", rippleEffect);
        if (i.id != "freespace") {
            i.addEventListener("click", markTile);
        }
    }
}

/********************************/
/* DEFINE SAVE/LOAD FUNCTIONS */
/************************/

// function to save the board's contents to local storage
function saveBoards() {
    let board = document.getElementById("bingoboard").innerHTML; // store the html of the entire bingo board to save below

    // depending on which button was chosen, save to corresponding variable
    if (this.id == "save1") {
        localStorage.setItem("board1", board);
    }
    else if (this.id == "save2") {
        localStorage.setItem("board2", board);
    }

    disableButtons(); // call disableButtons to toggle the load buttons' functionality
}

// function to load a saved board's contents from local storage
function loadBoards() {
    let board = document.getElementById("bingoboard"); // get the bingo board element
    let slot1 = localStorage.getItem("board1"); // get the local storage variables
    let slot2 = localStorage.getItem("board2");

    // depending on which button was clicked, load from corresponding variable if saved contents are available
    if (this.id == "load1" && slot1 != null) {
        board.innerHTML = slot1;
    }
    else if (this.id == "load2" && slot2 != null) {
        board.innerHTML = slot2;
    }

    // make sure all tiles have the proper events tied to them
    setTiles();
}

/********************************/
/* DEFINE FUNCTIONS TO MAKE THE PAGE WORK */
/************************/

// function to uncheck all checkboxes on page load
function uncheckBoxes() {
    let checkboxes = document.querySelectorAll('[type="checkbox"]');

    for (i of checkboxes) {
        if (i.checked == true) {
            i.checked = false;
        }
    }
}

// function to allow user to add their own predictions
function customPredictions() {
    let spoilCheck = document.getElementById("spoils"); // obtain spoiler checkbox for disabling when custom predictions are active
    let customCheck = document.getElementById("custom").checked; // obtain the value of the custom prediction checkbox to ensure proper behavior
    let unchainedChi = document.getElementById("unchainedchi"); // obtain the Part I button for hiding
    let unionCross = document.getElementById("unioncross"); // obtain the Part II button for hiding
    let confirmBoard = document.getElementById("confirmboard"); // obtain the confirm button to save the custom predictions
    let edit = document.getElementById("editboard"); // obtain the edit button to adjust custom predictions
    let save1 = document.getElementById("save1"); // obtain the save buttons for hiding
    let save2 = document.getElementById("save2");

    // if the custom checkbox was checked, adjust accordingly
    if (customCheck == true) {
        // disable and uncheck the spoiler checkbox, as it becomes irrelevant here
        spoilCheck.setAttribute("disabled", "disabled");
        spoilCheck.checked = false;
        // hide the random generation buttons, as they become irrelevant here
        unchainedChi.classList.add("hidden");
        unionCross.classList.add("hidden");
        // hide the save buttons, as we do not want to save textareas, only set boards
        save1.classList.add("hidden");
        save2.classList.add("hidden");
        // if the user previously disabled the confirm button, re-enable it
        if (confirmBoard.classList.contains("disabled")) {
            confirmBoard.classList.remove("disabled"); // cosmetic change
            confirmBoard.querySelector("svg").classList.remove("hidden"); // replaces the glow effect on hover
            confirmBoard.addEventListener("click", customButton); // adds back the click event
        }
        confirmBoard.classList.remove("hidden"); // show the confirm board button
        // if the user previously enabled the edit button, disable it again
        if (!edit.classList.contains("disabled")) {
            edit.classList.add("disabled"); // cosmetic change
            edit.querySelector("svg").classList.add("hidden"); // removes glow effect on hover
            edit.removeEventListener("click", editBoard); // removes click event
        }
        edit.classList.remove("hidden"); // show the edit board button

        customTiles(); // call customTiles to add the textareas for the user
        }
    // if the custom checkbox was un-checked, adjust accordingly
    else {
        // re-enable the spoilers checkbox
        spoilCheck.removeAttribute("disabled");
        // re-show the random generation buttons
        unchainedChi.classList.remove("hidden");
        unionCross.classList.remove("hidden");
        // hide the confirm and edit buttons once more
        confirmBoard.classList.add("hidden");
        edit.classList.add("hidden");
        // if the save buttons are still hidden, re-show them
        if (save1.classList.contains("hidden")) {
            save1.classList.remove("hidden");
            save2.classList.remove("hidden");
        }

        getChiCard(); // randomly generate a spoiler-free board to replace the textareas
    }
}

// function to display textareas for users to fill out
function customTiles() {
    let cardtiles = document.getElementsByClassName("tile"); // get a list of all bingo tiles for populating 
    for (i of cardtiles) {
        // for each tile that is not the free space, replace contents with a textarea
        if (i.id != "freespace") {
            i.innerHTML = "<textarea></textarea>";
        }
    }
}

// function to confirm the custom contents the user entered
function customButton() {
    let cardtiles = document.getElementsByClassName("tile"); // get a list of all bingo tiles for populating 
    let edit = document.getElementById("editboard"); // obtain the edit button for enabling
    let save1 = document.getElementById("save1"); // obtain the save buttons for showing
    let save2 = document.getElementById("save2");

    for (i of cardtiles) {
        // go through each tile with a textarea and move make the value that the user entered the contents of the tile
        if (i.id != "freespace") {
            boardContents = i.querySelector("textarea").value;
            i.innerHTML = "<div class='tdpadding'>" + boardContents + "</div><div class=\"ripplecircle\"></div>";
            // unmark any tiles that got marked while the user was filling them out
            if (i.classList.contains("marked")) {
                i.classList.remove("marked")
                i.classList.add("unmarked");
            }
        }
    }

    // disable (functionally and cosmetically) the confirm board button once the board is already confirmed
    this.removeEventListener("click", customButton);
    this.classList.add("disabled");
    this.querySelector("svg").classList.add("hidden");
    // enable (functonally and cosmetically) the edit board button in case the user wishes to adjust their predictons
    edit.addEventListener("click", editBoard);
    edit.classList.remove("disabled");
    edit.querySelector("svg").classList.remove("hidden");

    // display the save buttons now that there are contents to save
    if (save1.classList.contains("hidden")) {
        save1.classList.remove("hidden");
        save2.classList.remove("hidden");
    }
}

// function to place user-entered content back into textareas for editing
function editBoard() {
    let cardtiles = document.getElementsByClassName("tile"); // get a list of all bingo tiles for populating
    let custom = document.getElementById("confirmboard"); // obtain the confirm button for enabling
    let save1 = document.getElementById("save1"); // obtain the save buttons for hiding
    let save2 = document.getElementById("save2");

    for (i of cardtiles) {
        // go through each non-freespace tile to move the text content back into a textarea
        if (i.id != "freespace") {
            predictionContent = i.querySelector(".tdpadding").innerText;
            i.innerHTML = "<textarea></textarea>";
            i.querySelector("textarea").value = predictionContent;
            // unmark any tiles that were previously marked
            if (i.classList.contains("marked")) {
                i.classList.remove("marked")
                i.classList.add("unmarked");
            }
        }
    }
    
    // hide the save buttons so textareas are not saved
    save1.classList.add("hidden");
    save2.classList.add("hidden");
    // disable (functionally and cosmetically) the edit board button while board is already being edited
    this.removeEventListener("click", editBoard);
    this.classList.add("disabled");
    this.querySelector("svg").classList.add("hidden");
    // re-enable (functionally and cosmetically) the confirm board button to save edits
    custom.addEventListener("click", customButton);
    custom.classList.remove("disabled");
    custom.querySelector("svg").classList.remove("hidden");
}

// function to set event listeners on all buttons, to enable them to call their corresponding functions
function setButtons() {
    // obtain save buttons, checkboxes' corresponding forms, and confirm board button to add corresponding events on page load
    let save1 = document.getElementById("save1");
    let save2 = document.getElementById("save2");
    let load1 = document.getElementById("load1");
    let load2 = document.getElementById("load2");
    let spoilForm = document.getElementById("spoilform");
    let customForm = document.getElementById("customform");
    let confirmBoard = document.getElementById("confirmboard");

    setBoardTypeButtons(); // call setBoardTypeButtons to add the appropriate event listeners to the board depending on checkbox selection

    spoilForm.addEventListener("change", setBoardTypeButtons);
    customForm.addEventListener("change", customPredictions);
    confirmBoard.addEventListener("click", customButton);
    save1.addEventListener("click", saveBoards);
    save2.addEventListener("click", saveBoards);
    load1.addEventListener("click", loadBoards);
    load2.addEventListener("click", loadBoards);
}

// function to set event listeners on the board-specific buttons, depending on spoiler checkbox selection
function setBoardTypeButtons() {
    // define variables for the spoiler checks & board types
    let spoilCheck = document.getElementById("spoils").checked;
    let unchainedChi = document.getElementById("unchainedchi");
    // let unionCross = document.getElementById("unioncross");
    
    // if spoilers are not enabled, use spoiler-free boards
    if (spoilCheck == false) {
            unchainedChi.removeEventListener("click", spoilerChiCard);
            unchainedChi.addEventListener("click", getChiCard);
            // unionCross.addEventListener("click", getCrossCard);
        }
    // if spoilers are enabled, use the spoiler-inclusive boards
    else {
        unchainedChi.removeEventListener("click", getChiCard);
        unchainedChi.addEventListener("click", spoilerChiCard);
        // unionCross.addEventListener("click", spoilerCrossCard);
    }
}

// function to disable load buttons if there are no contents to load
function disableButtons() {
    // obtain load slot variables, and loading buttons
    let slot1 = localStorage.getItem("board1");
    let slot2 = localStorage.getItem("board2");
    let load1 = document.getElementById("load1");
    let load2 = document.getElementById("load2");

    // if slot1 is not defined, adjust the button's appearance accordingly
    if (slot1 == null) {
        load1.classList.add("disabled"); // cosmetic change
        load1.querySelector("svg").classList.add("hidden"); // removes glow effect on hover
    }
    // if slot1 is defined and the button was previously disabled, adjust the button's appearance accordingly
    else if (load1.classList.contains("disabled")) {
        load1.classList.remove("disabled"); // cosmetic change
        load1.querySelector("svg").classList.remove("hidden"); // replaces glow effect on hover
    }

    // if slot2 is not defined, adjust the button's appearance accordingly
    if (slot2 == null) {
        load2.classList.add("disabled"); // cosmetic change
        load2.querySelector("svg").classList.add("hidden"); // removes glow effect on hover
    }
    // if slot2 is defined and the button was previously disabled, adjust the button's appearance accordingly
    else if (load2.classList.contains("disabled")) {
        load2.classList.remove("disabled"); // cosmetic change
        load2.querySelector("svg").classList.remove("hidden"); // replaces glow effect on hover
    }
}

/********************************/
/* CALL FUNCTIONS TO MAKE THE PAGE WORK */
/************************/

getChiCard(); // generate a bingo card
uncheckBoxes(); // make sure all checkboxes are unchecked
setButtons(); // add event listeners to all buttons
setTiles(); // make sure all tiles have a ripple effect and a mark/unmark effect
disableButtons(); // cosmetically disable load buttons if there is no save data to load
