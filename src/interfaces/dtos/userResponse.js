class UserResponse {
  constructor(id, name, email, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromEntity(userEntity) {
    return new UserResponse(
      userEntity.id,
      userEntity.name,
      userEntity.email,
      userEntity.createdAt,
      userEntity.updatedAt,
    );
  }
}

module.exports = UserResponse;
