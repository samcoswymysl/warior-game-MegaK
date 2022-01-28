export class Warrior {
    constructor(private warriorName: string, private warriorHitPoints: number, private warriorHp: number) {

    }

    set hp(hp: number) {
        this.warriorHp = hp;
    }

    get hp() {
        return this.warriorHp;
    }

    get hitPoints() {
        return this.warriorHitPoints;
    }

    get name() {
        return this.warriorName;
    }

    levelUp() {
        this.warriorHitPoints *= 1.1;
        this.warriorHp *= 1.1;
    }
}
