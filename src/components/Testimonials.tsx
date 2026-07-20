
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah and Michael",
      text: "Sandeep captured our wedding day perfectly. Every moment, every emotion - it's all there in the most beautiful way. We couldn't have asked for a better photographer.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Jennifer Smith",
      text: "The portrait session exceeded all my expectations. Sandeep has an incredible eye for detail and made me feel so comfortable throughout the entire shoot.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c122?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "David and Emma",
      text: "Professional, creative, and truly passionate about their craft. Our engagement photos turned out absolutely stunning. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-soft-black text-white">
      <div className="container mx-auto px-4 max-w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4">
            - TESTIMONIALS -
          </h2>
          <p className="text-base md:text-lg text-warm max-w-2xl mx-auto px-4">
            What our clients say about their experience with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:gap-8 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg text-center hover:bg-white/10 transition-all duration-300 mx-2"
            >
              <div className="mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto object-cover border-2 border-golden"
                />
              </div>
              <p className="text-warm/90 italic mb-6 leading-relaxed text-sm md:text-base">
                "{testimonial.text}"
              </p>
              <h4 className="text-golden font-medium text-sm md:text-base">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
