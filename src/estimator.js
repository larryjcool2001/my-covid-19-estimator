const covid19ImpactEstimator = (data) => {
    const input = data;
    var data = {
        name: "Africa", // Input Region of Africa
        avgAge: 19.7, // Input Average Age
        avgDailyIncomeInUSD: 5, // Average Daily Income
        avgDailyIncomePopulation: 0.71, // Average Daily Income population
        periodType: "days", // Period Type 
        timeToElapse: 58, // Time to Elapse
        reportedCases: 674, // reported cases
        population: 66622705, // Population
        totalHospitalBeds: 1380614 // Total Hospital Beds
      },
    return {
      data: input,
      impact: {
        currentlyInfected: reportedCases * 10, // The currently Impact for currentlyInfected persons
        infectionsByRequestedTime: currentlyInfected * 1024, // The projected number of infections after a 30 day period
      },
      severeImpact: {
        currentlyInfected: reportedCases * 50, // The currently severeImpact for currentlyInfected persons
        infectionsByRequestedTime: currentlyInfected * 1024, // The projected number of infections after a 30 day period
        severeCasesByRequestedTime: infectionsByRequestedTime * 15/100, // Estimated number of severe positive cases that will require hospitalization to recover.
        hospitalBedsByRequestedTime: (35/100 * severeCasesByRequestedTime) - totalHospitalBeds, // Estimated Hospital Beds available for COVID-19 Patients.
        casesForICUByRequestedTime: 5/100 * infectionsByRequestedTime, // Estimated number of severe positive cases that will require ICU care.
        casesForVentilatorsByRequestedTime: 2/100 * infectionsByRequestedTime,// Estimated number of severe positive cases that will require ventilators.
        dollarsInFlight: (infectionsByRequestedTime x 0.65) x 1.5 x 30;
      };
    };
};

export default covid19ImpactEstimator;
