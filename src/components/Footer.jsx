import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone, ArrowUp } from "lucide-react"
import { contactInfo } from "../data/contact"

function Footer() {
  const phone = contactInfo.phoneWhatsApp

  const message = encodeURIComponent(
    "Hola Miguel Angel, vi los camiones disponibles en la página de Almacenes Santa Clara y quisiera recibir más información."
  )

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <footer className="bg-neutral-950 px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">
              <a href="#inicio" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 font-black">
                  SC
                </div>

                <div>
                  <p className="text-xl font-black">
                    ALMACENES{" "}
                    <span className="text-red-500">
                      SANTA CLARA
                    </span>
                  </p>

                  <p className="text-sm text-gray-400">
                    Camiones para tu negocio
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-md leading-7 text-gray-400">
                Consulta nuestras unidades disponibles y descarga sus fichas
                técnicas. Atención personalizada por Miguel Angel Cumpa Cajo.
              </p>
            </div>

            <div>
              <h3 className="font-black">
                Navegación
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-gray-400">
                <a
                  href="#inicio"
                  className="transition hover:text-red-500"
                >
                  Inicio
                </a>

                <a
                  href="#camiones"
                  className="transition hover:text-red-500"
                >
                  Camiones
                </a>

                <a
                  href="#vendedor"
                  className="transition hover:text-red-500"
                >
                  Sobre nosotros
                </a>

                <a
                  href="#contacto"
                  className="transition hover:text-red-500"
                >
                  Contacto
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-black">
                Contacto
              </h3>

              <div className="mt-5 space-y-4 text-sm text-gray-400">

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-red-500" />
                  <span>{contactInfo.phoneDisplay}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-red-500" />
                  <span>{contactInfo.email}</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <MessageCircle
                    size={18}
                    className="text-red-500"
                  />
                  WhatsApp
                </a>

              </div>
            </div>

          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Almacenes Santa Clara. Todos los
              derechos reservados.
            </p>

            <button
              onClick={scrollTop}
              className="flex items-center gap-2 font-bold text-gray-400 transition hover:text-white"
            >
              Volver arriba
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </footer>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 180,
        }}
        whileHover={{
          scale: 1.12,
          y: -4,
        }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-600/30"
      >
        <MessageCircle size={29} />
      </motion.a>
    </>
  )
}

export default Footer