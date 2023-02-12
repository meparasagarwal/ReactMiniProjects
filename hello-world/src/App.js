import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from  './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import LifecycleA from './components/LifecycleA';
//  import FragmentDemo from './components/FragmentDemo';
//  import Table from './components/Table';
// import PureComp from './components/PureComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';

// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
      <Counter render = {(count,incrementCount)=>( 
      <ClickCounterTwo count ={count} incrementCount={incrementCount}/>
      )}/>
      <Counter render = {(count,incrementCount)=>( 
      <HoverCounterTwo count ={count} incrementCount={incrementCount}/>
      )}/>
      {/* <HoverCounter/>
      <ClickCounter/> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <ParentComp/> */}
      {/* <FragmentDemo/>
      <Table/> */}
      {/* <LifecycleA/>  */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <Message name="paras"/> */}
      {/* <Greet name="paras" heroName="ironman"/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <Counter/> */}
    </div>
  );
}  

export default App; 
 