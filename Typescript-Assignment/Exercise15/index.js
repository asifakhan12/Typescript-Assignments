/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
var Guest_list = ["Ayan", "Arish", "Ahad"];
// Print message about guest who can't make it
var guestCantMakeIt = "Ayan";
console.log("Unfortunately, ".concat(guestCantMakeIt, " can't make it to dinner."));
var newGuest = 'anil';
Guest_list[Guest_list.indexOf(guestCantMakeIt)] = newGuest;
Guest_list.map(function (item) {
    return console.log("".concat(item, ",now your are invited to dinner"));
});
