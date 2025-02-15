export default function Location() {
    return (
      <section id="location" className="py-16 px-3 md:px-28 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1e7a39]">Lokasi Kami</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Gado - Gado Kaliurang</h3>
              <p className="text-lg mb-2">Jalan Melati No. 44</p>
              <p className="text-lg mb-2">Lowokwaru, Malang</p>
              <p className="text-lg mb-2">Jawa Timur, Indonesia</p>
              <p className="text-lg mb-4">Jam Buka: 08:00 AM - 3:00 PM</p>
              <a
                href="https://maps.google.com/maps?q=Jalan%20Melati%20No.%2044,%20Malang,%20Lowokwaru,%20Jawa%20Timur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f17531] text-white px-6 py-2 rounded-full hover:bg-[#faa41a] transition duration-300"
              >
                Yuk Mampir!
              </a>
            </div>
            <div className="md:w-1/2 w-full">
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Jalan%20Melati%20No.%2044,%20Malang,%20Lowokwaru,%20Jawa%20Timur+(Gado%20-%20Gado%20Kaliurang)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/"/>gps drone
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  