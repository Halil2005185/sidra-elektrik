import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate("")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoagin] = useState(false)
  const [showPassword, setshowPassword] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("")
      setLoagin(true)
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/auth/register`,
        { username: name, email, password }
      )
      localStorage.setItem("token", res.data.jwt)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      window.dispatchEvent(new Event("storage"))
      navigate("/")


    } catch (err) {
      setError(err.response?.data?.error?.message || "Bir hata oluştu")
    } finally {

      setLoagin(false)
    }

  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-cyan-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-[1.01]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600 mb-2">
            Hesap Oluşturun
          </h2>
          <p className="text-gray-500 text-sm">Aramıza katılmak için bilgilerinizi girin</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
              Ad Soyad
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-sm"
              placeholder="Adınız Soyadınız"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-sm"
              placeholder="ornek@mail.com"
              required
            />
          </div>

          <div className='relative' >
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Şifre
            </label>
            <input
              type={showPassword ? "password" : "text"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-sm"
              placeholder="••••••••"
              required
            />

            <button
              type="button"
              onClick={() => setshowPassword(!showPassword)}
              className="absolute right-3 top-1/2 flex items-center  text-gray-400 hover:text-emerald-500 transition-colors cursor-pointer"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>




          <button
            disabled={loading}
            type="submit"
            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all shadow-lg transform hover:-translate-y-0.5"
          >
            {loading ? (<>
              <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Giriş Yapılıyor...
            </>) :
              "Kayıt Ol"
            }
          </button>
          {error &&
            <p className='text-red-600 text-[15px] mx-auto w-fit' >Bu e-posta veya kullanıcı adı zaten kullanılıyor</p>
          }
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Zaten bir hesabınız var mı?{' '}
          <Link to="/login" className="font-bold text-sky-600 hover:text-cyan-500 transition-colors">
            Giriş Yap
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;