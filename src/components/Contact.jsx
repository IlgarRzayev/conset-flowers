import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData(e.target);
      const response = await fetch("http://localhost/backend/contact.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      setStatus(result);
      
      if (result.includes("başarıyla")) {
        e.target.reset();
      }
    } catch (error) {
      setStatus("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center text-success mb-5">İletişim</h2>
          

          {status && (
            <div
              className={`alert ${
                status.includes("başarıyla") ? "alert-success" : "alert-danger"
              } text-center`}
            >
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Adınız Soyadınız"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="E-posta Adresiniz"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Mesajınız..."
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button 
                  type="submit" 
                  className="btn btn-success w-100 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );

}
