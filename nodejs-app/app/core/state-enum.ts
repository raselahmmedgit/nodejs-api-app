export enum StateEnum {
  Minnesota = 1,
  NewYork = 2
  };

  export const StateEnumLabel = new Map<number, string>([
    [StateEnum.Minnesota, 'Minnesota'],
    [StateEnum.NewYork, 'New York']
  ]);

  //console.log(StateEnumLabel.get(StateEnum.NewYork)); //New York