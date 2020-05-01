export default (account: IArcAccount): Promise<void> => {

  const _sqlbinding: IDatabaseArcAccount = {
    passwd: account.passwd,
    device: account.device,
    uid: account.uid,
    ucode: account.ucode,
    token: account.token,
    banned: account.banned ? 'true' : 'false',
    name: account.name // the last argument
  };

  const _binding_updates: string = (() => {
    let _array: Array<string> = [];
    Object.keys(_sqlbinding).forEach((v) => {
      if (v != 'name') _array.push(`${v} = ?`);
    });
    return _array.join(', ');
  })();

  const _sql: string =
    'UPDATE `accounts` ' +
    `SET ${_binding_updates} WHERE \`name\` == ?`;

  // execute sql
  return DATABASE_ARCACCOUNT.run(_sql, Object.values(_sqlbinding));

}
