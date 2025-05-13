import Sidebar from './Sidebar';
import InnerConintaner from './InnerConintaner';

const MainConintaner = () => {
  return (
    <div className="flex">
      <Sidebar />
      <InnerConintaner />
    </div>
  );
};

export default MainConintaner;
