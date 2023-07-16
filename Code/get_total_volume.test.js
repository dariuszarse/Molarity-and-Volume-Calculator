function get_total_volume(total_volume, total_volume_unit) {
    let total_volume_converted;
    if (total_volume_unit == 1) {
      total_volume_converted = total_volume * 1000;
    } else {
      total_volume_converted = total_volume;
    }
    return total_volume_converted;
  }

  describe('get_total_volume', () => {
    it('converts total volume of final solution to its correct unit', () => {
      const total_volume = 1;
      const total_volume_unit = 1;
  
      const expected = 1000;
      expect(get_total_volume(total_volume, total_volume_unit)).toEqual(expected);
    });
  });
  