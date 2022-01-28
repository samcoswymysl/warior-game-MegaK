import { Warrior } from "./warrior";


export  class Arena {
    private activeWarrior = 2;
    constructor(private warrior1: Warrior, private  warrior2: Warrior) {

        if (!(warrior1 instanceof Warrior)) {
            throw new Error('warrior1 must be an instance of Warrior class!');
        }

        if (!(warrior2 instanceof Warrior)) {
            throw new Error('warrior2 must be an instance of Warrior class!');
        }
    }

    fight(): Warrior | null {
        const attacker = this.activeWarrior === 1 ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior === 1 ? this.warrior2 : this.warrior1;

        const attackedNewHp =  attacked.hp - attacker.hitPoints;

        console.log(attacker.name, 'is attacking', attacked.name, 'and how he has', attackedNewHp, 'hp');

        attacked.hp = attackedNewHp;

        this.activeWarrior = this.activeWarrior === 1 ? 2 : 1;


        if (attackedNewHp <= 0) {
            console.log(attacked.name, 'goes to Valhalla');
            return attacker;
        }

        return null;
    }
}
