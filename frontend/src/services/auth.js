export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jvernvijnijvniernvimaofkcmiernsn',
        user: {
          name: 'Relampago McQueen',
          email: 'mcqueen@gmail.com',
        },
      });
    }, 2000);
  });
}
