import Image from 'next/image'

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="ml-2 text-xl font-bold">CoinStats</span>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-primary">Dashboard</a></li>
          <li><a href="#" className="hover:text-primary">Markets</a></li>
          <li><a href="#" className="hover:text-primary">Portfolio</a></li>
          <li><a href="#" className="hover:text-primary">Settings</a></li>
        </ul>
      </nav>
    </header>
  )
} 