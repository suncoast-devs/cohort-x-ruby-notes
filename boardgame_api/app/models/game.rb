class Game < ApplicationRecord
  belongs_to :designer, optional: true
  validates :name, presence: true
end
