import { Inhabitant } from '../types/Inhabitant';

export const getInhabitants = (): Inhabitant[] => {
    const inhabitants = JSON.parse(localStorage.getItem('inhabitants') || '[]');
    return inhabitants
}

export const getInhabitantById = (residentid: number): Inhabitant | undefined => {
    const inhabitants = getInhabitants();
    return inhabitants.find((inhabitant) => inhabitant.residentid === residentid);
};

export const updateInhabitantById = (residentid: number, updatedInhabitant: Inhabitant): Inhabitant | undefined => {
    const inhabitants = getInhabitants();
    const index = inhabitants.findIndex((inhabitant) => inhabitant.residentid === residentid);

    if (index !== -1){
        inhabitants[index] = updatedInhabitant;
        localStorage.setItem('inhabitants', JSON.stringify(inhabitants));
        return updatedInhabitant;
    }

    return undefined;
}

