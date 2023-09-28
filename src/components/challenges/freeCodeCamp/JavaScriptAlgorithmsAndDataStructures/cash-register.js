export function checkCashRegister(price, cash, cid) {

    let change = [];
    let changeDue = cash - price;
    let tmpAvailableCash = cidArray(cid.reverse());
    let totalCash = tmpAvailableCash[tmpAvailableCash.length - 1];
    let availableCash = tmpAvailableCash.slice(0, -1);

    function Result(status, change) {
        this.status = status;
        this.change = change;
    }

    let tmpChange = changeCheck(changeDue, availableCash, totalCash);
    let totalCidRemaining = tmpChange[tmpChange.length - 1];
    change = tmpChange.slice(0, -1);

    if (totalCidRemaining < 0) {
        // if insufficient change return {status: "INSUFFICIENT_FUNDS", change: []}
        return new Result("INSUFFICIENT_FUNDS", []);
    } else if (totalCidRemaining == 0) {
        // if cash in draw = change due return {status: "CLOSED", change: [...]} - so no money left in draw
        return new Result("CLOSED", change);
    } else {
        // otherwise return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key
        return new Result("OPEN", change);
    }
};

// Function to get cash in draw to a single array of amounts
export function cidArray(cidReverse) {
    let availableCash = [];
    let totalCash = 0;
    for (let index = 0; index < cidReverse.length; index++) {
        availableCash.push(cidReverse[index][1]);
        totalCash += parseFloat(cidReverse[index][1].toFixed(2));
    }
    availableCash.push(totalCash);
    return availableCash;
};

export function changeCheck(changeDue, availableCash, totalCash) {
    let qtyReq = 0;
    let remainder = changeDue;
    let result = [];
    let currencyName = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]
    let currencyValue = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01]

    for (let index = 0; index < currencyValue.length; index++) {
        let tmpResult = [];
        qtyReq = Math.min(Math.floor(remainder / currencyValue[index]), Math.floor(availableCash[index] / currencyValue[index]));
        remainder = parseFloat((remainder - (qtyReq * currencyValue[index])).toFixed(2));

        if (qtyReq > 0) {
            tmpResult.push(currencyName[index], qtyReq * currencyValue[index]);
            result.push(tmpResult);
        }
    }

    if (remainder > 0) {
        result.length = 0;
        result.push([], -1);
    } else {
        if (totalCash - changeDue == 0) {
            result = result.reverse();
            let closedResult = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
            for (let index = 0; index < result.length; index++) {
                for (let j = 0; j < closedResult.length; j++) {
                    if (result[index][0] == closedResult[j][0]) {
                        closedResult[j][1] = result[index][1];
                    }
                }
            }
            result = closedResult;
        }
        result.push(totalCash - changeDue);
        // availabeCash - change Due = will then determine if insufficient funds, all change used, or change still available
    }

    return result;
}

// let cashHelper = [
//     { name: "ONE HUNDRED", value: 100.00, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "TWENTY", value: 20.00, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "TEN", value: 10.00, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "FIVE", value: 5.00, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "ONE", value: 1.00, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "QUARTER", value: 0.25, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "DIME", value: 0.10, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "NICKEL", value: 0.05, qtyAvail: 0, qty: 0, used: 0 },
//     { name: "PENNY", value: 0.01, qtyAvail: 0, qty: 0, used: 0 },
// ]