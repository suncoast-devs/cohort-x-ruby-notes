# frozen_string_literal: true
class FixGamesFields < ActiveRecord::Migration[5.2]
  def change
    change_table :games do |t|
      t.rename :max_player, :max_players
      t.rename :duration, :min_duration
      t.integer :max_duration
    end
  end
end
