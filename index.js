function sum(...args) {
    return args.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum(2 + 3 + 5));
