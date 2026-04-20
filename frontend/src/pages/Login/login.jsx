import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  async function HandleLoginForm(e) {
    try {
      setLoading(true)
      setEmail("")
      e.preventDefault()
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/auth/login`, { email, password })
      localStorage.setItem("usertoken", res.data.jwt)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      window.dispatchEvent(new Event("storage"))
      navigate("/")
    } catch (err) {
      setError(err.response?.data?.error?.message || "Bir hata oluştu")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFBF5] to-[#FFF3E0] font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-[#C49A3C]/8 p-8 border border-[#EDE4D6] transform transition-all hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C49A3C] to-[#B8860B] mb-2">
            Tekrar Hoş Geldiniz
          </h2>
          <p className="text-[#8C7B6B] text-sm">Hesabınıza giriş yapın</p>
        </div>

        <form onSubmit={HandleLoginForm} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#3B2F1E] mb-2" htmlFor="email">E-posta Adresi</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#EDE4D6] focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-all bg-[#FFFBF5] text-[#2D2418] placeholder-[#B8A88A]"
              placeholder="ornek@mail.com" required />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-[#3B2F1E]" htmlFor="password">Şifre</label>
              <a href="#" className="text-sm font-semibold text-[#C49A3C] hover:text-[#B8860B] transition-colors">Şifremi unuttum?</a>
            </div>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#EDE4D6] focus:outline-none focus:ring-2 focus:ring-[#C49A3C]/30 focus:border-[#C49A3C] transition-all bg-[#FFFBF5] text-[#2D2418] placeholder-[#B8A88A]"
              placeholder="••••••••" required />
          </div>

          {error && <p className='text-red-600 text-[14px] text-center font-medium'>Girdiğiniz e-posta veya şifre hatalıdır</p>}

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="h-4 w-4 text-[#C49A3C] focus:ring-[#C49A3C] border-[#EDE4D6] rounded cursor-pointer accent-[#C49A3C]" />
            <label htmlFor="remember" className="ml-2 block text-sm text-[#8C7B6B] cursor-pointer">Beni hatırla</label>
          </div>

          <button disabled={loading} type="submit"
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#C49A3C] to-[#D4A84B] hover:from-[#B8860B] hover:to-[#C49A3C] text-white font-bold py-3.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C49A3C] transition-all shadow-lg shadow-[#C49A3C]/20 transform hover:-translate-y-0.5">
            {loading ? (<>
              <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Giriş Yapılıyor...
            </>) : "Giriş Yap"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#8C7B6B]">
          Hesabınız yok mu?{' '}
          <Link to={"/register"} className="font-bold text-[#C49A3C] hover:text-[#B8860B] transition-colors">Kayıt Ol</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;