export const IsValid = (arg) => {
    return (
        arg !== null &&
        arg !== "" &&
        arg !== undefined &&
        Object.keys(arg).length !== 0
    );
}


export const IsDataValid = (arg1, arg2) => {
    return (
        arg1 !== null &&
        arg1 !== "" &&
        arg1 !== undefined &&
        Object.keys(arg1).length !== 0 &&
        IsValid(arg2)
    );
}
