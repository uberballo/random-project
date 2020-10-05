import React from 'react';
import StockRows from '../components/StockRows'

const tempStock = [
  { name: "asd" },
  { name: "qwe" },
  { name: "asd1" },
  { name: "asd2" },
]

function Home() {
  return <div>
    Helloaa
    <StockRows stocks={tempStock} />
  </div>
}

export default Home