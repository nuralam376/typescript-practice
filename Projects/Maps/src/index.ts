import { Company } from './Company';
import { CustomeMap } from './CustomMap';
import { User } from './User';
const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomeMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
