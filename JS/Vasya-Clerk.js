// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine) {
  let currentNotes = [0, 0, 0]; // [25,50, 100] spot
  for (var i = 0; i < peopleInLine.length; i++) {
    console.log(5, peopleInLine[i]);
    console.log(6, currentNotes);
    switch (peopleInLine[i]) {
      case 25:
        currentNotes[0]++;
        break;
      case 50:
        if (currentNotes[0] > 0) {
          currentNotes[0]--;
          currentNotes[1]++;
          break;
        } else {
          return "NO";
        }
      case 100:
        if (currentNotes[0] > 0 && currentNotes[1] > 0) {
          currentNotes[0]--;
          currentNotes[1]--;
          currentNotes[2]++;
          break;
        } else if (currentNotes[0] >= 3) {
          currentNotes[0] = currentNotes[0] - 3;
          currentNotes[2]++;
        } else {
          return "NO";
        }
        break;
      default:
        console.error("Please input a valid ");
    }
  }
  return "YES";
}
tickets([25, 100]);

//Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
// Test.assertEquals(tickets([25, 100]), "NO");
