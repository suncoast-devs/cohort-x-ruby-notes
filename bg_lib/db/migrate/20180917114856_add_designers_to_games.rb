# frozen_string_literal: true
class AddDesignersToGames < ActiveRecord::Migration[5.2]
  def change
    add_reference :games, :designer, foreign_key: true
  end
end
