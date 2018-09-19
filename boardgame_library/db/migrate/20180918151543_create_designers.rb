class CreateDesigners < ActiveRecord::Migration[5.2]
  def change
    create_table :designers do |t|
      t.string :name
      t.string :company
      t.string :url
      t.string :photo_url

      t.timestamps
    end
  end
end
