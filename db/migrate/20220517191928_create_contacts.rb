class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :phone_number
      t.string :address
      t.string :description
      t.string :photo
      t.boolean :favorite
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
