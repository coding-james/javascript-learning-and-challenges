export let cookBeans = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans');
        }, 1000);
    });
};

export let steamBroccoli = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli');
        }, 1000);
    });
};

export let cookRice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice');
        }, 1000);
    });
};

export let bakeChicken = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('chicken');
        }, 1000);
    });
};