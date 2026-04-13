import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const contactInfo = [
        {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
            label: "Adresimiz",
            value: "Karagoz Mah Karanfil SK. GaziAntep, Türkiye",
        },
        {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
            label: "Telefon",
            value: "+905399879801",
        },
        {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
            label: "E-posta",
            value: "ismailhalil073@gmail.com",
        },
        {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
            label: "Çalışma Saatleri",
            value: "Pazartesi – Cumartesi: 09:00 – 18:00",
        },
    ];

    return (
        <main className="font-sans">
            {/* ── Page Banner ── */}
            <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 py-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle, #7dd3fc 1px, transparent 1px)", backgroundSize: "28px 28px" }}
                />
                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/15 border border-sky-500/20 rounded-full mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-xs font-semibold text-sky-300 tracking-wider uppercase">Bize Ulaşın</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                        İletişim{" "}
                        <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Formu</span>
                    </h1>
                    <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
                        Sorularınız, önerileriniz veya sipariş için bizimle iletişime geçin. En kısa sürede yanıt vereceğiz.
                    </p>
                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 mt-5 text-xs text-slate-500">
                        <Link to="/" className="hover:text-sky-400 transition-colors">Ana Sayfa</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <span className="text-sky-400">İletişim</span>
                    </div>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">

                    {/* Contact Cards (left col) */}
                    <div className="space-y-5">
                        {contactInfo.map(({ icon, label, value }) => (
                            <div key={label} className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-100 hover:-translate-y-0.5 transition-all duration-300">
                                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                                        {icon}
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form (right 2 cols) */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8 md:p-10">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-xl shadow-sky-500/30 animate-bounce">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800">Mesajınız İletildi!</h3>
                                    <p className="text-slate-500 max-w-sm text-sm">En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.</p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                                        className="mt-4 px-6 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-full text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-sky-500/20"
                                    >
                                        Yeni Mesaj
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-xl font-bold text-slate-800 mb-1">Mesaj Gönderin</h2>
                                    <p className="text-sm text-slate-500 mb-8">Tüm alanları doldurun, size en kısa sürede dönelim.</p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {/* Name */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Ad Soyad *</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Adınızı girin..."
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-3 focus:ring-sky-100 transition-all duration-200 bg-slate-50/50 focus:bg-white"
                                                />
                                            </div>
                                            {/* Email */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">E-posta *</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="E-posta adresiniz..."
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-3 focus:ring-sky-100 transition-all duration-200 bg-slate-50/50 focus:bg-white"
                                                />
                                            </div>
                                            {/* Phone */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Telefon</label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="0 5XX XXX XX XX"
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-3 focus:ring-sky-100 transition-all duration-200 bg-slate-50/50 focus:bg-white"
                                                />
                                            </div>
                                            {/* Subject */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="subject" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Konu *</label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-3 focus:ring-sky-100 transition-all duration-200 bg-slate-50/50 focus:bg-white appearance-none"
                                                >
                                                    <option value="" disabled>Konu seçin...</option>
                                                    <option value="satin-alma">Satın Alma</option>
                                                    <option value="siparis">Sipariş Takibi</option>
                                                    <option value="iade">İade / Değişim</option>
                                                    <option value="teknik">Teknik Destek</option>
                                                    <option value="diger">Diğer</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Mesajınız *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Mesajınızı buraya yazın..."
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-3 focus:ring-sky-100 transition-all duration-200 bg-slate-50/50 focus:bg-white resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="group relative w-full flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:scale-[1.01] transition-all duration-300 overflow-hidden"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                            </svg>
                                            <span className="relative">Mesajı Gönder</span>
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;