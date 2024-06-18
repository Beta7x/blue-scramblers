const prisma = require("./prismaClient");

class BookingRepository {
  async createBooking(data) {
    const booking = await prisma.booking.create(data);
  }
}
