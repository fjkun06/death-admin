export default function accountTypeChecker(token: string) {
  const accountCode = token.toLowerCase().slice(0, 3);
  return accountCode === 'arz' ? 'Ärzte' : accountCode === 'ges' ? 'Gesundheitsämter' : accountCode ==='sta' ? 'Standesämter':'';
} 