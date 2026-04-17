import { useState } from 'react'
import { Trophy, Gift, Medal, User, Zap, Sparkles } from 'lucide-react'

const mockLeaderboard = [
  { id: 1, name: "Mario Rossi", role: "Consumer", points: 8450, syncedConsumption: "78%", badge: "oro", avatar: "MR" },
  { id: 2, name: "Giulia Bianchi", role: "Prosumer", points: 7200, syncedConsumption: "71%", badge: "argento", avatar: "GB" },
  { id: 3, name: "Luca Verdi", role: "Consumer", points: 6900, syncedConsumption: "65%", badge: "bronzo", avatar: "LV" },
  { id: 4, name: "Anna Neri", role: "Consumer", points: 5100, syncedConsumption: "50%", badge: "nessuno", avatar: "AN" },
  { id: 5, name: "Paolo Gialli", role: "Prosumer", points: 4800, syncedConsumption: "45%", badge: "nessuno", avatar: "PG" },
]

export default function AdminGamification() {
  const [rewardingId, setRewardingId] = useState<number | null>(null)
  
  const handleReward = (id: number) => {
    setRewardingId(id)
    setTimeout(() => {
      setRewardingId(null)
    }, 1500)
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto h-full pb-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Gamification & Premi</h1>
          <p className="text-zinc-500 mt-1">Supervisiona la Bacheca Sostenibilità ed eroga sconti extra ai membri più virtuosi.</p>
        </div>
        <div className="bg-gradient-to-r from-amber-200 to-amber-100 px-4 py-2 rounded-xl border border-amber-300 shadow-sm flex items-center gap-2">
          <Gift className="w-5 h-5 text-amber-600" />
          <span className="text-sm font-bold text-amber-800">Budget Premi Mensile: € 500,00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Leaderboard */}
        <div className="lg:col-span-2 space-y-4">
          
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
             <div className="p-5 border-b border-zinc-100 bg-zinc-50 flex justify-between items-center">
                <h2 className="font-bold text-zinc-900 text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-indigo-500" /> 
                  Classifica Sincronismo (Mese Corrente)
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Membri Totali: 144</span>
             </div>

             <div className="p-0">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-zinc-50/50 text-xs uppercase tracking-wider font-semibold text-zinc-500 border-b border-zinc-100">
                     <th className="p-4 pl-6">Posizione</th>
                     <th className="p-4">Utente</th>
                     <th className="p-4">Punti</th>
                     <th className="p-4">% Sincronismo</th>
                     <th className="p-4 text-center">Azione Premio</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-zinc-100">
                   {mockLeaderboard.map((user, index) => (
                     <tr key={user.id} className="hover:bg-zinc-50/80 transition-colors group">
                       <td className="p-4 pl-6">
                         <div className="flex items-center gap-3">
                           {index < 3 ? (
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${
                               index === 0 ? 'bg-amber-100 text-amber-700 border border-amber-300' :
                               index === 1 ? 'bg-slate-200 text-slate-700 border border-slate-300' :
                               'bg-orange-100 text-orange-800 border border-orange-300'
                             }`}>
                               {index + 1}
                             </div>
                           ) : (
                             <div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm text-zinc-400 bg-zinc-100">
                               {index + 1}
                             </div>
                           )}
                           {user.badge === 'oro' && <Medal className="w-5 h-5 text-amber-500 fill-amber-500/20" />}
                         </div>
                       </td>
                       <td className="p-4">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm border border-indigo-200">
                             {user.avatar}
                           </div>
                           <div>
                             <p className="font-bold text-zinc-900 text-sm">{user.name}</p>
                             <p className="text-xs text-zinc-500 flex items-center gap-1">
                               <User className="w-3 h-3" /> {user.role}
                             </p>
                           </div>
                         </div>
                       </td>
                       <td className="p-4">
                         <div className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded inline-block">
                           {user.points.toLocaleString()}
                         </div>
                       </td>
                       <td className="p-4">
                         <div className="flex items-center gap-2">
                            <span className="font-semibold text-zinc-700 text-sm">{user.syncedConsumption}</span>
                            <div className="w-full h-1.5 bg-zinc-200 rounded-full max-w-[60px]">
                               <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: user.syncedConsumption }}></div>
                            </div>
                         </div>
                       </td>
                       <td className="p-4 text-center">
                         <button
                           onClick={() => handleReward(user.id)}
                           disabled={rewardingId !== null || index > 2}
                           className={`px-3 py-1.5 rounded-lg text-sm font-bold flex items-center justify-center gap-1 w-full mx-auto transition-all ${
                             index <= 2 
                             ? rewardingId === user.id 
                               ? 'bg-emerald-100 text-emerald-700 pointer-events-none' 
                               : 'bg-zinc-900 text-white hover:bg-indigo-600 shadow-sm'
                             : 'bg-zinc-100 text-zinc-400 cursor-not-allowed opacity-50'
                           }`}
                         >
                           {rewardingId === user.id ? (
                             <>
                               <Sparkles className="w-4 h-4" /> Erogato
                             </>
                           ) : (
                             <>
                               <Gift className="w-4 h-4 text-inherit" /> Sconto
                             </>
                           )}
                         </button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 to-black rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-indigo-500/30 blur-3xl rounded-full"></div>
            
            <h3 className="font-bold text-lg mb-2 relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" /> Il Sincronismo
            </h3>
            <p className="text-indigo-100/80 text-sm leading-relaxed relative z-10">
              I membri accumulano punti quando i loro grafici di consumo coincidono con il picco solare della comunità. 
              Premiare la Top 3 mensile incentiva questa abitudine, aumentando il profitto complessivo della CER.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200">
             <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4 border-b border-zinc-100 pb-2">Storico Erogazioni</h3>
             <div className="space-y-4">
                {[
                  { user: "Elisa Bianchi", amount: "€ 15,00", desc: "1° Posto Marzo" },
                  { user: "Marco Neri", amount: "€ 10,00", desc: "2° Posto Marzo" },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold text-zinc-800">{h.user}</p>
                      <p className="text-xs text-zinc-500">{h.desc}</p>
                    </div>
                    <div className="text-sm font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      {h.amount}
                    </div>
                  </div>
                ))}
             </div>
             <button className="text-sm font-medium text-indigo-600 w-full mt-4 text-center hover:underline">
               Vedi tutto lo storico
             </button>
          </div>
        </div>

      </div>
    </div>
  )
}
