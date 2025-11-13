export default function Products() {
  const products = [
    { 
      id: 1, 
      name: "Mavi Gül Buketi", 
      img: "/images/mavi_gul.jpeg", 
      desc: "Mavi güller.",
      price: "300 TL"
    },
    { 
      id: 2, 
      name: "Kırmızı Gül Buketi", 
      img: "/images/kirmizi_gul.jpeg", 
      desc: "Kırmızı Güller.",
      price: "300 TL"
    },
    { 
      id: 3, 
      name: "Yeşil Gül Buketi", 
      img: "/images/yesil_gul.jpeg", 
      desc: "Yesil Güller.",
      price: "300 TL"
    },
  ];

  return (
    <section id="products" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="text-success mb-2">Ürünlerimiz</h2>
        </div>
      </div>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src={product.img} 
                className="card-img-top" 
                alt={product.name}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{product.name}</h5>
                <p className="card-text text-muted flex-grow-1">{product.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-success">{product.price}</span>
                  <button className="btn btn-outline-success btn-sm">
                    Detaylı İncele
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}