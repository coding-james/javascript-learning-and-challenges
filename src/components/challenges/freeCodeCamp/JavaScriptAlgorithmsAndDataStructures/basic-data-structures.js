export function addKeyValuePair(sampleObject, addKeys, addValues) {
    for (let index = 0; index < addKeys.length; index++) {
        sampleObject[addKeys[index]] = addValues[index];
    }

    return sampleObject
};

export function updateValues(sampleObject, modifyKeys, modifyValues) {
    for (let index = 0; index < modifyKeys.length; index++) {
        sampleObject[modifyKeys[index]] = modifyValues[index];
    }

    return sampleObject
};

export function updateValuesNested(sampleObject, modifyKeys, modifyValues) {
    for (let index = 0; index < modifyKeys.length; index++) {
        sampleObject.data.onlineStatus[modifyKeys[index]] = modifyValues[index];
    }

    return sampleObject
};

export function removeKeyPair(sampleObject, removeKeys) {

    for (let index = 0; index < removeKeys.length; index++) {
        delete sampleObject[removeKeys[index]];
    }

    return sampleObject;
};

export function objectAppears(sampleObject, searchObjects) {

    //checks that each object is found, if not returns false
    for (let index = 0; index < searchObjects.length; index++) {
        if (!sampleObject.hasOwnProperty(searchObjects[index]))
            return false;
    }

    return true;
};

export function iterateThrough(sampleObject) {
    let onlineCount = 0;

    for (let user in sampleObject) {
        if (sampleObject[user].online === true) {
            onlineCount++;
        }
    }
    return onlineCount;
};

export function listKeys(sampleObject) {
    return Object.keys(sampleObject);
}