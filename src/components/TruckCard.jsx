import { motion } from "framer-motion"
import { contactInfo } from "../data/contact"
import {
  CalendarDays,
  Gauge,
  Settings,
  Download,
  MessageCircle,
} from "lucide-react"

function TruckCard({ truck, index, onOpen }) {
  const phone = contactInfo.phoneWhatsApp

  const message = encodeURIComponent(
    `Hola ${contactInfo.sellerName}, estoy interesado en el ${truck.marca} ${truck.modelo} publicado en la página de ${contactInfo.companyName}. ¿Podrías brindarme más información?`
  )

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`

  return (
    <motion.article
      onClick={() => onOpen(truck)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/10"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={truck.imagen}
          alt={`${truck.marca} ${truck.modelo}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          Disponible
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
          {truck.marca}
        </p>

        <h3 className="mt-1 text-2xl font-black text-black">
          {truck.modelo}
        </h3>

        <div className="mt-6 space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <CalendarDays size={18} className="text-red-600" />
            <span>
              Año: <strong className="text-gray-900">{truck.anio}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Gauge size={18} className="text-red-600" />
            <span>
              Kilometraje:{" "}
              <strong className="text-gray-900">{truck.kilometraje}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Settings size={18} className="text-red-600" />
            <span>
              Motor: <strong className="text-gray-900">{truck.motor}</strong>
            </span>
          </div>
        </div>

        <div className="mt-7 grid gap-3">
          <motion.a
            href={truck.ficha}
            download
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 font-bold text-white transition-colors hover:bg-red-700"
          >
            <Download size={19} />
            Descargar ficha técnica
          </motion.a>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-red-600 bg-white px-5 py-4 font-bold text-red-600 transition-colors hover:bg-red-50"
          >
            <MessageCircle size={19} />
            Consultar por WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}

export default TruckCard