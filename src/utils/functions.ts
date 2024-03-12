const formatNumberWithCommas = (number: number | undefined): string => {
    if(number)
        return number.toLocaleString();
    return "";
};


const displayMonthAndYear = (dateString: Date | undefined): string =>{
    if(dateString){
        const date = new Date(dateString);
       return  `${date.toLocaleString('en', { month: 'long' })} ${date.getFullYear()}`;
    }

    return "";
}


export {
    formatNumberWithCommas,
    displayMonthAndYear
}