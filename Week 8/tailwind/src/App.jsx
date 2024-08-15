import React from 'react';
import { Flex } from "./components/Flex";
import { Grid } from "./components/Grid";
import { Responsive } from "./components/Responsive";
import { RevenueCard } from "./components/RevenueCard";
import './index.css';

function App() {
  return (
    <>
      <h1>hello</h1>
      {/* <Flex /> */}
      {/* <Grid /> */}
      {/* <Responsive /> */}
      <div className="grid grid-cols-4">
        <RevenueCard title="Amount Pending" amount="92,345.90" orderCount={13} />
      </div>
    </>
  );
}

export default App;
