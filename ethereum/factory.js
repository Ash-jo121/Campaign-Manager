import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x52542A00E314D48750982740C6CDDa33c9161bD7'

);

export default instance;