class Travel {
  constructor(
    id,
    name,
    price,
    image,
    description,
    location,
    createdAt,
    updatedAt,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
    this.location = location;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Travel;
