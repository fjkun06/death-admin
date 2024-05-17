interface ILocaleLayout {
  children: React.ReactNode;
}
export default function LocaleLayout({ children }: ILocaleLayout) {
  // Validate that the incoming `locale` parameter is valid

  return <main id="datenschutz">{children}</main>;
}
