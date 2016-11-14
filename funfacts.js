module.exports = function calendarCalc(currentDate, chocCookieArray) {
    function day(date, title, fact, chocolate, unlocked, eatenChoc) {
        this.date = date;
        this.title = title;
        this.fact = fact;
        this.chocolate = chocolate;
        this.unlocked = unlocked;   
        this.eatenChoc = eatenChoc; 
    }

    var createDate = function(dateindex, fact, chocolate) {
        var eaten;
        if (chocCookieArray.includes(dateindex)) {
            eaten = true;
        } else {
            eaten = false;
        }
       // if (chocCookieArray contains dateindex then true else false)
        return new day(dateindex, "Fun Fact #" + dateindex + ": ", fact, chocolate, currentDate >= dateindex, eaten);
    }
    
    var chocs = {
        star: "chocolateStar.png", 
        tree: "chocolateTree.png",
        cc: "chocolateCandyCane.png",
        holly: "chocolateHolly.png"
    }

    // daily fun facts
    var day1 = createDate(1, "Hamsters can run up to 9 kms a night.", chocs.star);
    var day2 = createDate(2, "If you google search 'askew', the content will tilt slightly.", chocs.tree);
    var day3 = createDate(3, "A 'jiffy' is the scientific name for 1/100th of a second.", chocs.cc);
    var day4 = createDate(4, "Every color of froot loop is the same flavour.", chocs.star);
    var day5 = createDate(5, "In Denmark, if you are unmarried at 25, you'll get cinnamon thrown all over you on your birthday.", chocs.holly);
    var day6 = createDate(6, "The man responsible for the modern frisbee design was cremated and made into frisbees.", chocs.tree);
    var day7 = createDate(7, "There are no bridges over the Amazon River.", chocs.holly);
    var day8 = createDate(8, "Stewardesses' is the longest word that is typed with only the left hand.", chocs.cc);
    var day9 = createDate(9, "If NASA sent birds into space they would soon die; they need gravity to swallow.", chocs.tree);
    var day10 = createDate(10, "Emus and kangaroos cannot walk backwards, and are on the Australian coat of arms for that reason.", chocs.star);
    var day11 = createDate(11, "Certain frogs can be frozen solid, then thawed, and survive.", chocs.cc);
    var day12 = createDate(12, "To escape the grip of a crocodile's jaws, push your thumbs into its eyeballs - it will let you go instantly.", chocs.holly);
    var day13 = createDate(13, "Leonardo da Vinci could write with one hand and draw with the other at the same time.", chocs.tree);
    var day14 = createDate(14, "All of the clocks in the movie 'Pulp Fiction' are stuck on 4:20.", chocs.cc);
    var day15 = createDate(15, "Google 'Do a barrel roll' and watch your results do a barrel roll.", chocs.star);
    var day16 = createDate(16, "For every human on Earth there are 1.6 million ants.", chocs.holly);
    var day17 = createDate(17, "The national animal of Scotland is the Unicorn.", chocs.cc);
    var day18 = createDate(18, "Billy goats urinate on their own heads to smell more attractive to females.", chocs.star);
    var day19 = createDate(19, "Nearly three percent of the ice in Antarctic glaciers is penguin urine.", chocs.holly);
    var day20 = createDate(20, "The leg bones of a bat are so thin that no bat can walk.", chocs.cc);
    var day21 = createDate(21, "About 8,000 Americans are injured by musical instruments each year.", chocs.tree);
    var day22 = createDate(22, "There are more fake flamingos in the world than real ones.", chocs.holly);
    var day23 = createDate(23, "France was still executing people by guillotine when Star Wars: A New Hope hit theatres.", chocs.cc);
    var day24 = createDate(24, "Nowhere in the Humpty Dumpty Nursery Rhyme does it say that Humpty Dumpty is an egg.", chocs.tree);    

    var calendarDates = {
    // for dates 6, 14, 20, 17, 7, 9
        calendarDatesRow1 : [day6, day14, day20, day17, day7, day9],
    // for dates 11, 24, 8, 21, 1, 12 
        calendarDatesRow2 : [day11, day24, day8, day21, day1, day12],
    // for dates 16, 18, 3, 15, 23, 4 
        calendarDatesRow3 : [day16, day18, day3, day15, day23, day4],
    // for dates 13, 19, 5, 22, 10, 2
        calendarDatesRow4 : [day13, day19, day5, day22, day10, day2]
    }

    return calendarDates;
}