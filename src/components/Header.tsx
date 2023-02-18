import HeaderStyle from './styles/Header.module.css'

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void
}

const Header = ({ query, setQuery }: HeaderProps) => {
  return (
    <header className={HeaderStyle.header} >
      <input
        className={HeaderStyle.input}
        placeholder="Busca un Pokemon"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
};

export default Header;