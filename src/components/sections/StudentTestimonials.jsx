/* ── Student Testimonials (3 cards) ─────────────────────────────────── */
const testimonials = [
  {
    stars: 5,
    text: '"I was struggling with JAMB prep, but the Exam Simulator changed everything. I learned to manage my time, and I scored 290!"',
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Chioma A.",
    role: "Unilag Student",
    offset: "",
  },
  {
    stars: 4.5,
    text: '"The AI Chat is like having a private tutor in my pocket. It explains complex physics concepts in a way I actually understand."',
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Emmanuel O.",
    role: "Engineering Major",
    offset: "md:-translate-y-4",
    halfStar: true,
  },
  {
    stars: 5,
    text: '"Uploading my notes and getting instant practice questions is magic. It saved me hours of creating flashcards manually."',
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Zainab B.",
    role: "Law Student",
    offset: "",
  },
];

const StarRating = ({ count, half }) => (
  <div className="flex items-center space-x-1 text-yellow-400 mb-4">
    {[...Array(Math.floor(count))].map((_, i) => (
      <i key={i} className="fas fa-star" />
    ))}
    {half && <i className="fas fa-star-half-alt" />}
  </div>
);

const StudentTestimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 left-0 text-9xl text-gray-100 font-serif leading-none select-none opacity-50">
        "
      </div>
      <div className="absolute bottom-10 right-0 text-9xl text-gray-100 font-serif leading-none select-none opacity-50 transform rotate-180">
        "
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-3">
            Student Success Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Don't Just Take Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Word For It
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 transform ${t.offset}`}
            >
              <StarRating count={t.stars} half={t.halfStar} />
              <p className="text-gray-600 mb-6 italic">{t.text}</p>
              <div className="flex items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
