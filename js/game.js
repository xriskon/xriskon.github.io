const questions = [
    "Give A 3 Minute Lecture On Safe Sex.",
    "Go To Your Neighbor And Ask If They Could Give You A Condom.",
    "Buy Beer For All The Participants In The Room.",
    "Flirt With A Random Person In The Room.",
    "Dance Like A Ballerina.",
    "Call To The Nearest Pharmacy And Ask Them If They’ve Got A Goldfish First Aid Kit.",
    "Pretend To Be Another Player For The Rest Of The Game.",
    "Start Singing A Pop Song Out Loud.",
    "Wear All Your Clothes Back To Front.",
    "Massage Your Friend’s Feet With Your Feet.",
    "Try To Make The Person Next To You Laugh. You’ve Got 60 Seconds.",
    "Call Your Parents And Tell Them That They Are Grounded For A Week.",
    "Stand In The Street/Balcony And Yell “I Am (Name)! Hear Me Roar!!”",
    "Let Someone In The Room Write Whatever They Want From Your Facebook Account.",
    "Tell A Review Of Your Last Date.",
    "Make A Toilet Paper Tube Top And Wear It.",
    "Publish The Most Embarrassing Picture Of You Taken Recently. Caption It #Loveyourself.",
    "Eat A Lemon.",
    "Tell Your Darkest Secret.",
    "Break an egg on your own head.",
    "Let someone in the group make you a mocktail with milk and kitchen spices/sauces and drink it up.",
    "Talk in an accent for the rest of the game.",
    "Eat a teaspoon of the spiciest spice you have in the kitchen cabinet.",
    "Hand over your phone and let the group send a text to a person in your contacts of their choosing.",
    "Stick at least one curse word into every sentence for the rest of the game.",
    "Seduce a member of the group.",
    "Go commando and wear your undies on your head for the rest of the game.",
    "Call the tenth person in your phone’s contacts and sing Color Me Badd’s “I Wanna Sex You Up” to them.",
    "Transfer an ice cube from your mouth to another member of the group’s mouth.",
    "Kiss the person to your right.",
    "Striptease for a minute.",
    "Find the person in the group who was born closest to your time of birth and lick their face or let them lick yours.",
    "Let the group look through your photos for a whole minute.",
    "Send a dirty text to someone in your contacts of the group’s choosing.",
    "Let the group draw a penis in permanent marker somewhere on your body.",
    "Pole dance without the pole.",
    "Do your best fake moan while looking the person to the left of you in the eye.",
    "Have someone blindfold you, and then have everyone in the group kiss you on the cheek. You have to either say which one is your partner, and then kiss them on the lips, OR you have to choose one person that you want to kiss on the lips.",
    "With your eyes closed and the other person or people standing across from you in the room, walk with your hands out. You have to kiss the first person you touch exactly where you touch them.",
    "You have to leave an R-rated voicemail for an ex.",
    "Someone has to lick peanut butter, chocolate sauce, or whipped cream off your finger, cheek, or somewhere of their choice.",
    "Someone feeds you M&Ms or other small chocolate candy, and you have to say, 'Thank you, Daddy', after each one.",
    "If there’s a pool, you have to go skinny dipping, and you have to choose one buddy to go with you.",
    "You’re in school and you’ve been a bad student. For the next round, you’re in time-out on someone’s lap.",
    "Someone goes onto your Amazon account and buys a special toy for you that’s $20 or less.",
    "Talk to your hand like you’re making a game plan to sleep with someone else who is in the room.",
    "Lay down on the ground and have someone pretend like they’re using chalk to draw an outline of your body.",
    "Go to Cosmopolitan’s website’s love section and find a position you’ve never heard of. Then, try to act it out using whatever furniture and pillows you have at your disposal.",
    "You leave the room. Everyone pours a shot. You come back into the room and take one of the shots that was poured. You have to sit on the lap of whomever poured that drink for the rest of the round. (People can take the other shots.)",
    "You have to undress down to your accessories and skivvies. If you want to keep any clothes on, you have to take a shot for every piece of clothing you want to keep.",
    "Lightly trace your hands over someone else’s lips and whisper, 'I’m coming, I’m coming', five times.",
    "Put on a swimming suit and have someone rub sunscreen on your back. Wear the suit for the rest of the evening.",
    "Someone gives you a back massage for one minutes while you’re blindfolded. If you like their style, you can choose to kiss them afterwards, but without knowing their identity.",
    "You have to keep your hand on the very inner thigh of the person next to you for the next round.",
    "If you got to have a threesome with people in this room, who would you do it with and why?",
    "Let someone go through your YouTube history and read it out to the group.",
    "Have you ever sexted anyone? If so, read one of the sexts in a fake British accent.",
    "Who do you most want to sleep with, out of everyone here?",
    "Where are you on the straight/queer spectrum? Be honest!",
    "What’s your favorite fantasy to pleasure yourself to?",
    "Where is the weirdest place that you’ve ever gone solo?",
    "What is your favorite 'special' toy?",
    "How many people have you slept with?",
    "Who’s the hottest person at work?",
    "What is your favorite body part to suck on?",
    "What's the kinkiest thing you've ever done?",
    "Describe to the left of you in-bed personality in three words.",
    "Kiss the person to your left.",
    "Kiss the person to your right.",
    "Call a random number and try to flirt with the person who answers.",
    "Text your crush or SO and tell them what you’d do if they took you on a date.",
    "Text your SO or crush with a dirty emoji pick-up line.",
    "Dirty talk to your pillow.",
    "Remove one item of clothing.",
    "Remove two items of clothing.",
    "Try to remove your socks with your teeth.",
    "Lick a shoe.",
    "Switch underwear with the person to your right (if they agree).",
    "Let someone in the group text your crush.",
    "Open Instagram and choose a person at random (no one in the room) and like every single post from the last year.",
    "Switch bras without leaving the room.",
    "Go around the room and guess everyone’s kinks.",
    "Do 30 situps.",
    "Eat a raw piece of garlic.",
    "Eat a raw egg",
    "Do the worm dance.",
    "Try to put your fist in your mouth",
    "Fill your mouth with water and act as a fountain.",
    "Take off your bra and put it on one of the boys in the group.",
    "Let someone scroll through your photo album for 30 seconds.",
    "Type a text with your eyes closed and send it to a random person.",
    "Who in this room would you most want to kiss?",
    "Who in this room would you most want to sleep with?",
    "Who in this room would you most want to see naked?",
    "Describe your first kiss.",
    "How old were you when you had sex for the first time?",
    "How often do you masturbate?",
    "Do you own any sex toys? (And if yes, what are they?)",
    "What's the most embarrassing thing that's ever happened to you during sex?",
    "What's the grossest thing that's ever happened to you during sex?",
    "Who's the best kisser you've ever met?",
    "Who's the best sexual partner you've ever had?",
    "What's the weirdest thing that turns you on?",
    "Describe the underwear you're wearing right now.",
    "Have you ever fantasized about a person in the room?",
    "Have you ever taken nudes?",
    "Have you ever had anal sex?",
    "Who you think likes anal sex?",
    "What's your favourite sex position?",
    "Give a chair a lap dance.",
    "Make out with the back of your hand for 15 seconds.",
    "Demonstrate your oral sex technique on the nearest appropriate object.",
    "Do your best impression of a porno that involves a pizza delivery guy.",
    "Do a dramatic reading of a sex scene from a romance novel.",
    "Demonstrate your hand job technique on the nearest appropriate object.",
    "Spin an empty bottle and kiss whoever it lands on (as long as they consent).",
    "Do a reenactment of the first time you had sex.",
    "Do a reenactment of your favourite sex position.",
    "Dance seductively to 'Pony' by Ginuwine.",
    "Dance seductively to 'I'm Too Sexy' by Right Said Fred.",
    "Take off your shirt and keep it off for the next round.",
    "Lick whipped cream/chocolate sauce off the person to your right off their chest.",
    "Do Seven Minutes in Heaven with the person opposite of you.",
    "Take off your shirt and keep it off for the next round.",
    "Take off your pants and keep them off for the next round.",
    "Take off your shirt and pants and keep them off for the next round.",
    "Try to turn on someone in the room using just your voice.",
    "Crawl over to the person opposite of you and kiss their feet.",
    "Swap shirts with someone in the room.",
    "Pass someone a sip of your drink from your mouth.",
    "Show the group a sexy selfie saved to your phone.",
    "Grab a marker and let someone in the group draw a tattoo of their choice on your butt.",
];

var count = 0;
var MAX_COUNT = questions.length;

function load_question() {
    count++;
    if (count <= 9) {
        document.getElementById("question_count").innerHTML = "Question 0" + count + "/" + MAX_COUNT;
    } else {
        document.getElementById("question_count").innerHTML = "Question " + count + "/" + MAX_COUNT;
    }

    var next_question = getRandomInt(0, questions.length);
    document.getElementById("question").innerHTML = questions[next_question];
    questions.splice(next_question, 1);

    var shots_number = getRandomInt(1, 6);
    var shot_list = document.getElementById("shot_list");
    shot_list.innerHTML = "";
    for (i = 0; i < shots_number; i++) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = "../img/game/logo-sm.svg";
        img.height = 60;
        if (i != shots_number) {
            img.className = "p-2";
        }
        img.alt = "shot";
        li.appendChild(img);
        shot_list.appendChild(li);
    }
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}
// JQuery
$(function () {
    load_question();
    $("#loadingPage").delay(500).fadeOut(1000);

    $("#next-question").click(function () {
        if (questions.length == 0) {
            end_game();
        } else {
            load_question();
        }
    });

    function end_game() {
        $("#end-game-modal").modal("toggle");
    }
});
