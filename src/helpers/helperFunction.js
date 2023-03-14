const sortGuestsDescending = (guests) => {
  return guests.slice().sort((a, b) => b - a);
};
const assignRooms = (guests, premiumRooms, economyRooms) => {
  const premiumGuests = [];
  const economyGuests = [];
  const sortedGuests = sortGuestsDescending(guests);

  sortedGuests.forEach((guest) => {
    if (guest >= 100 && premiumRooms > 0) {
      premiumGuests.push(guest);
      premiumRooms--;
    } else if (guest < 100 && economyRooms > 0) {
      economyGuests.push(guest);
      economyRooms--;
    }
  });
  return [premiumGuests, economyGuests];
};
export { assignRooms };
