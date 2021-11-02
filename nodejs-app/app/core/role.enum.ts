export enum RoleEnum {
  Admin = 1,
  Member = 2
  };

  export const RoleEnumLabel = new Map<number, string>([
    [RoleEnum.Admin, 'Admin'],
    [RoleEnum.Member, 'Member']
  ]);

  //console.log(RoleEnumLabel.get(RoleEnum.Admin)); //Admin