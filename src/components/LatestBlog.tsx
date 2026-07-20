
const LatestBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Capturing Emotions in Every Frame",
      excerpt: "Discover the art of emotional storytelling through lens and light. Every photograph tells a unique story that resonates with the heart.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 15, 2024"
    },
    {
      id: 2,
      title: "The Perfect Wedding Day Timeline",
      excerpt: "Planning your wedding photography timeline is crucial for capturing every precious moment of your special day.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 10, 2024"
    },
    {
      id: 3,
      title: "Portrait Photography Tips",
      excerpt: "Master the art of portrait photography with these professional tips and techniques for stunning results.",
      image: "https://images.unsplash.com/photo-1554048612-b6a482b80ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 5, 2024"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-soft-black mb-4">
            - LATEST BLOG -
          </h2>
          <p className="text-lg text-dust-violet max-w-2xl mx-auto">
            Capturing Emotions in Every Frame
          </p>
          <p className="text-base text-dust-violet/80 max-w-3xl mx-auto mt-4">
            Dive into our latest thoughts, behind-the-scenes stories, and professional tips. Each blog post shares our passion for photography and the art of capturing life's most precious moments.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-soft-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <p className="text-sm text-dust-violet mb-2">{post.date}</p>
                <h3 className="text-xl font-playfair font-bold text-soft-black mb-3 group-hover:text-golden transition-colors">
                  {post.title}
                </h3>
                <p className="text-dust-violet/80 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="bg-soft-black text-white px-8 py-3 font-medium hover:bg-golden transition-colors duration-300">
            READ ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
