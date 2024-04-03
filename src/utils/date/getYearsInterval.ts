export const getYearsInterval = (year: number) => {
    const startYear = year - 5;
    return [...Array(10)].map((_, index) => startYear + index);
};
