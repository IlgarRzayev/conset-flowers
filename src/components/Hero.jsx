export default function Hero() {
  return (
    <section id="home" className="bg-light text-center " style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="display-4 text-success fw-bold mb-3">Conset Flowers</h1>
        <p className="lead text-muted mb-4">
          Sevdikleriniz için çiçek arıyorsanız doğru adresdesiniz.
        </p>
        <a href="#products" className="btn btn-success btn-lg px-4">
          Ürünlerimizi Keşfedin
        </a>
      </div>
    </section>
  );
}