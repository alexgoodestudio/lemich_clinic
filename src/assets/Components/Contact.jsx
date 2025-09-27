import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((err) => alert(err));
  };

  return (
    <section className="content-module bg-light py-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Left side: Form */}
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className="mb-4">
              <h2 className="heading-primary display-5 fw-semibold">
                Get In Touch
              </h2>
              <p className="body-primary mt-3">
                Questions, project inquiries, or just want to say hello? Fill out the form and we’ll respond promptly.
              </p>
            </div>

            {submitted ? (
              <p className="alert alert-success">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label text-muted">Name</label>
                    <input type="text" name="name" required className="form-control" />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label text-muted">Email</label>
                    <input type="email" name="email" required className="form-control" />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-muted">Message</label>
                    <textarea name="message" rows="5" required className="form-control"></textarea>
                  </div>

                  <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-success fw-semibold px-4 py-2">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
