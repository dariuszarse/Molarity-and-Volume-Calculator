// test for calculating functionality
function calculate_volumes(solution_converted, concentration_converted, total_volume_converted) {
    let volumes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
    for (let i = 0; i < 10; i++) {
      if (solution_converted[i] !== 0 && concentration_converted[i] !== 0) {
        volumes[i] = total_volume_converted / (solution_converted[i] / concentration_converted[i]);
      }
    }
    let fill_up_volume = total_volume_converted - volumes.reduce((acc, cur) => acc + cur, 0);
  
    return { volumes, fill_up_volume };
  }
  
  describe('calculate_volumes', () => {
    it('calculates volumes for each solution and fill up volume', () => {
      const solution_converted = [1000000, 100000, 1000, 1000, 0, 0, 0, 0, 0, 0];
      const concentration_converted = [100000, 10000, 4, 4, 0, 0, 0, 0, 0, 0];
      const total_volume_converted = 1000;
  
      const expected = {
        volumes: [100, 100, 4, 4, 0, 0, 0, 0, 0, 0],
        fill_up_volume: 792
      };
      expect(calculate_volumes(solution_converted, concentration_converted, total_volume_converted)).toEqual(expected);
    });
  });
  