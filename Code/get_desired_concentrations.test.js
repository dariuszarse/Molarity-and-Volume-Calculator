function get_desired_concentrations(concentrations) {
    let concentration_converted = [];
    for (let i = 0; i < concentrations.length; i++) {
      let concentration = Number(concentrations[i].value);
      let concentration_unit = Number(concentrations[i].unit);
  
      if (concentration_unit == 1) {
        concentration_converted[i] = concentration * 1000000;
      } else if (concentration_unit == 2) {
        concentration_converted[i] = concentration * 1000;
      } else {
        concentration_converted[i] = concentration;
      }
    }
    return concentration_converted;
  }

  describe('get_desired_concentrations', () => {
    it('converts desired molarities to micromol', () => {
      const concentrations = [
        { value: 100, unit: 2 },
        { value: 10, unit: 2 },
        { value: 4, unit: 3 },
        { value: 4, unit: 3 },
      ];
  
      const expected = [100000, 10000, 4, 4];
      expect(get_desired_concentrations(concentrations)).toEqual(expected);
    });
  });
  