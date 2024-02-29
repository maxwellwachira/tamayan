const formatNumberWithCommas = (number: number | undefined): string => {
    if(number)
        return number.toLocaleString();
    return "";
};


export {
    formatNumberWithCommas
}