import React from 'react';
import developerAvatar from '../../assets/developer_avatar.png';

function Developer() {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const emailLink = isMobile
        ? "mailto:ismailhalil073@gmail.com?subject=Hello&body=Hi%20Halil,"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=ismailhalil073@gmail.com&su=Hello&body=Hi%20Halil,";
    return (
        <section className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4 font-sans relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-4xl w-full bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-sky-900/10 overflow-hidden relative z-10 border border-white/50">
                <div className="h-48 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                </div>

                <div className="px-8 sm:px-12 pb-12 text-center -mt-24 relative z-10">
                    <div className="w-40 h-40 mx-auto bg-white rounded-full p-2 shadow-2xl shadow-sky-500/20 mb-8 relative group">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                        <img
                            src={developerAvatar}
                            alt="Halil İsmail"
                            className="w-full h-full rounded-full object-cover relative z-10 bg-slate-100 ring-4 ring-white"
                        />
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-sky-100">
                        <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                        Full-Stack Geliştirici
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 mb-6 drop-shadow-sm">
                        Halil İsmail
                    </h1>

                    <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                        Modern, hızlı ve kullanıcı dostu web uygulamaları geliştiriyorum.
                        Yaratıcı çözümler üretmeyi ve projelerimi sürekli geliştirmeyi <span className="font-medium text-sky-600">tutkuyla</span> yapıyorum. 🚀
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express', 'JavaScript', 'PostgreSQL'].map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors duration-300 cursor-default shadow-sm hover:shadow">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 border-t border-slate-200/60 max-w-2xl mx-auto">
                        <a href="https://wa.me/905399879801"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-2xl hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-semibold text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Beni Ara
                        </a>
                        <a
                            href={emailLink}
                            target={isMobile ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-2xl border-2 border-slate-100 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-semibold text-lg shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            E-posta Gönder
                        </a>
                    </div>
                </div>
            </div>

            {/* Custom Animations for Tailwind */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
            `}} />
        </section>
    );
}

export default Developer;