function findDays(first, second) {
  const num1 = new Date(first);
  const num2 = new Date(second);
  const diffTime = Math.abs(num2 - num1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
console.log(findDays("12/13/2022", "12/13/2023"));

// class Member {
//   #counts;

//   constructor(sanoq) {
//     this.#counts = sanoq;
//   }

//   addMember(member) {
//     this.#counts = this.#counts + member;
//   }

//   removeMember(member) {
//     this.#counts = this.#counts - member;
//   }

//   inform() {
//     console.log(`memberlar soni ${this.#counts}`);
//   }
// }

// const member = new Member(5);
// member.removeMember(2);

// member.inform();

// const calculate = "11/10";
// console.log(eval(calculate));
// function FootBallPoints(wins, draws, losses) {
//   return wins * 3 + draws * 1 + losses * 0;
// }
// const result = FootBallPoints(3, 4, 2);
// console.log(result);
