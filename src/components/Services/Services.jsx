import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceService";

function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {

        const loadServices = async () => {

            try {

                const response = await getServices();
                setServices(response.data);

            } catch (error) {

                console.error("Error loading services:", error);

            }
        };

        loadServices();

    }, []);

    return (
        <section id="services" className="py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-14">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {services.map((service) => (

                        <div
                            key={service.id}
                            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/40"
                        >

                            <h3 className="text-2xl font-semibold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-400">
                                {service.description}
                            </p>

                            {service.price && (
                                <p className="text-cyan-400 mt-4">
                                    ₹ {service.price}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Services;