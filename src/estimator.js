const covid19ImpactEstimator = (data) => {
    const input = data;
    var data = {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71,
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
      },
    return {
      data: input,
      impact: {
        currentlyInfected: reportedCases * 10, // The currently Impact for currentlyInfected persons
        infectionsByRequestedTime: currentlyInfected * 1024, // The projected number of infections after a 30 day period
      },
      severeImpact: {
        currentlyInfected: reportedCases * 50,
        infectionsByRequestedTime: currentlyInfected * 1024, // The projected number of infections after a 30 day period
      };
    };
};

export default covid19ImpactEstimator;
