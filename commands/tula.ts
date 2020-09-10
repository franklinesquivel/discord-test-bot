import { User } from "discord.js";

const tula = (user: User) => {
    const rnd = Math.random() * 25;

    let xtra: string = "";

    if (rnd === 0) {
        xtra = "F";
    } else if (rnd <= 5) {
        xtra = `Nice dick bro`;
    } else if (rnd <= 10) {
        xtra = `Amigoooo`;
    } else if (rnd <= 15) {
        xtra = `Te enlistaste en los X-men?`;
    } else if (rnd <= 20) {
        xtra = `Carrera de 3 piernas? Por acá`;
    } else if (rnd <= 25) {
        xtra = `No! ${user.username}-sempai, tenga cuidado!`;
    }

    return `A <@${user.id}> le mide ${rnd.toFixed(2)}cm. ${xtra}`;
};

export default tula;
