// get available solutions (but with solutions array as input, because using DOM to simulate html elements didn't work)
function get_available_solutions(solutions) {
    let solution_converted = [];
    for (let i = 0; i < solutions.length; i++) {
      let solution = Number(solutions[i].value);
      let solution_unit = Number(solutions[i].unit);
  
      if (solution_unit == 1) {
        solution_converted[i] = solution * 1000000;
      } else if (solution_unit == 2) {
        solution_converted[i] = solution * 1000;
      } else {
        solution_converted[i] = solution;
      }
    }
    return solution_converted;
  }

  describe('get_available_solutions', () => {
    it('(no retrieval of data as usually planned, but) converts the available solutions to micromol', () => {
      const solutions = [
        { value: 1, unit: 1 },
        { value: 100, unit: 2 },
        { value: 1, unit: 2 },
        { value: 1, unit: 2 },
      ];
  
      const expected = [1000000, 100000, 1000, 1000];
      expect(get_available_solutions(solutions)).toEqual(expected);
    });
  });
  