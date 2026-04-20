import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/login`,
                { email, password }
            )
            localStorage.setItem("adminToken", res.data.token)
            window.dispatchEvent(new Event("storage"))
            navigate("/")
        } catch (err) {
            console.log(err)
            setError("E-posta veya şifre hatalı")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFBF5] to-[#FFF3E0] font-sans">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-[#C49A3C]/8 p-8 border border-[#EDE4D6]">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] mb-4 shadow-lg shadow-[#C49A3C]/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#2D2418] mb-2">Admin Girişi</h2>
                    <p className="text-[#8C7B6B] text-sm">Yönetim paneline erişmek için giriş yapın</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[#3B2F1E] mb-2">E-posta</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-[#EDE4D6] focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-all bg-[#FFFBF5] text-[#2D2418] placeholder-[#B8A88A]"
                            placeholder="admin@gmail.com" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#3B2F1E] mb-2">Şifre</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"
                            className="w-full px-4 py-3 rounded-xl border border-[#EDE4D6] focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-all bg-[#FFFBF5] text-[#2D2418] placeholder-[#B8A88A]"
                            placeholder="••••••••" required />
                    </div>

                    {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

                    <button type="submit" disabled={loading}
                        className="w-full bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] hover:from-[#B8860B] hover:to-[#C49A3C] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-[#C49A3C]/20 disabled:opacity-60">
                        {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AdminLogin