function list(I1,I2,I3) {
  console.log(`${this.date}'s list is : ${I1}, ${I2} and ${I3} `)
}

const day = {date: 'Today'};
list.call(day, "Item1", "Item2", "Item3") // Invoked Immediately but passing args seperately
list.apply(day, ["ApplyItem1", "ApplyItem2", "ApplyItem3"])  // Invoked Immediately, args in array
const bindRes = list.bind(day, "BindItem1", "BindItem2", "BindItem3") // creates function with args and call it later

bindRes()


