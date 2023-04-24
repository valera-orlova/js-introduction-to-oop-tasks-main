// BEGIN
export const getMutualFriends = (one, two) => {
  const mutualFriends = [];

  let oneFriends = one.getFriends();

  let idOfTwoFriends = two.getFriends().map(i => i.id);

  for (let item of oneFriends) {

    if (idOfTwoFriends.indexOf(item.id) != -1) {

      mutualFriends.push(item);
    }
  }

  return mutualFriends;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});