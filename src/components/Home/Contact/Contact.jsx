import BackgroundSquare from "@/components/shared/BackgroundSquare/BackgroundSquare";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" name="contact">
      <div className="line__brake"></div>
      <div className="container py-10 sm:py-16 md:py-20 lg:py-32 relative">
        <BackgroundSquare />
        <div className="intro text-center mb-12 lg:mb-[72px]">
          <h2 className="hero__heading text-5xl md:text-6xl lg:text-7xl font-medium mb-4">
            Get In Touch
          </h2>
          <p className="text-light-gray text-xl">
            Got a question or proposal, or just want to say hello?
            <br /> Go ahead. to say hello? Go ahead.
          </p>
        </div>

        <div className="max-w-3xl mx-auto contact__box p-8 sm:p-10 md:p-16">
          <h3 className="hero__heading text-[40px] text-center mb-4">
            Send me a message!
          </h3>
          <form>
            <label className="input__label" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input__field"
            />

            <label className="input__label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input__field"
            />

            <label className="input__label" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Hi, I think we need a functional website for our products at Company X. How soon can you hop on to discuss this?"
              className="input__field"
            ></textarea>

            <div>
              <button
                type="submit"
                className="btn__pill__xl text-xl text-light-gray"
              >
                Soot
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
