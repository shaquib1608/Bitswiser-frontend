function Process() {

    const steps = [
        "Requirement Discussion",
        "Proposal & Quotation",
        "Design & Development",
        "Testing & Delivery"
    ];

    return (
        <section className="py-24 px-6">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-14">
                    How We Work
                </h2>

                <div className="grid md:grid-cols-4 gap-8">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-8 rounded-xl text-center"
                        >
                            <div className="text-cyan-400 text-3xl font-bold mb-4">
                                {index + 1}
                            </div>

                            <h3>{step}</h3>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Process;