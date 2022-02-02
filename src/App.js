import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';
import user from './path/user.json';

import data from './path/data.json';





export default function App() {
  return (
    <div>
       <Profile  
        userName={user.userName}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
       <Statistics title="Upload stats" stats={data} />
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>
    </div>
  );
}