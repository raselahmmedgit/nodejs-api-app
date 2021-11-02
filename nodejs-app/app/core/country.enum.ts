export enum CountryEnum {
  UnitedStates = 1,
  Bangladesh = 2
  };

  export const CountryEnumLabel = new Map<number, string>([
    [CountryEnum.UnitedStates, 'USA'],
    [CountryEnum.Bangladesh, 'Bangladesh']
  ]);

  //console.log(CountryEnumLabel.get(CountryEnum.UnitedStates)); //USA