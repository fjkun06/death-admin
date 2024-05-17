interface ILocaleLayout {
  children: React.ReactNode;
}
export default function LocaleLayout({ children }: ILocaleLayout) {
  return <main>{children}</main>;
}
