import { motion } from "framer-motion"
import { ArrowRight, Download, ShieldCheck } from "lucide-react"

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-28"
    >
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
            <ShieldCheck size={18} />
            Venta de camiones
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-black md:text-6xl lg:text-7xl">
            Camiones para hacer crecer
            <span className="block text-red-600">
              tu negocio
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Encuentra camiones seleccionados para tu negocio con atención
            personalizada de Miguel Angel Cumpa Cajo en Almacenes Santa Clara.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <motion.a
              href="#camiones"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700"
            >
              Ver camiones
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-7 py-4 font-bold text-gray-900 transition hover:border-red-600 hover:text-red-600"
            >
              <Download size={19} />
              Solicitar información
            </motion.a>

          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-gray-200 pt-6">

            <div>
              <p className="text-2xl font-black text-black">
                9
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Camiones disponibles
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-black">
                100%
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Atención directa
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-black">
                PDF
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Fichas técnicas
              </p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative"
        >

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <div className="overflow-hidden rounded-[2rem] bg-gray-100 shadow-2xl shadow-black/10">
              <img
                src="/images/camion-principal.jpg"
                alt="Camión de Almacenes Santa Clara"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                <p className="font-bold text-white">
                  Almacenes Santa Clara
                </p>

                <p className="mt-1 text-sm text-white/80">
                  Atención personalizada por Miguel Angel Cumpa Cajo
                </p>
              </div>
            </div>
          </motion.div>

          <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-red-100 blur-3xl" />

          <div className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full bg-red-600/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-7 -left-5 z-20 hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-xl lg:block"
          >
            <p className="text-sm text-gray-500">
              Atención directa
            </p>

            <p className="mt-1 font-black text-black">
              Miguel Angel Cumpa Cajo
            </p>

            <div className="mt-3 h-1 w-12 rounded-full bg-red-600" />
          </motion.div>

        </motion.div>
      </div>

      <div className="absolute left-0 top-[25%] h-32 w-2 rounded-r-full bg-red-600" />

    </section>
  )
}

export default Hero