const execGuard = (guards, from, to, callback) => {
    if (guards.length == 0) return callback();
    const currentGuard = guards[0];

    currentGuard(from, to, res => {
        if (res) {
            callback(res);
        } else {
            execGuard(guards.slice(1), from, to, callback);
        }
    })
}

export const RouteGuard = (guards) => {
    return (from, to, next) =>
        execGuard(guards, from, to, res => next(res))
}