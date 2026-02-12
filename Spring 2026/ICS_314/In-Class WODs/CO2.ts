type CO2 = {
    year: number;
    month: number;
    decimal: number;
    average: number;
    average_unc:number;
    trend: number;
    trend_unc: number;
}

type CO2Date = {
    year: any;
    month: any;
}

const co2: CO2[] = [
{ year: 1979, month: 1, decimal: 1979.042, average: 336.56, average_unc: 0.11, trend: 335.92, trend_unc: 0.09 },
{ year: 1979, month: 2, decimal: 1979.125, average: 337.29, average_unc: 0.09, trend: 336.25, trend_unc: 0.09 },
{ year: 1979, month: 3, decimal: 1979.208, average: 337.88, average_unc: 0.11, trend: 336.51, trend_unc: 0.09 },
{ year: 1979, month: 4, decimal: 1979.292, average: 338.32, average_unc: 0.13, trend: 336.72, trend_unc: 0.10 },
{ year: 1979, month: 5, decimal: 1979.375, average: 338.26, average_unc: 0.04, trend: 336.71, trend_unc: 0.10 },
{ year: 1979, month: 6, decimal: 1979.458, average: 337.38, average_unc: 0.18, trend: 336.61, trend_unc: 0.10 },
{ year: 1979, month: 7, decimal: 1979.542, average: 335.56, average_unc: 0.24, trend: 336.41, trend_unc: 0.11 },
{ year: 1979, month: 8, decimal: 1979.625, average: 334.36, average_unc: 0.26, trend: 336.65, trend_unc: 0.11 },
{ year: 1979, month: 9, decimal: 1979.708, average: 335.02, average_unc: 0.23, trend: 337.41, trend_unc: 0.11 }]

const unrecoverable = (data: CO2[], year: number, month: number): boolean => 
    data.filter((item) => item.year == year)
    .filter((year) => year.month == month)[0].average > 415

function unrecoverableYearMonth(data: CO2[]):CO2Date {
    const lastSafeIndex = data.findLastIndex(entry => entry.average <= 415);

    if (lastSafeIndex === -1 || lastSafeIndex === data.length - 1) {
        console.log("CO2 levels have not yet remained permanently above the unrecoverable level in this dataset.");
        return { year: undefined, month: undefined };
    }

    // 3. The "unrecoverable" starts at the very next entry
    const firstUnrecoverableEntry = data[lastSafeIndex + 1];

    return {
        year: firstUnrecoverableEntry.year,
        month: firstUnrecoverableEntry.month
    };
}
    