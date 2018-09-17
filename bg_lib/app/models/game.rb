class Game < ActiveRecord::Base
  belongs_to :designer
  validates :name, presence: true
end
