class User {
  constructor(id, name, phone, email, password, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = User;
