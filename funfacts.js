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
        // if (chocCookieArray.includes(dateindex)) {
        if (chocCookieArray.indexOf(dateindex) === -1) {
            eaten = false;
        } else {
            eaten = true;
        }
        var bitten;
        // if (chocCookieBittenArray.includes(dateindex)) {
        if (chocCookieBittenArray.indexOf(dateindex) === -1) {
            bitten = false;
        } else {
            bitten = true;
        }
       // if (chocCookieArray contains dateindex then true else false)
        return new day(dateindex, "Fun Fact #" + dateindex + ": ", fact, chocolate, chocolateBite, currentDate >= dateindex, eaten, bitten);
    }
    
    var chocs = {
        star: "chocolateStar.png", 
        tree: "chocolateTree.png",
        cc: "chocolateCandyCane.png",
        holly: "chocolateHolly.png",
        starb1: "chocolateStar_bite1.png",
        starb2: "chocolateStar_bite2.png",
        treeb1: "chocolateTree_bite1.png",
        treeb2: "chocolateTree_bite2.png",
        ccb1: "chocolateCandyCane_bite1.png",
        ccb2: "chocolateCandyCane_bite2.png",
        hollyb1: "chocolateHolly_bite1.png",
        hollyb2: "chocolateHolly_bite2.png"
    }

    // daily fun facts
    var day1 = createDate(1, "Hamsters can run up to 9 kms a night.", chocs.star, chocs.starb1);
    var day2 = createDate(2, "If you google search 'askew', the content will tilt slightly.", chocs.tree, chocs.treeb1);
    var day3 = createDate(3, "A 'jiffy' is the scientific name for 1/100th of a second.", chocs.cc, chocs.ccb1);
    var day4 = createDate(4, "Since 1945, all British tanks come with tea making equipment.", chocs.star, chocs.starb2);
    var day5 = createDate(5, "Guinness Book of Records holds the record for being the book most often stolen from Public Libraries.", chocs.holly, chocs.hollyb1);
    var day6 = createDate(6, "The man responsible for the modern frisbee design was cremated and made into frisbees.", chocs.tree, chocs.treeb2);
    var day7 = createDate(7, "There are no bridges over the Amazon River.", chocs.holly, chocs.hollyb2);
    var day8 = createDate(8, "Stewardesses' is the longest word that is typed with only the left hand.", chocs.cc, chocs.ccb2);
    var day9 = createDate(9, "If you Google ‘Zerg Rush’ Google will eat up the search results.", chocs.tree, chocs.treeb2);
    var day10 = createDate(10, "Emus and kangaroos cannot walk backwards, and are on the Australian coat of arms for that reason.", chocs.star, chocs.starb1);
    var day11 = createDate(11, "Ants stretch when they wake up in the morning.", chocs.cc, chocs.ccb2);
    var day12 = createDate(12, "Sharks are immune to almost all known diseases.", chocs.holly, chocs.hollyb2);
    var day13 = createDate(13, "Leonardo da Vinci could write with one hand and draw with the other at the same time.", chocs.tree, chocs.treeb1);
    var day14 = createDate(14, "All of the clocks in the movie 'Pulp Fiction' are stuck on 4:20.", chocs.cc, chocs.ccb2);
    var day15 = createDate(15, "Outer space is only an hours’ drive away – if your car could drive straight up.", chocs.star, chocs.starb1);
    var day16 = createDate(16, "For every human on Earth there are 1.6 million ants.", chocs.holly, chocs.hollyb1);
    var day17 = createDate(17, "The national animal of Scotland is the Unicorn.", chocs.cc, chocs.ccb1);
    var day18 = createDate(18, "Billy goats urinate on their own heads to smell more attractive to females.", chocs.star, chocs.starb2);
    var day19 = createDate(19, "Nearly three percent of the ice in Antarctic glaciers is penguin urine.", chocs.holly, chocs.hollyb1);
    var day20 = createDate(20, "The leg bones of a bat are so thin that no bat can walk.", chocs.cc, chocs.ccb2);
    var day21 = createDate(21, "Polar Bears trying to blend in with the ice will cover up their black nose with their paws.", chocs.tree, chocs.treeb1);
    var day22 = createDate(22, "There are more fake flamingos in the world than real ones.", chocs.holly, chocs.hollyb2);
    var day23 = createDate(23, "Russia didn't consider beer to be alcohol until 2011. It was previously classified as a soft drink.", chocs.cc, chocs.ccb1);
    var day24 = createDate(24, "Nowhere in the Humpty Dumpty Nursery Rhyme does it say that Humpty Dumpty is an egg.", chocs.tree, chocs.treeb2);    

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
        y = topBorder;
        for (var i = 0; i < tilesDown; i++) {
            var row = [];
            positions.push(row);
            var x = leftBorder;
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