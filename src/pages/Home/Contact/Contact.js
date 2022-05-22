import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="lg:flex bg-base-100 mt-20">
        <div className="w-100 lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4327328746936!2d90.3979240149837!3d23.87426928452847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43bb800c33f%3A0xd2b2df37f280ef37!2sNorth%20Tower%2C%20Sonargaon%20Janapath%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1653206869051!5m2!1sen!2sbd"
            height="450"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="w-full"
          ></iframe>
        </div>
        <div className="w-100 lg:w-1/2 contact-bg text-white">
          <h3 className="text-3xl mt-5">Get In Touch</h3>
          <div className="mt-14 text-left flex justify-center items-center">
            <div>
              <div>
                <h4 className="text-xl font-bold">
                  <i class="fa-solid fa-phone-volume"></i> Call Us
                </h4>
                <p>+7 100 34 7892 34</p>
                <p>+7 100 54 3491 44</p>
              </div>
              <div className="mt-20">
                <h4 className="text-xl font-bold">
                  <i class="fa-solid fa-location-dot"></i> Address
                </h4>
                <p>United States of America</p>
                <p>New York, NY 10002</p>
                <p>543 Lane Date Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
