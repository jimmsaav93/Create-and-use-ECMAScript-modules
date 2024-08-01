
import crypto from 'crypto';


function generateRandomId() {
    return crypto.randomBytes(16).toString('hex');
}


export default generateRandomId;
