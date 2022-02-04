import SectionWrapper from './components/SectionWrapper/SectionWrapper';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './path/user.json';
import data from './path/data.json';
import friends from './path/friends.json';
import transactions from './path/transactions.json';

export default function App() {
  return (
    <>
      <SectionWrapper title="Profile">
        <Profile
          userName={user.userName}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </SectionWrapper>
      {/* =============== */}
      <SectionWrapper>
        <Statistics title="Upload stats" stats={data} />
      </SectionWrapper>
      {/* =============== */}
      <SectionWrapper title="Friend list">
        <FriendList friends={friends} />
      </SectionWrapper>
      {/* =============== */}
      <SectionWrapper title="Transaction history">
        <TransactionHistory items={transactions} />
      </SectionWrapper>
    </>
  );
}
