class Game < ApplicationRecord
  belongs_to :designer, optional: true
end
