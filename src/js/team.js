/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import Bowman from './bowman';
import Daemon from './daemon';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Выбранный персонаж уже добавлен.');
    } else {
      this.members.add(character);
    }
  }

  addAll(...character) {
    character.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const teamIterators = this.members.values();
    for (let i = 0; i < this.members.size; i++) {
      yield teamIterators.next().value;
    }
  }
}

const team = new Team();
team.add(new Bowman('Boo'));
team.add(new Daemon('Aaaa'));
console.log(team);
for (const member of team) {
  console.log(member);
}
