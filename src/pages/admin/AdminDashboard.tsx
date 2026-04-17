import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts'
import { Zap, Battery, ArrowDownToLine, Activity } from 'lucide-react'

const mockData = [
  { name: 'Lun', prelievo: 400, produzione: 240, autoconsumo: 240 },
  { name: 'Mar', prelievo: 300, produzione: 139, autoconsumo: 139 },
  { name: 'Mer', prelievo: 200, produzione: 380, autoconsumo: 200 },
  { name: 'Gio', prelievo: 278, produzione: 390, autoconsumo: 278 },
  { name: 'Ven', prelievo: 189, produzione: 480, autoconsumo: 189 },
  { name: 'Sab', prelievo: 239, produzione: 380, autoconsumo: 239 },
  { name: 'Dom', prelievo: 349, produzione: 430, autoconsumo: 349 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Vasca di Riepilogo (Globale)</h1>
          <p className="text-zinc-500 mt-1">Visione d'insieme aggregata della Comunità Energetica Rinnovabile.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-zinc-200 shadow-sm text-sm font-medium text-zinc-600">
          Ultimo aggiornamento: <span className="text-zinc-900">Oggi, 14:30</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Produzione Comunitaria", value: "1,240 kWh", trend: "+12%", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
          { title: "Prelievo da Rete", value: "850 kWh", trend: "-5%", icon: ArrowDownToLine, color: "text-rose-500", bg: "bg-rose-50" },
          { title: "Autoconsumo Virtuale", value: "920 kWh", trend: "+18%", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50" },
          { title: "Capacità Accumulo", value: "85%", trend: "Stabile", icon: Battery, color: "text-indigo-500", bg: "bg-indigo-50" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${kpi.bg}`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${kpi.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : kpi.trend.startsWith('-') ? 'bg-rose-100 text-rose-700' : 'bg-zinc-100 text-zinc-700'}`}>
                {kpi.trend}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 mb-1">{kpi.title}</p>
              <h3 className="text-3xl font-bold text-zinc-900">{kpi.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-zinc-200">
          <h3 className="text-lg font-bold text-zinc-900 mb-6">Andamento Settimanale (kWh)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }}/>
                <Line type="monotone" dataKey="produzione" name="Produzione" stroke="#f59e0b" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="prelievo" name="Prelievo" stroke="#f43f5e" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="autoconsumo" name="Autoconsumo" stroke="#10b981" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 flex flex-col">
          <h3 className="text-lg font-bold text-zinc-900 mb-6">Stato Nodi CER</h3>
          
          <div className="space-y-4 flex-1">
             {[
               { id: 'N01', type: 'Producer', status: 'Ottimo', power: '4.2 kW', color: 'bg-emerald-500' },
               { id: 'N02', type: 'Prosumer', status: 'Buono', power: '1.5 kW', color: 'bg-emerald-500' },
               { id: 'N03', type: 'Consumer', status: 'Alto Prelievo', power: '-2.8 kW', color: 'bg-amber-500' },
               { id: 'N04', type: 'Producer', status: 'Offline', power: '0 kW', color: 'bg-rose-500' },
               { id: 'N05', type: 'Prosumer', status: 'Ottimo', power: '3.1 kW', color: 'bg-emerald-500' },
             ].map(node => (
               <div key={node.id} className="flex items-center justify-between p-3 hover:bg-zinc-50 rounded-xl transition-colors border border-transparent hover:border-zinc-100 cursor-default">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${node.color} shadow-[0_0_8px_currentColor]`} />
                    <div>
                      <p className="font-semibold text-zinc-900 text-sm">{node.id} • {node.type}</p>
                      <p className="text-xs text-zinc-500">{node.status}</p>
                    </div>
                  </div>
                  <div className="font-mono text-sm font-medium text-zinc-700">
                    {node.power}
                  </div>
               </div>
             ))}
          </div>
          
          <button className="w-full mt-4 py-2 border border-zinc-200 rounded-lg text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors">
            Vedi tutti i nodi
          </button>
        </div>
      </div>
    </div>
  )
}
