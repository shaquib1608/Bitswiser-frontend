function Quote() {

    return (
        <section className="py-24 px-6 bg-slate-900">

            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-10">
                    Request A Quote
                </h2>

                <form className="grid md:grid-cols-2 gap-5">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-4 rounded-xl bg-slate-800"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="p-4 rounded-xl bg-slate-800"
                    />

                    <input
                        type="text"
                        placeholder="Company Name"
                        className="p-4 rounded-xl bg-slate-800"
                    />

                    <select
                        className="p-4 rounded-xl bg-slate-800"
                    >
                        <option>₹10k - ₹25k</option>
                        <option>₹25k - ₹50k</option>
                        <option>₹50k - ₹100k</option>
                        <option>₹100k+</option>
                    </select>

                    <textarea
                        rows="6"
                        placeholder="Project Description"
                        className="md:col-span-2 p-4 rounded-xl bg-slate-800"
                    />

                    <button
                        className="md:col-span-2 bg-cyan-500 py-4 rounded-xl"
                    >
                        Request Quote
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Quote;