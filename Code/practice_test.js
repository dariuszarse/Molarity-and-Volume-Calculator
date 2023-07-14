function convertSolutionUnit(solution, solutionUnit) {
    if (solutionUnit === 1) {
      return solution * 1000000;
    } else if (solutionUnit === 2) {
      return solution * 1000;
    } else {
      return solution;
    }
  }
  
  function get_available_solutions(solutions, solutionUnits) {
    const solutionConverted = [];
  
    for (let i = 0; i < solutions.length; i++) {
      const solution = solutions[i];
      const solutionUnit = solutionUnits[i];
      const converted = convertSolutionUnit(solution, solutionUnit);
      solutionConverted.push(converted);
    }
  
    return solutionConverted;
  }
  
  module.exports = get_available_solutions;
  module.exports = convertSolutionUnit;
