import SummaryForm from './pages/summary/SummaryForm';
import Options from './pages/entry/Options';

function App() {
  return (
    <div className='App'>
      <SummaryForm />
      <Options optionType='scoops' />
      <Options optionType='toppings' />
    </div>
  );
}

export default App;
