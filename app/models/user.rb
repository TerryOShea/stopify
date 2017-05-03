VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :email, :username, uniqueness: true
  validates :username, length: { minimum: 3, maximum: 30 }
  validates :password, length: { minimum: 6, maximum: 30, allow_nil: true }
  validates :gender, inclusion: { in: %w(M F N) }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(identifier, password)
    if VALID_EMAIL_REGEX.match(identifier) # identifier is an email
      user = User.find_by(email: identifier)
    else # identifier is a username
      user = User.find_by(username: identifier)
    end
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom::urlsafe_base64(16)
  end

end
