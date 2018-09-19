class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.string :description
      t.integer :min_players
      t.integer :max_players
      t.integer :min_duration
      t.integer :max_duration
      t.integer :min_age
      t.references :designer, foreign_key: true

      t.timestamps
    end
  end
end
