import keys from '../../private/keys.json';

export default function findKey(keyName) {
    let key = keys.find(item => item.title == keyName);
    return key.apiKey;
};