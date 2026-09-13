import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Camiones", href: "#camiones" },
    { name: "Sobre nosotros", href: "#vendedor" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
  scrolled
    ? "border-gray-200 bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl"
    : "border-transparent bg-white/90 backdrop-blur-md"
}`}
      >
        <div
  className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
    scrolled ? "py-3" : "py-4"
  }`}
>

          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 font-black text-white shadow-md">
              SC
            </div>

            <div>
              <p className="text-base font-black leading-tight text-black md:text-lg">
                ALMACENES{" "}
                <span className="text-red-600">
                  SANTA CLARA
                </span>
              </p>

              <p className="text-xs font-medium text-gray-500">
                Camiones para tu negocio
              </p>
            </div>
          </motion.a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group relative py-2 font-semibold text-gray-700 transition-colors hover:text-red-600"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#contacto"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-xl bg-red-600 px-5 py-3 font-bold text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700 md:block"
          >
            Contáctanos
          </motion.a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-black transition hover:bg-gray-100 md:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 top-[77px] z-40 w-full border-b border-gray-200 bg-white px-6 py-6 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-gray-800 transition hover:text-red-600"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-red-600 px-5 py-3 text-center font-bold text-white"
              >
                Contáctanos
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar