// CODEWARS: Calculating with Functions
export function zero(func) { return func ? func(0) : 0; };
export function one(func) { return func ? func(1) : 1; };
export function two(func) { return func ? func(2) : 2; };
export function three(func) { return func ? func(3) : 3; };
export function four(func) { return func ? func(4) : 4; };
export function five(func) { return func ? func(5) : 5; };
export function six(func) { return func ? func(6) : 6; };
export function seven(func) { return func ? func(7) : 7; };
export function eight(func) { return func ? func(8) : 8; };
export function nine(func) { return func ? func(9) : 9; };

export function plus(b) { return function (a) { return a + b; }; };
export function minus(b) { return function (a) { return a - b; }; };
export function times(b) { return function (a) { return a * b; }; };
export function dividedBy(b) { return function (a) { return Math.floor(a / b); }; };