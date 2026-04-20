import { Link } from "react-router-dom";
function AdminSiber() {
    const navItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            ),
            href: "/admin/admin-mian"
        },
        {
            id: "urun-ekle",
            label: "Ürün Ekle",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            ),
            href: "/admin/admin-addProduct"
        },
        {
            id: "urun-listesi",
            label: "Ürün Listesi",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            ),
            href: "/admin/admin-allProduct"
        },
        {
            id: "faturalar",
            label: "Faturalar",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            ),
            href: "/admin/admin-invoice"

        },
        {
            id: "ayarlar",
            label: "Ayarlar",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            ),
            href: "/admin/admin-allProduct"

        },
    ];

    return (
        <aside className="w-full md:w-64 h-auto md:min-h-screen bg-gradient-to-b from-[#3B2F1E] to-[#2A2015] flex flex-col shadow-2xl flex-shrink-0 font-sans border-r border-[#C49A3C]/10">
            <div className="p-5 border-b border-[#C49A3C]/10">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#C49A3C] to-[#D4A84B] flex items-center justify-center shadow-lg shadow-[#C49A3C]/20 border border-[#EDE4D6]/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[15px] font-bold text-white tracking-wide">Yönetim Paneli</p>
                        <p className="text-[11px] text-[#A89880] tracking-widest font-medium uppercase">Sidra Elektrik</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 py-6 px-3 space-y-1">
                <p className="text-[10px] font-bold text-[#8C7B6B] uppercase tracking-[0.2em] px-3 mb-4">Menü</p>
                {navItems.map((navItem) => (
                    <Link
                        to={navItem.href}
                        key={navItem.id}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${location.pathname === navItem.href
                                ? "bg-gradient-to-r from-[#C49A3C]/20 to-transparent text-[#C49A3C] border-l-2 border-[#C49A3C]"
                                : "text-[#A89880] hover:text-white hover:bg-white/5 border-l-2 border-transparent"
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 flex-shrink-0 transition-colors duration-300 ${location.pathname === navItem.href ? "text-[#C49A3C]" : "text-[#A89880] group-hover:text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            {navItem.icon}
                        </svg>
                        {navItem.label}
                        {location.pathname === navItem.href && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#C49A3C] shadow-[0_0_8px_rgba(196,154,60,0.8)] animate-pulse" />}
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-[#C49A3C]/10 bg-black/10">
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A89880] hover:text-white hover:bg-[#C49A3C] transition-all duration-300 text-sm font-semibold group border border-transparent hover:border-[#C49A3C]/50 hover:shadow-lg hover:shadow-[#C49A3C]/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Siteye Dön
                </Link>
            </div>
        </aside>
    );
}

export default AdminSiber;