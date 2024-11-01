import { Header } from '@/components/Header'
import { StatsCard } from '@/components/StatsCard'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'

const dummyData = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    current_price: 65432.10,
    market_cap: 1284567890123,
    market_cap_rank: 1,
    price_change_percentage_24h: 2.5,
    price_change_percentage_7d: -1.2,
    price_change_percentage_30d: 15.7,
    total_volume: 28456789012,
    circulating_supply: 19458321,
    last_updated: '2024-03-20T10:00:00Z'
  },
  // Add 9 more similar entries with different values
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Coin Stats Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Total Market Cap" 
            value="$2.45T" 
            change="2.5" 
          />
          <StatsCard 
            title="24h Volume" 
            value="$84.5B" 
            change="-1.2" 
          />
          <StatsCard 
            title="BTC Dominance" 
            value="48.2%" 
            change="0.8" 
          />
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>24h %</TableHead>
                <TableHead>7d %</TableHead>
                <TableHead>Market Cap</TableHead>
                <TableHead>Volume (24h)</TableHead>
                <TableHead>Circulating Supply</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyData.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell>{coin.market_cap_rank}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <span className="font-medium">{coin.name}</span>
                    <span className="text-muted-foreground">{coin.symbol}</span>
                  </TableCell>
                  <TableCell>${coin.current_price.toLocaleString()}</TableCell>
                  <TableCell className={coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>
                  <TableCell className={coin.price_change_percentage_7d >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {coin.price_change_percentage_7d.toFixed(2)}%
                  </TableCell>
                  <TableCell>${(coin.market_cap / 1e9).toFixed(2)}B</TableCell>
                  <TableCell>${(coin.total_volume / 1e9).toFixed(2)}B</TableCell>
                  <TableCell>{coin.circulating_supply.toLocaleString()} {coin.symbol}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}
