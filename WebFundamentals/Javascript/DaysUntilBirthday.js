var daysUntilMyBirthday = 23;

function birthday (daysUntilMyBirthday) {
    while (daysUntilMyBirthday > 60) {
    console.log(daysUntilMyBirthday + " days until my birthday. Such a long time... :(");
    daysUntilMyBirthday--;
    }
    while (daysUntilMyBirthday <= 60 && daysUntilMyBirthday > 30) {
    console.log(daysUntilMyBirthday + " days until brithday. Still some time to go.");
    daysUntilMyBirthday--;
    }
    while (daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 5) {
    console.log(daysUntilMyBirthday + " days until brithday. Plan the party! :)");
    daysUntilMyBirthday--;
    }
    while (daysUntilMyBirthday <= 5 && daysUntilMyBirthday >=1) {
    console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!");
    daysUntilMyBirthday--;
    }
    if (daysUntilMyBirthday === 0) {
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
    console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
    console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
}
birthday(daysUntilMyBirthday);
