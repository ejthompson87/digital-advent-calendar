module.exports = function calendarCalc(currentDate, chocCookieArray, chocCookieBittenArray) {
    function day(date, title, fact, chocolate, chocolateBite, unlocked, eatenChoc, bittenChoc) {
        this.date = date;
        this.title = title;
        this.fact = fact;
        this.chocolate = chocolate;
        this.chocolateBite = chocolateBite;
        this.unlocked = unlocked;   
        this.eatenChoc = eatenChoc; 
        this.bittenChoc = bittenChoc;
    }

    function createDate(dateindex, fact, chocolate, chocolateBite) {
        var eaten;
        // indexOf returns -1 if not found 
        if (chocCookieArray.indexOf(dateindex) === -1) {
            eaten = false;
        } else {
            eaten = true;
        }
        var bitten;
        // indexOf returns -1 if not found 
        if (chocCookieBittenArray.indexOf(dateindex) === -1) {
            bitten = false;
        } else {
            bitten = true;
        }
        return new day(dateindex, "Fun Fact #" + dateindex + ": ", fact, chocolate, chocolateBite, currentDate >= dateindex, eaten, bitten);
    }
    
    var chocs = {
        star: "images/chocolateStar.png", 
        tree: "images/chocolateTree.png",
        cc: "images/chocolateCandyCane.png",
        holly: "images/chocolateHolly.png",
        starb1: "images/chocolateStar_bite1.png",
        starb2: "images/chocolateStar_bite2.png",
        treeb1: "images/chocolateTree_bite1.png",
        treeb2: "images/chocolateTree_bite2.png",
        ccb1: "images/chocolateCandyCane_bite1.png",
        ccb2: "images/chocolateCandyCane_bite2.png",
        hollyb1: "images/chocolateHolly_bite1.png",
        hollyb2: "images/chocolateHolly_bite2.png"
    }

    // daily fun facts
    var day1 = createDate(1, "The Titanic was the first ship to use the SOS signal", chocs.star, chocs.starb1);
    var day2 = createDate(2, "The Twitter bird actually has a name - Larry", chocs.tree, chocs.treeb1);
    var day3 = createDate(3, "In the Carribean there are oysters that can climb trees", chocs.cc, chocs.ccb1);
    var day4 = createDate(4, "In England, the Speaker of the House is not allowed to speak", chocs.star, chocs.starb2);
    var day5 = createDate(5, "Gorillas burp when they are happy", chocs.holly, chocs.hollyb1);
    var day6 = createDate(6, "In New York, it is illegal to sell a haunted house without telling the buyer", chocs.tree, chocs.treeb2);
    var day7 = createDate(7, "The only continent with no active volcanoes is Australia", chocs.holly, chocs.hollyb2);
    var day8 = createDate(8, "Cows kill more people than sharks do", chocs.cc, chocs.ccb2);
    var day9 = createDate(9, "San Francisco cable cars are the only National Monuments that can move", chocs.tree, chocs.treeb2);
    var day10 = createDate(10, "The male ostrich can roar just like a lion", chocs.star, chocs.starb1);
    var day11 = createDate(11, "A sheep, a duck and a rooster were the first passengers in a hot air balloon", chocs.cc, chocs.ccb2);
    var day12 = createDate(12, "There is a word for the day after tomorrow - overmorrow", chocs.holly, chocs.hollyb2);
    var day13 = createDate(13, "In France, it is legal to marry a dead person", chocs.tree, chocs.treeb1);
    var day14 = createDate(14, "On Jupiter and Saturn it rains diamonds", chocs.cc, chocs.ccb2);
    var day15 = createDate(15, "'Almost' is the longest word in English with all the letters in alphabetical order", chocs.star, chocs.starb1);
    var day16 = createDate(16, "There's a website called Kittify that turns your text into cat puns", chocs.holly, chocs.hollyb1);
    var day17 = createDate(17, "Alaska law says that you can’t look at a moose from an airplane", chocs.cc, chocs.ccb1);
    var day18 = createDate(18, "A duck’s quack doesn’t echo, and nobody can figure out why", chocs.star, chocs.starb2);
    var day19 = createDate(19, "315 entries in Webster’s Dictionary were misspelled", chocs.holly, chocs.hollyb1);
    var day20 = createDate(20, "In every episode of Seinfeld there is a Superman somewhere", chocs.cc, chocs.ccb2);
    var day21 = createDate(21, "More monopoly money is printed each year than real US currency", chocs.tree, chocs.treeb1);
    var day22 = createDate(22, "No word in the English language rhymes with month, orange, silver, or purple", chocs.holly, chocs.hollyb2);
    var day23 = createDate(23, "There is a city called Rome in every continent", chocs.cc, chocs.ccb1);
    var day24 = createDate(24, "Venus is the only planet in the solar system that rotates clockwise", chocs.tree, chocs.treeb2);    

    var calcBgPositions = function() {
        var tilesAcross = 6;
        var tilesDown = 4;
        var leftBorder = 8;
        var rightBorder = 8;
        var doorWidth = 144;
        var doorHeight = 135;
        var topBorder = 7.5;
        var bottomBorder = 7.5;

        // A list of lists of {x: 2, y: 3} type pairs
        var positions = [];
        y = topBorder + 4;
        for (var i = 0; i < tilesDown; i++) {
            var row = [];
            positions.push(row);
            var x = leftBorder - 1;
            for (var j = 0; j < tilesAcross; j++) {
                row.push({x: -x, y: -y});
                x += doorWidth + leftBorder + rightBorder;
            }
            y += doorHeight + topBorder + bottomBorder;
        }
        return positions;
    }

    var bgPositions = calcBgPositions();

    var calendarDates = {
    // for dates 6, 14, 20, 17, 7, 9
        calendarDatesRow1 : [{  day: day6, bgW: bgPositions[0][0].x, bgH: bgPositions[0][0].y}, 
                                {day: day14, bgW: bgPositions[0][1].x, bgH: bgPositions[0][1].y}, 
                                {day: day20, bgW: bgPositions[0][2].x, bgH: bgPositions[0][2].y}, 
                                {day: day17, bgW: bgPositions[0][3].x, bgH: bgPositions[0][3].y}, 
                                {day: day7, bgW: bgPositions[0][4].x, bgH: bgPositions[0][4].y}, 
                                {day: day9, bgW: bgPositions[0][5].x, bgH: bgPositions[0][5].y}],
    // for dates 11, 24, 8, 21, 1, 12 
        calendarDatesRow2 : [{day: day11, bgW: bgPositions[1][0].x, bgH: bgPositions[1][0].y}, 
                                {day: day24, bgW: bgPositions[1][1].x, bgH: bgPositions[1][1].y}, 
                                {day: day8, bgW: bgPositions[1][2].x, bgH: bgPositions[1][2].y}, 
                                {day: day21, bgW: bgPositions[1][3].x, bgH: bgPositions[1][3].y}, 
                                {day: day1, bgW: bgPositions[1][4].x, bgH: bgPositions[1][4].y}, 
                                {day: day12, bgW: bgPositions[1][5].x, bgH: bgPositions[1][5].y}],
    // for dates 16, 18, 3, 15, 23, 4 
        calendarDatesRow3 : [{day: day16, bgW: bgPositions[2][0].x, bgH: bgPositions[2][0].y}, 
                                {day: day18, bgW: bgPositions[2][1].x, bgH: bgPositions[2][1].y}, 
                                {day: day3, bgW: bgPositions[2][2].x, bgH: bgPositions[2][2].y}, 
                                {day: day15, bgW: bgPositions[2][3].x, bgH: bgPositions[2][3].y}, 
                                {day: day23, bgW: bgPositions[2][4].x, bgH: bgPositions[2][4].y}, 
                                {day: day4, bgW: bgPositions[2][5].x, bgH: bgPositions[2][5].y}],
    // for dates 13, 19, 5, 22, 10, 2
        calendarDatesRow4 : [{day: day13, bgW: bgPositions[3][0].x, bgH: bgPositions[3][0].y}, 
                                {day: day19, bgW: bgPositions[3][1].x, bgH: bgPositions[3][1].y}, 
                                {day: day5, bgW: bgPositions[3][2].x, bgH: bgPositions[3][2].y}, 
                                {day: day22, bgW: bgPositions[3][3].x, bgH: bgPositions[3][3].y}, 
                                {day: day10, bgW: bgPositions[3][4].x, bgH: bgPositions[3][4].y}, 
                                {day: day2, bgW: bgPositions[3][5].x, bgH: bgPositions[3][5].y}]
    }
    return calendarDates;
}