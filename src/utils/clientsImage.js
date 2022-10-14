import amazon from '../assets/svg/clients/amazon.svg'
import apple from '../assets/svg/clients/apple.svg'
import chase from '../assets/svg/clients/chase.svg'
import directv from '../assets/svg/clients/directv.svg'
import ge from '../assets/svg/clients/ge.svg'
import hyundai from '../assets/svg/clients/hyundai.svg'
import intuit from '../assets/svg/clients/intuit.svg'
import nike from '../assets/svg/clients/nike.svg'
import oracle from '../assets/svg/clients/oracle.svg'
import panavision from '../assets/svg/clients/panavision.svg'
import southwest from '../assets/svg/clients/southwest.svg'
import technicolor from '../assets/svg/clients/technicolor.svg'
import vanceAndHines from '../assets/svg/clients/vanceAndHines.svg'
import verizon from '../assets/svg/clients/verizon.svg'
import volkswagen from '../assets/svg/clients/volkswagen.svg'
import walmart from '../assets/svg/clients/walmart.svg'


export const clientsImage = (client) => {
    const clientID = client.toLowerCase();
    switch (clientID) {
        case 'amazon':
            return amazon;
        case 'apple':
            return apple;
        case 'chase':
            return chase;
        case 'directv':
            return directv;
        case 'ge':
            return ge;
        case 'hyundai':
            return hyundai;
        case 'intuit':
            return intuit;
        case 'nike':
            return nike;
        case 'oracle':
            return oracle;
        case 'panavision':
            return panavision;
        case 'southwest airlines':
            return southwest;
        case 'technicolor':
            return technicolor;
        case 'vance and hines':
            return vanceAndHines;
        case 'verizon':
            return verizon;
        case 'volkswagen':
            return volkswagen;
        case 'walmart':
            return walmart;
        default:
            break;
    }
}
