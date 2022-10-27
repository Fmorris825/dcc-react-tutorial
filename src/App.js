import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntry from './Components/AddEntry/AddEntry';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '10-26-2022'},{weight: 180, date: '10-27-2022'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntry addNewEntry = {addNewEntry}/>
      <EntriesChartTracker parentEntries = {entries}/>
    </div>
  );
}

export default App;
