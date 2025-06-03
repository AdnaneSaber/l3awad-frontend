import { FC } from 'react';

interface HeaderProps {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
}

const Header: FC<HeaderProps> = ({ onOpenArticle, timeout }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>🚧 Under Construction 🚧</h1>
        <p>
         We're working hard to bring something awesome to life.{' '}
          <br />
          Check back soon for updates!{' '}
        </p>
      </div>
    </div>
  </header>
);

export default Header;
