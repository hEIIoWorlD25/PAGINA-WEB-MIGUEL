import { motion } from "framer-motion"
import TruckCard from "./TruckCard"
import { trucks } from "../data/trucks"
import { useState } from "react"
import TruckModal from "./TruckModal"

function Trucks() {
    const [selectedTruck, setSelectedTruck] = useState(null)
  return (
    <section
      id="camiones"
      className="bg-gray-50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[3px] w-10 rounded-full bg-red-600" />

            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">
              Nuestros camiones
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
                9 camiones
                <span className="text-red-600"> disponibles</span>
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Revisa las principales características de cada unidad y
                descarga su ficha técnica para conocer todos los detalles.
              </p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4">
              <p className="text-sm font-semibold text-red-700">
                Sin precios publicados
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Consulta directamente con el vendedor.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {trucks.map((truck, index) => (
            <TruckCard
              key={truck.id}
              truck={truck}
              index={index}
              onOpen={setSelectedTruck}
            />
          ))}
        </div>

      </div>
      <TruckModal
  truck={selectedTruck}
  onClose={() => setSelectedTruck(null)}
/>
    </section>
  )
}

export default Trucks