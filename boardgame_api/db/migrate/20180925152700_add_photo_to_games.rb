class AddPhotoToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :photo_url, :string
  end
end
