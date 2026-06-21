function WhyChooseUs() {

    const items = [
        "Fast Delivery",
        "Modern Technologies",
        "Affordable Pricing",
        "Long-Term Support"
    ];

    return (
        <section className="py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Why Choose BitWiser
                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-8 rounded-2xl text-center"
                        >
                            <h3 className="font-semibold text-xl">
                                {item}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;