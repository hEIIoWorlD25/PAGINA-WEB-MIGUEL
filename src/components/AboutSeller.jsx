import { motion } from "framer-motion"
import { BadgeCheck, Handshake, FileCheck2, MessageCircle } from "lucide-react"

function AboutSeller() {
  const benefits = [
    {
      icon: BadgeCheck,
      title: "Experiencia y confianza",
      text: "Atención directa y acompañamiento durante todo el proceso de compra.",
    },
    {
      icon: Handshake,
      title: "Trato personalizado",
      text: "Recomendación de unidades según la necesidad y tipo de trabajo.",
    },
    {
      icon: FileCheck2,
      title: "Información clara",
      text: "Acceso a fichas técnicas y detalles de cada camión disponible.",
    },
    {
      icon: MessageCircle,
      title: "Contacto directo",
      text: "Comunicación rápida para consultas, disponibilidad y coordinación.",
    },
  ]

  return (
    <section
      id="vendedor"
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
            <img
              src="/images/miguel.jpg"
              alt="Miguel Angel Cumpa Cajo"
              className="h-[560px] w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-7 left-6 right-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl lg:left-10 lg:right-auto lg:w-80"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
              Atención personalizada
            </p>

            <p className="mt-2 text-xl font-black text-black">
              Miguel Angel Cumpa Cajo
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Almacenes Santa Clara
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[3px] w-10 rounded-full bg-red-600" />

            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">
              Sobre el vendedor
            </p>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
            Tu confianza es
            <span className="block text-red-600">
              nuestra prioridad
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Soy Miguel Angel Cumpa Cajo y formo parte de Almacenes Santa Clara.
            Mi objetivo es ayudarte a encontrar el camión adecuado para tu
            negocio, brindándote información clara, atención directa y
            acompañamiento durante el proceso de compra.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Cada unidad cuenta con su ficha técnica para que puedas revisar sus
            principales características antes de realizar una consulta.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 font-black text-black">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
    </section>
  )
}

export default AboutSeller